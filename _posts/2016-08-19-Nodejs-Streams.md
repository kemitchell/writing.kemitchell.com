---
title: Node.js Streams
description: fundamental abstractions reviewed and revisited
layout: post
tags:
- Node.js
- JavaScript
- Design Patterns
---

By request, a brief interpretation of the fundamental "stack" of abstractions in Node.js and how they sound in prior work and the project's history.

<!--jump-->

## Why JavaScript?

The purpose of Node.js was _not_ to write servers in JavaScript, but to write servers using only "non-blocking" APIs and libraries.  Non-blocking TCP and HTTP were already possible in other very popular languages, like Python and Ruby, with large open-source library repositories.  But but both core APIs and libraries in those languages routinely blocked all execution of other code while performing I/O.  It was easy to write a non-blocking server, but very hard to keep blocking code from creeping into the logic formulating responses.

All of this made existing languages, their core libraries, and existing library repositories, quite literally, worse than nothing.  Facing the need for a cleanish slate, JavaScript was an expedient choice:

1.  The language was well developed, but still "stuck" in web browsers.  There weren't any blocking I/O libraries to avoid.
2.  JavaScript was developed and understood as a limited, embedded language for scripting responses to events from higher-performance runtimes.

To see it one way, it wasn't that JavaScript _could_ be a good non-blocking server language, but that it _wasn't_ a traditional blocking language and had serious, intentional limitations to keep it that way.

But how could such a limited language express efficient servers?

## Event Emitters

The "event emitter" abstraction unifies web browser and server.  Node.js' [EventEmitter] prototype is directly analogous to [EventTarget] in the browser.  Events are identified by name and carry data payloads.  Call a function on the emitter prototype to register a function to be called on receipt of any future event with a given name.  What happens between and around handled events is the host runtime's problem.

[EventEmitter]: https://nodejs.org/api/events.html

[EventTarget]: https://dom.spec.whatwg.org/#interface-eventtarget

Both client-side applications and web servers need to request data from remote web servers, especially via HTTP.  [XMLHttpRequest] is an EventTarget.  [http.ClientRequest] is an EventEmitter.  Web browser and server functionality translate.  [http-browserify] adapts http.ClientRequest to XMLHttpRequest.  [xmlhttprequest] adapts XMLHttpRequest to http.ClientRequest.

[XMLHttpRequest]: https://xhr.spec.whatwg.org/#interface-xmlhttprequest

[http.ClientRequest]: https://nodejs.org/api/http.html#http_class_http_clientrequest

[http-browserify]: https://www.npmjs.com/package/http-browserify

[xmlhttprequest]: https://www.npmjs.com/package/xmlhttprequest

Node.js takes it a step further, defining EventEmitter instances for the server side:  datagram sockets, TCP sockets, and HTTP servers.  The familiar `http.createServer(handler)` merely constructs an HTTP server emitter and adds a listener to the `request` event, whose payloads are request and response objects.

## Streams as Event Emitters

Event data payloads in the browser are relatively small, and DOM event handlers pass time-intensive tasks, like DOM rerendering and networking, right back to the browser.  Relatively little computing happens in the event handlers.

Server programming means processing files, sockets, and other streams of ordered data.  These streams often comprise more data than any single process should or can keep in memory, made available not at once, but over time.  They must be processed a chunk at a time, and those chunks must come and go in reliable order.

EventEmitters allow us to express occurrences over time, as events.  They also provide a data channel---event payloads---to express variation in the meaning and content of events that occur.  The process of adding and invoking responses to events is handled.

Quoth Node.js' current [streams] documentation:

> All streams are instances of EventEmitter.

Streams emit and consume `data` events bearing data payloads of manageable size.  By default, streams expect `Buffer` or encoded `String` data chunks, representing variable-length slices of bytes in the overall stream.  So-called "object mode" streams emit and consume `data` events with object payloads, akin to DOM events.  All streams emit other events---`end`, `finish`, `error`, and so on---to communicate successes and failures outside JavaScript, in the runtime or data source.

[streams]: https://nodejs.org/api/stream.html

Node.js streams overlay expectations about the kind and ordering of events, as well as the kinds of data they will carry, on top of event emitters.  Once a `Readable` emits `close`, there will be no further `data` events.  Data events will provide `chunk` and `encoding` arguments.  And so on.

