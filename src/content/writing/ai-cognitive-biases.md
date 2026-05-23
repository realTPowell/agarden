---
title: LLM Headfucks
date: 2026-05-16
tags: ["AI", "tech"]
status: "new"
---

I've started using Claude Code a lot at work. This comes with a host of ethical concerns of course, but I'll write about those elsewhere ([[ai-valid-possible-futures]]). The other branch of the interesting things it's made me think about is understanding how quickly using these can fuck with your head.

## Power goes to your head

More than anything, the main thing I've learned from using AI is how real the initial power high when things start happening is. If coding has always been a slow, amateur affair for you, watching a folder fill with a working app in a few minutes is magical; I can't imagine how it would feel if you've never coded before.

I increasingly think a lot of the other cognitive biases about using AI stem from this. Fundamentally, it's addictive behaviour: the first hit feels _great_. When you're riding that initial high, all the arguments trying to convince you that there are long-term risks or ethical concerns are trying to get between you and the drug. It's very hard for rational argument to win out over something which just feels good.

As with everything below, I'm writing this because I think might very well be falling for that bias, even as I can identify it. Right now, I do still believe there will be some net positive use cases for LMs once all the noise settles. But maybe I just really want to believe that, because I want to keep playing with my new toy!

## Feeling the positives, excusing the downsides

Need to find that study which compared people's estimates of the productivity impacts compared to the actual impacts. The upshot being, everyone thinks they're going faster, and they're normally going slower. Having used it a bit, I can already see myself falling for this (see also the XKCD comic about "writing a tool to automate this").

AI seems to shift the 80/20 rule - the first 80 now takes about 5-10% of the time, and that feels _amazing_. My amateur explanation of the mis-estimation of the productivity impact is based in this. We estimate our productivity based on proximity to our goal, not the actual time spent to get their, which we're worse at evaluating moment by moment. So if AI is doubling the speed you can achieve that 80%, that counts for a lot in our brains. Whereas, AI is probably slowing us down in the 20%: we get there with much less learning and knowledge of the problem at hand; you've added the work of cleaning up all the imperfections of AI 80%, which is a bit less considered than your manual, slower 80% would have been; we're actively losing the skills of doing the manual work, because a brain intoxicated with the perceived speed of AI work rails against having to go slowly again.

But because we've had such a rush of good feeling from that first 80% (the power high I describe above), we're willing to excuse a lot in the back stretch. "Sure, this is taking a bit longer, but that's more than worth it with how much faster I got started". We're evaluating against perceived distance from goal, and spending more time closer to the goal feels faster overall than progressing at a more even rate, even though in the end we spend the same time or more on the task.

## Gell-Mann amnesia

The Primeagen has been making this point a lot about people coding with LLMs, and he's bang on. "LLMs are great at back-end, but not so good at frontend", the senior frontend engineer will say. Of course, what they're really saying is, "I know what good frontend code looks like, and this isn't it; but I don't know what good backend looks like, so I assume this is fine!". This is [Gell-Mann Amnesia](https://en.wiktionary.org/wiki/Gell-Mann_Amnesia_effect), which Wiktionary defines nicely:

> The phenomenon of a person trusting newspapers for topics which that person is not knowledgeable about, despite recognising the newspaper as being extremely inaccurate on certain topics which they are knowledgeable about.

## The thoughts you don't think

When I first started working in software management, I was taught that one of the cardinal sins is _solutionising_. This refers to introducing the problem you want to solve to creative colleague (and I include developers in that category) by describing the solution you have in mind. The problem is that you have stolen their ability to think about the problem from a blank slate, and therefore robbed both of you of the ideas they could have had if they weren't already stuck on the one you described.

This effect is chronic and pernicious with LLM usage. When you try to argue that people are producing worse ideas and decisions by outsourcing the thinking to AI, a common response is that they're just having the ideas or decisions they would have, but faster. The problem is that every time you just ask AI to generate your list of suggestions, propose a few approaches, or even critique your current draft, you have given up the opportunity to know what thoughts you could have had - you've invited the LLM to solutionise for you. Once you've read what the AI suggests, when you lean back to think you do not have a blank slate; your thinking biases towards testing the idea AI gave you, and you normally end up deciding that it seems ok. Critically, _that is not the same as having that idea yourself_. You are willingly biasing yourself to the mean-field solutions that come out of LLMs, and atrophying the cognitive muscles that do the real hard work of creativity, of filling a blank page.
