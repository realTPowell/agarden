---
title: "Software-as-a-Product"
date: 2026-01-02
tags: ["tech", "product"]
---

I've been thinking a lot about the Software-as-a-Service (SaaS) model. For 2.5 years working in software product, on a SaaS product, I have barely questioned the received wisdom that this is just how you make software these days. But it very much seems that the SaaS model is the wedge that opened the door to blind acceptance of all our data living on the servers of Big Tech companies. So I think it's worth examining, perhaps only to verify that it is indeed an inevitable model - but hopefully, to realise that there are alternatives.

My jumping-off question here is, when we buy software, why do we accept having a fundamentally different relationship to it than we do when buying a car or a vacuum cleaner? What happened to Software as a Product?

## What is SaaS?

I should probably solidify a working definition of SaaS if I'm going to steelman the case for it properly!

## Why SaaS?

To begin the exercise, let's try to make the argument for SaaS as it exists. What arguments might someone make to convince us that it's the superior and inevitable model?

### Actual continuous service products

Some products genuinely correspond to continuous provision of a real world service. I'm almost tempted to define these out of the category, since they're services enabled by software, rather than software products being delivered as a service.

### Continuous development

A continuous payment for a SaaS product is the exchange for the continuous improvement to the product that you're receiving. This requires a bit more justification though; why is it necessary for the customer to be plugged into that stream of continuous updates? What was wrong with the "old-fashioned" system of buying a license for a product and getting a binary on a CD? I think there are various possible arguments for SaaS that point back to this necessity for continuous code distribution.

#### Incremental value delivery

Big deliveries and releases are riskier for businesses and for users. The more work is done before it's validated by a real customer, the greater the risk of design issues, bugs, and other unforeseen failures, necessitating re-work, and causing customer frustration. This is sort of unavoidable for physical products (although I'm sure they still go to great efforts to break down a single waterfall process into alpha, beta phases etc), but it's blessedly unnecessary for software. If you can create a delivery paradigm where you continuously ship updates onto client devices and get their feedback and validation, why wouldn't you take that opportunity?

#### Security

When vulnerabilities in software are found, it's essential that its users receive the patches to fix it ASAP. The best way to guarantee this is for the users to be requesting the latest version of your code every time. Consider the alternatives to this that arise from different provider-customer relationships:

- In the old-fashioned, software-on-a-CD model, you have no mechanism to propagate new versions to users at all.
- In a "package-managed" system, where the user has access to a way of downloading new versions of your code from a repository, that still only happens when they choose to trigger such an update, which stills creates some time gap where they are using a vulnerable version of that software.
- In order to ensure the update happens as soon as the software instance runs, the provider at least needs to be able to push a notification to their instance of the software informing them of the need to upgrade - but this leaves the possibility that they don't accept the update.
- Therefore, the provider needs the ability to push an update to the software to the customer whenever they use it, and so they may as well just be coming to the provider's server via a client by default.

#### Simpler operations

Let's accept for now that the argument from security creates a necessity for the provider to retain an ability to update the client code. The argument of incremental value delivery doesn't really create a necessity - you could perhaps imagine a model where the client makes a one-time payment for a product, which will function independently from the provider, and the purchase includes a warranty that the provider can somehow distribute security-critical updates to that instance. I suspect the SaaS advocate would argue this is a prohibitively difficult model to offer?

### No one likes maintenance

The "service" in SaaS isn't the continued access to the code itself, it's the maintenance of the storage and compute resources required to run it. The business logic has to run somewhere, the data has to be stored somewhere, and that's not free. The old-fashioned way was to ship them an .exe to run on their own machine, but modern software is too demanding for that. Since users clearly don't want to managing all the overhead of storing their own files, securing them, sharing them with others, or taking on the expense of maintaining a personal machine powerful enough for all the software they use, having the service hosted in the cloud is valuable to them. That entails a continuous operating expense to the provider, which couldn't be covered by a one-time license fee for the software as IP; hence the subscription-based SaaS model.

## What is a Product?

## An alternative vision

I suspect fleshing this out will eventually branch into a separate document. For now I want to record some sketches of the possibilities I've been thinking about.

### The craft of development

In a paradigm where users own their data, and apps and services are obliged to be highly interoperable by design, the need for everyone to be walled into exactly the same softwares should disappear. The standardisation is provided by underlying protocols and interfaces, so your client and how you work with that data can be totally personal. I think this could have some really interesting consequences for the trade of software engineering.

Apps are fundamentally local-first, so the way your first user interacts with your tool is by spinning it up on their own system. In fact, apps scan and should be built for one user! Of course, it will be common for many users to all be choosing to install (perhaps after purchasing) and use the same tools. But, if you want one of those common tools customising a bit to your own needs, you can ask/pay an engineer to do that for you. That can create a whole business or community opportunity for ad hoc development freelancing, because those devs only need to make and test tweaks to _your_ version and check if _you're_ happy. In this way software engineering can become more like a personal or artisan craft.

This could also happen at the scale of businesses and other joint enterprises. Maybe they've bought an existing off-the-shelf tool for some enterprise need, and realise that they need to adapt it; or maybe they haven't been able to find something they like enough at all, and wish to commission something specific to their needs. Since this will be a local-first service, perhaps using an infrastructure of trustless relay servers for necessary protocols, it shouldn't be a complex tool to commission.

Ownership of the resulting code in that case is an interesting question. I think this tool shouldn't become proprietary to the consumer; their reward is first use of it, guaranteeing that it is a solution to their specific problems. However, should it become IP that's proprietary for whatever development agency built it for them?

I suppose one has to consider how so called "vibe-coding", "AI" etc might affect the speed and accessibility of development, thereby enabling or limiting this future, but I can't bear to engage with that currently!