That overlay breaks with a few DOM traditions.  Rather than put all the data relevant for an input, like a mouse click, in a single event payload, Node.js streams trickle the data in a succession of event payloads, using a common event name---`data`---so consumers can join them.  Rather than treat the DOM or the client networking API as a single, unitary source of events, bequeathed to JavaScript by the runtime, Node.js programs create and discard many event emitters, each encapsulating events relevant to particular source of data, like an HTTP response or file.  The latter was strongly foreshadowed by `XMLHttpRequest`.

## Backpressure

Doing more time-intensive work in JavaScript means event handlers may not keep up with the rate of new events from the runtime.  Solutions to this problem are called "backpressure" systems.

Backpressure systems facilitate feedback from event handlers to event emitters.  The meaning of these messages usually boils down to "Send chunks." and "I'll request more chunks when I'm ready.".

When there is a difference between how much and how often data streams in, on the one hand, and how much and how often it can be processed, on the other, responding to backpressure requires buffering.  Buffering means storing chunks, usually in memory, until a consumer can process them.

TCP implements a backpressure system.  So do Node.js streams.

Node.js streams that produce data, called Readable streams, operate in two modes, "flowing" and "paused".

In flowing mode, Readable streams emit `data` events.  Backpressure signals prompt Readable streams to buffer new data chunks, rather than emit them immediately, and attempt to pause reading from whatever underlying resource---file, socket, and so on---provides the data.

In paused mode, Readable streams do not emit `data` events.  Instead, they return data chunks in response to `stream.read()` calls.  There is no separate mechanism for signaling backpressure.  Each call to `stream.read()` indicates readiness to process another chunk.

"Piping" streams together means committing one stream to process the output of another.  The processing stream may be a final destination, like a file, or may itself be a stream that transforms what it reads, say, by compressing it.  Node.js'

```javascript
readable.pipe(writable)
```

switches the Readable stream into flowing mode, shuttles data chunks to the passed Writable stream, and automates backpressure signaling.

## Interface

EventEmitter-based streams reflect the web browser event handling function of JavaScript and its assumptions about the relative performance of event generation and handling.  They resonate in how JavaScript was understood and used prior to Node.js, and to a certain extent how interpreters for browsers, including V8, were developed.

Most users of Node.js streams use the EventEmitter

```javascript
stream.on('data', function (data) {
  // ...
})
```

and

```javascript
stream.pipe(otherStream)
```

interfaces.  The EventEmitter interface, by itself, does not communicate backpressure.  But many stream-consuming tasks are more than fast enough to keep up.

Both of these interfaces obscure `stream.read()`, which is used internally, but not particularly intuitive.  With no thought to history, that would surprise.  Prototype functions like `read()` and return values are more elemental to JavaScript---and many other programming languages---than event emitters.

By contrast, Node.js stream backpressure is implemented using elemental JavaScript features.  Private

```javascript
prototype._write = function (chunk, encoding, callback) {
  // ...
}
```

and

```javascript
prototype._transform = function (chunk, encoding, callback) {
  // ...
}
```

functions, for implementing Writable and Transform streams, respectively, trigger backpressure signals on callback.  Since implementing Writable and Transform streams involves a fair amount of boilerplate, helper packages help to clean things up, exposing the essential functional interface:

```javascript
var through = require('through2')
var fs = require('fs')

fs.createReadStream('original.txt', 'utf8')
.pipe(
  through(

    // Transform each chunk by capitalizing its characters.
    function eachChunk (chunk, encoding, done) {
      // Buffer the transformed chunk.
      this.push(chunk.toUpperCase())
      // Trigger backpressure signals.
      done()
    }

  )
)
.pipe(fs.createWriteStream('transformed.txt'))
```

And for a Writable stream:

```javascript
var to = require('flush-write-stream')
var fs = require('fs')

var buffer = []

fs.createReadStream('original.txt', 'utf8')
.pipe(
  to(

    // Push each chunk to an array.
    function eachChunk (chunk, encoding, done) {
      buffer.push(chunk)
      // Signal that the chunk has been processed, and
      // that that this stream is ready for another chunk.
      done()
    }

  )
)
```

In essence, a Transform stream is a function that takes chunk arguments and calls back with transformed chunks.  A Writable stream is a function that takes chunk arguments and calls back once they're written.  Roughly speaking, calling back indicates readiness to process additional chunks.

Node.js' streams prototypes, and the [through2] and [flush-write-stream] packages, hide generic buffer-management and backpressure-signaling logic.  They also emit events---`readable` on Readable streams and `drain` on Writable streams---that communicate backpressure signals.

[through2]: https://www.npmjs.com/package/through2

[flush-write-stream]: https://www.npmjs.com/package/flush-write-stream

## The "Stack"

Reviewing:

