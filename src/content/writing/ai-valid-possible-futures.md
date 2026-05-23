---
title: Is there any sustainable future for LMs?
date: 2026-05-16
tags: ["AI", "tech", "permacomputing"]
status: "new"
---

Agarden, I have sinned. I've started using Claude Code a lot at work. My mind is flooded with questions about how to feel about this, and whether I'm doing the right thing. So, since this place is made for setting out my thoughts and seeing how they grow, here they are.

## First thoughts

Let me start with what hasn't changed. I am still disgusted and enraged by the centralised, controlling, hyper-capitalist industry which has rolled out LMs, and the greedy, credulous industrial complex of management bods and media hacks who've greeted its birth.

But. I get the hype now. I'm not a dev, and I haven't changed my mind about the gulf between what you get out of LLMs and production code (even if you subject it to planning/review by just one more orchestrated sub-agent). But for product management work, which is rife with use-cases for local, throwaway tools to get a job done, and where I'm constantly roughing out ideas and concepts to demo, it does feel like magic. That's not a rational evaluation yet, just a first intuitive conclusion - I fully suspect I'm falling for some of the classic traps ([[ai-cognitive-biases]]).

My other initial reaction is to realise how much of Anthropic's marketing and thought-leadership in the AI space is encouraging you to flood as many tokens as possible through their servers. The recent media cycle about an Anthropic engineer "telling you to replace Markdown with HTML" was particularly egregious.

So, my crisis of conscience is that I no longer think the argument that this is a technology which hasn't proved its utility is good enough. Like the textile-production innovations of the late 18th century, this technology definitely does something useful; or at least, I don't think it's intellectually honest at this point to insist it definitely doesn't. And that means we have to start separating AI-the-industry from AI-the-technology, and theorise about them separately, which is a very difficult problem.

## Disambiguating

We have two uses of "AI" in common discourse, and the conflation is very beneficial to the narrative of inevitability that Silicon Valley wants. In the absence of catchier names, let me qualify these as AI-the-industry and AI-the-technology.

AI-the-industry is a horrible, exploitative, unsustainable, economically suicidal pyramid scheme.

However, despite its efforts to mask this, AI-the-industry is not the inevitable, predestined manifestation of AI-the-technology. So the much harder question that now plagues me is, is there any way you could instantiate LMs in society which is a whole-life, net benefit?

## Structuring the question

As with any question worth asking, we need a few paragraphs to unpack what all its parts mean. First of all, I am deliberately saying "LMs" for Large Models, not just LLMs, to encompass other multi-modal models. Other components in need of some precision:

- is the question utopian or transformative? are we looking for alternate universe possibilities, or futures we could reach from where we are now?
- what does "instantiating LMs" encompass?
- what do we identify as the "whole life" of LMs as a technology?
- what are the costs and benefits that need to be evaluated to assess "net" benefit?

### Theory of transformation

My approach to utopia vs. reform is basically always that you need both. You need to think deeply about what the ideal world you're striving for would look like, so you can work in that direction, without letting that perfection be the enemy of the smaller good your work can achieve. The union of all our utopias defines an outer boundary of what's imaginable; the intersection of them defines a space of common goals that we can work to realise.

### Systems thinking

It's easy to gesture at the set of possible ways LMs could fit into society, but it's a very difficult set to describe in practice, because the way a technology manifests is such a knotty, networked thing. The physical scope of a decent answer to this would need to span:

- How are the raw materials sourced?
- How is the energy produced? how much is needed?
- How is the physical infrastructure owned? how is it distributed?
- How is the data of the models produced? How is it owned? How about the data needed to conduct the training that creates them?
- How is the knowledge to use and operate the technology distributed (in the passive and active senses of the word)?
- How are the costs of using the technology distributed?
- How are the rewards of the technology shared? in particular, how are those whose skills might be displaced supported and compensated?

### Whole-life

It might be useful to directly refer to the lifecycle stages used in whole-life evaluation of construction projects?

The above goes quite a long way to answering this question too. The full life-cycle of the technology that must be considered spans:

- The raw materials and energy attributed to the marginal additional demand the technology creates
- The physical impact of the new infrastructure which the technology depends on (including their maintenance and end-of-life)
- The training of models: the input data; the visibility and accountability of the people doing it; the frequency and intensity of this activity (how many new models do we really need?)
- The hosting and running of trained models
- The building, hosting and running of other systems building on LM technologies
- The usage of those technologies
- The human impacts of how those technologies are used

### Net Benefit

This list of impacts across the lifecycle of AI captures the costs to evaluate. Ed Zitron is doing noble work in banging the drum that there is no way that the pure economics of current AI investment can ever net out profitably with future demand for LMs. Once you add material, environmental and human impacts to that ledger, the conclusion that the hyper-scaler model for LM rollout is a societal net negative is pretty unavoidable.

I think it's worth unpicking what that model is, to see if it leaves any space for a socially useful integration of LMs. Adam Tooze set out a useful taxonomy for thinking about this in a recent episode of [Ones and Tooze](); if this industry is a bubble, what kind of bubble is it? The options he suggests are:

1. A "Metaverse" bubble: there is just no underlying utility to this technology. You spend a lot of money, and eventually it turns out that no one wants it or can make a real use of it.
2. A "moat-less" bubble: there is real utility, and this will become a core infrastructural technology, _but_ there's just no way to "build a motor around it" that makes money in the private sector. It turns out that the unit economics don't let you operate profitably as a mass owner of compute power, leasing access to that infrastructure as a societal commodity. This would fit with the idea of [LMs as a cultural technology](/src/content/writing/ai-cultural-technologies.md) like markets or voting, where everyone uses it, but you can't really enclose it as a business model.
3. A "Railways" bubble: there is real utility, and this will become a core infrastructural technology, _and_ there will be revenues to make from it, _but_ the revenues to be realised will be so delayed from the initial build-up of infrastructure that the maturity mismatch will still cause financial meltdowns.

I think many tech-critical people are firm believers in theory 1. My argument is that at the very least this is not trivially true - I think there are candidate utilities for the technology, and if it does turn out to be a type 1 bubble it will be because of subtle, long-run system imbalances, not because it's just fundamentally a shit idea (like [the Metaverse](https://www.youtube.com/watch?v=EiZhdpLXZ8Q)).
