---
title: "Local-first Software"
date: 2025-12-23
tags: ["article", "tech"]
---

Notes on [Local-first software](https://www.inkandswitch.com/essay/local-first/), the excellent white-paper by [Ink and Switch](https://www.inkandswitch.com/).

The back half relates entirely to the specifics of Conflict-free Replicated Data Types (CRDTs) as a technology to solve the problem they describe in the first half. I've only focused on the former for now, as I'm interested in framing the wider space first; notes on CRDTs specifically will probably follow.

## The Software space

### Cloud Apps

They identify "cloud apps" as a category among existing software. Could equally be called SaaS or web-based apps. The common factors they highlight as definitive are:

- accessed through a browser or mobile app, i.e. a _client_
- the source of truth for data is stored on a server, which the app therefore depends on to function fully.

The mode of operation for a cloud app is:

- server is the authoritative, source-of-truth store of data
- if the client has a copy of that data, it is an inherently _subordinate_ copy, acting as some sort of cache
- if the data is to be changed by the client, it must be sent to the server, or it didn't happen.

They highlight various benefits of this model, which any alternatives will clearly need to contend with.

- seamless collaboration
- access from any device

### Categories of Products

The article specifies that they are talking about tools for _creating files_ and _storing personal data_. These are set against "actual services", which

> are well served by centralised systems

Those types of tool may be "well-served" by centralisation in the sense that the desired functional attributes of them is not compromised by that architecture, but I certainly think there are criticisms to make of the effect of centralisation in those products.

As examples of _creating files_:

- text
- graphics
- spreadsheets
- CAD
- music

... of personal repositories:

- notes
- calendars
- todos
- passwords

... of "actual services":

- banking
- e-commerce
- social networking
- ride sharing

## Creative Work

They make a point of highlighting that

> When we say “creative work,” we mean not just visual art, or music, or poetry — many other activities, such as explaining a technical topic, implementing an intricate algorithm, designing a user interface, or figuring out how to lead a team towards some goal are also creative efforts.

I think this is very important. Connects to what Mackenzie Wark talks about in [Capital is Dead]('./capital-is-dead.md'), where she tries to set out 'hackers' as a newly emerged class, defined by sustaining their existence through more or less this category of "creative work". I'm not totally convinced that the 'hacker'/'vectoralist' concept she sets out has the legs to be adopted as a conscious class identity. However, I am very convinced that this is a meaningful, rapidly-changing subset of society (whether it's truly a Class in the Marxist sense is beyond me). LLMs and "AI" as a technology seem to threaten the work of that class, and provoke the possibility of radicalisation, just like industrial manufacturing radicalised textile workers in the 1800s ([Blood in the Machine]('./blood-in-the-machine.md')).

### Ownership

The references to this topic here make me all the more keen to read Molly White's [We need to talk about digital ownership](https://www.citationneeded.news/we-need-to-talk-about-digital-ownership/) again.

The authors clarify that they do not use the term "ownership" to mean anything defined by IP law; they are referring to "the creator's perceived relationship to the data".

## Local-first Software

### Ideals

1. No spinners
   Cloud apps inherently require that modifications and most lookups to data entail a round trip to the server, leaving the user with an experience of latency, loading and delay.
2. Your work is not trapped on one device
   Modern, multi-device workflows require that data can be synchronised across a set of devices. Most sync services entail a server copy somewhere, reintroducing the issues of conflicts and a source-of-truth, and often driving you back into the hands of a cloud app.
   Defining the hierarchy of such sets, and the trust between them, would be interesting. A user will typically have a personal mesh of devices that should have near-total synchronisation; but they may then belong to multiple wider networks (work, family) within which they want partial sync.
3. The network is optional
4. Seamless collaboration with your colleagues
   I find it interesting, and a little odd, that they specifically choose the language of "colleagues". I don't see why these needs are necessarily restricted to the workplace, although of couse that's likely to be the most demanding use case.
5. The Long Now
   > When you **do some work** with local-first software, your work should continue to be accessible indefinitely, even after the company that produced the software is gone. \[emphasis mine\]

As I noted under 4., I find the specific verbiage "do some work" here interesting, since it strikes me as a needless limitation of scope. Since they have made clear they're referring to fundamentally _creative_ activity, I would be interested to try to free the discussion from the terminology of work and production entirely.
They point specifically to the shift that with "old-fashioned" software, even if the company making it goes bust (read also, degrades the product, changes the license etc), you can still run the last version; whereas with a cloud app, if they turn off that server, you are out of luck. There is interesting resonance here with the [Stop Killing Games](https://www.stopkillinggames.com/) campaign - another sphere in which companies moving the actual _content_ of their product out of the shipped entity (effectively an executable), and onto a service model where they retain the right to terminate that service long after purchase. 6. Security and privacy by default
An incidental thought from reading this point:

- "security" = protection from those you didn't give your data to;
- "privacy" = protection from those you _did_ give your data to?

7. You retain ultimate ownership and control
   Again, they qualify that this is "ownership" in the sense of user _agency, autonomy and control_, meaning that:

- you can create, copy and modify all data
- the software does not restrict what you can do (NB: they phrase this as "no company restricts...")
  - For example, PDF files can disable printing, e-Book readers can interfere with copy-paste, DRM on digital media can enforce a "digital lock".
