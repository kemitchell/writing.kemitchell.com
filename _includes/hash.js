document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('input')
  input.addEventListener('input', onInput)
  onInput({target: input})
})

function onInput (event) {
  var value = event.target.value
  var display = document.getElementById('hash')
  if (value.length === 0) {
    display.textContent = 'Hash will appear here.'
  } else {
    var buffer = new window.TextEncoder('utf-8').encode(value)
    window.crypto.subtle.digest({name: 'SHA-256'}, buffer)
    .then(function (hash) {
      display.textContent = toHex(hash)
    })
    .catch(function (error) {
      console.error(error)
    })
  }
}

function toHex (arrayBuffer) {
  var hexadecimal = ''
  var dataView = new DataView(arrayBuffer)
  var length = dataView.byteLength
  for (var index = 0; index < length; index++) {
    var character = dataView.getUint8(index).toString(16)
    hexadecimal += character
  }
  return hexadecimal
}