1.  JavaScript allows us to define functions that receive arguments and trigger compute-intensive operations in a more efficient host runtime.
2.  Well-developed runtimes, especially web browsers, trigger JavaScript functions by allowing JavaScript to register handlers for named events with object payloads.
3.  Node.js brought a developed runtime for JavaScript in the web browser, V8, to the server side by defining event emitters not just for networking clients, but also networking servers.
4.  To enable JavaScript to handle memory- and compute-intensive server tasks, Node.js defined and implemented streams as specialized event emitters of Buffers, encoded strings, and arbitrary objects, with built-in backpressure buffering and signaling logic.
5.  In practice, stream authors use helper libraries that boil streams down to simple functions that take and call back with chunks of data, reminiscent of `stream.read()` for paused Readables.

## pull-stream

Node.js streams are not the only way to implement streams, even in JavaScript.  [pull-stream] reimagines JavaScript streams from a cleaner slate:

1.  pull-streams utilize only elemental JavaScript patterns, namely functions, return values, and callbacks.  They are not defined in terms of event emitters, or indeed any prototype.
2.  pull-streams do not "flow".  Every chunk is requested by a function call.  As with `stream.read()`, function calls simultaneously requests data and signal readiness to process it.

[pull-stream]: https://www.npmjs.com/package/pull-stream

pull-streams are freely translatable to and from current default and object-mode Node.js streams.  There helpful packages to do so.

I like elemental JavaScript patterns, and have had my fair share of problems and "oh, duh" moments with Node.js streams.  But I also find the EventEmitter interface very intuitive, as a longer-serving client-side JavaScript programmer.  There is also something powerful in the way that Node.js streams "resonate" in the EventEmitter concept.  At least to my eye, event handler code and chained `.pipe()` pipelines hint the nature of the underlying operations being performed.

I am also sympathetic to "pull by default".  I can do no better than this bit of documentation for [Apache Kafka], a distributed, stream-like message log whose "brokers" serve an append-only log of messages to "consumers":

> An initial question we considered is whether consumers should pull data from brokers or brokers should push data to the consumer.  In this respect Kafka follows a more traditional design, shared by most messaging systems, where data is pushed to the broker from the producer and pulled from the broker by the consumer. \[...\] There are pros and cons to both approaches.  However a push-based system has difficulty dealing with diverse consumers as the broker controls the rate at which data is transferred.  The goal is generally for the consumer to be able to consume at the maximum possible rate; unfortunately in a push system this means the consumer tends to be overwhelmed when its rate of consumption falls below the rate of production (a denial of service attack, in essence).  A pull-based system has the nicer property that the consumer simply falls behind and catches up when it can.  This can be mitigated with some kind of backoff protocol by which the consumer can indicate it is overwhelmed, but getting the rate of transfer to fully utilize (but never over-utilize) the consumer is trickier than it seems. \[...\]
>
> Another advantage of a pull-based system is that it lends itself to aggressive batching of data sent to the consumer.  A push-based system must choose to either send a request immediately or accumulate more data and then send it later without knowledge of whether the downstream consumer will be able to immediately process it. \[...\]
>
> The deficiency of a naive pull-based system is that if the broker has no data the consumer may end up polling in a tight loop, effectively busy-waiting for data to arrive. \[...\]

[Apache Kafka]: https://kafka.apache.org

Does this mean pull-stream is superior, that Node.js' build-in `fs`, `net`, and other modules should return pull-streams?  No, almost certainly not.  Though Node.js' streams implementation has changed markedly, especially in the project's early days, its current streams implementation reflects history not just up to Node.js' creation, but since.  A great many Node.js-style stream constructors and related helper libraries have been written.  Because pull-streams differ in style and implementation, rather than capability, connecting Node.js streams to and from pull-streams is a solved problem, at low cost.  Rewriting them is not, though the brilliant folks behind pull-streams have shown how easy writing analogous pull-stream libraries can be.

At the same time, I think it's vitally important to understand not just "the way things are", but what choices got them that way.  Some of those choices may have been "ideal" in some sense---perfectly informed, unrushed, deliberate.  Others surely reflected circumstances, those doing the choosing, and choices already made.

We all make choices in our software.  We are lucky when we realize we face a choice, luckier still to realize a choice and find we have real options.  Node.js streams and pull-stream represent a few options, and surely not all of them.  The difference between them begs vital questions about how we make choices, and how we should understand the choices others make.

---

Sincerest thanks to the folks behind both Node.js streams and pull-streams, many of whom I'm been lucky enough to meet and learn from.  May the high water marks of your happiness reach the heavens.
