---
title: Certificated Assent
description: How signed is signed enough for a hosted software licensing deal?
layout: post
tags:
- Contracts
- Law
- SaaS
---

Software-as-a-Service and API contracts are caught between two worlds, nowhere at home.

<!--jump-->

In the business-to-consumer space, companies rely on publicly posted terms of use and formalistic indications of consumer assent, like "I have read and agree to the terms" checkboxes. Courts recognize such contracts with reservations and skepticism. But courts seem reluctant to impose formalities clients might pantomime, or that would otherwise slow e-commerce to a crawl.

In the business-to-business space, companies often license or even cross-license APIs and hosted software. Some of these deals are very expensive, but some are gratis or very cheap, with the parties reducing an agreement to writing primarily to address warranties, indemnity, intellectual property, and other "cap the risk" (in San Francisco: "contract condom") mechanisms. Apart from large vendors with widely known form agreements of their own, there is little good standardization in the agreements. Even routine deals take time to review and sign.

Businesspeople and developers accustomed to low-friction sign-up for hosted software find business-to-business practice cumbersome. Even very popular vendors that manage to offer a consumer-esque sign-up experience for customers usually staff dedicated teams of account managers to follow up on business users doing significant volume, to secure formal agreements. The provider bears any number of risks, from lack of capacity to contract through regulatory implications of a foreign client that claimed to be United States-based, by postponing the "real" contract to a later "intervention" stage.

Whether because the "low-friction" sign-up process is only a prelude, or because business-to-business hosted software negotiations are so ad hoc, it isn't uncommon for developers to finish integrating the product to be licensed before the deal is signed. Quoth the coders: licensing sucks.

## A solution

Even if a provider does everything that courts say the should to ensure a contract is formed on their publicly posted terms, "we have logs that say someone saying they were from X, Inc. agreed to the terms" is not enough for business-to-business licensing. The alternative, traditional legal closing process, with or without electronic signature, is just too slow. Lawyers and businesspeople on both side tend to think of signature as "we got it or we didn't", ignoring the range of certainty that various closing methods provide.

Within that continuum is a middle ground both susceptible to automation and productive of strong evidence of contractual formation. Its technical underpinnings are widely adopted and well understood. Consider the following scenario.

The provider of a web-facing API, Provider, is willing to license its API to any United States-based business seeking to integrate it into its own products and services. Its only legal requirement is that licensees give rigorously enforceable waivers, indemnities, IP assurances, and other risk-reducing terms.

Provider contracts with a third-party service, Broker. Provider uses Broker's hosted software to provide its contact information, information about itself, and a choice of form agreement meeting its license criteria.

Broker's software verifies the provided information, as well as Provider's identify, by referring to several publicly available Internet sources with information relating to Provider's website and domain name. In particular, Broker's software surveys the Domain Name System for WHOIS information, the TLS certificate used to serve content from Provider's domain, the Organization Validation or Extended Validation of that certificate, as well as  whether or not information about Provider appears in pages served from its domain.

Broker's software generates a special file, a Contract Beacon, that contains a cryptographic hash of and URL for the form agreement, information needed to prepare an agreement from that form, and a cryptographic code for verification. Provider configures its web servers to serve the content of the file at a randomly generated path from its domain name. Broker's software requests that content, confirms the Contract Beacon is being served, confirms its content matches Broker records.

Would-be licensees of Provider are directed to Broker's service. Given information about a licensee's identity, which Broker's software verifies in the same way, Broker's software generates a Contract Beacons for the licensee that adds information on its identity to atop the data in Provider's Contract Beacon. Broker's service also serves copies of the referenced agreement terms, which licensees can independently verify match their expectations.

Broker's service polls the Contract Beacon locations for both sides of the transaction. If it finds and verifies both Contract Beacons, Broker's service dispatches confirmations of the licensing transaction to both parties, optionally requesting new access credentials for the licensee from a known endpoint on Provider's site.

## In further detail

In addition to setting them terms on which it is willing to license its services, a Provider may wish to set criteria for verifying the identities of would-be licensees.

In the most onerous case, a Provider may require that Broker's service request confirmation of the transaction from Provider personnel. Such personnel could reach out the lead's personnel directly, or otherwise verify corporate identity.

Provider may require that the licensee serve the website on its domain with an Extended Validation certificate bearing its corporate name and issued by one of a number of reputable Certificate Authorities. Because the Certificate Authorities that issue such certificates perform verification procedures, including legal entity identification and verification, this provides a relatively high degree of assurance.

Where even less rigorous assurance is acceptable, a Provider might rely on WHOIS information related to licensees' domain names or even the appearance of corporate details like name and address on web pages served from that domain. These and more rigorous methods of verification could in fact be combined arbitrarily, with each Provider specifying alternative combinations of verification criteria that a licensee may satisfy.

## Evidence of contract

The weakest link in the evidence of contract formation by these means is also one of the weakest in traditional contract practice: authority of the individual taking the action to bind the entity they claim to represent. In the traditional case, this means whether the signatory has authority to sign on the entity's behalf. With certificated assent, the question is whether the person who configured the Provider's site to serve the Contract Beacon had authority to bind the entity.

In the case where certificated contract is followed by automated provision of access credentials, the licensee may act in reliance on the formation of a contract in such a way that produces enforceable rights. The very act of providing access may also establish reliance on the Provider's part.

## The broker might make some money

Brokers may charge on a subscription basis or per-transaction. They may also charge to retain records of contract formation.

I've several clients who would gladly pay such costs today. They are in fact already paying such costs in the form of legal fees.
