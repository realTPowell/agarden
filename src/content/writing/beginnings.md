---
title: Beginnings
date: 2025-11-01
tags: ["agarden"]
---

A blog needs a first post, and that post may as well be navel-gazing about the purpose of the blog itself.

## What is this site for

I think of this as a "digital garden". That is, it's not a blog in the sense that most of what's posted will be unfinished - polished, self-contained pieces of writing will probably be the exception not the rule. I will add rough notes, TODOs and half-baked thoughts. Although it's a bit too self-serious, I have adopted the digital garden [Terms of Service](/tos) suggested by [swyxio](https://github.com/swyxio/digital-garden-tos), because I think they set a really good basis for my intentions towards this site, and for the engagement I would request from those who view it.

As to what I will be "learning in public" _about_ on this site, I have some ideas (to be explored in a later note), but there isn't a fixed theme. This is an unabashedly self-centred exercise, so feel free to take what interests you and ignore what doesn't.

### Some goals

As a rough expression of my current intentions, here are some of my goals in starting this page.

1. **Deepen my thinking**: Currently I just flit between subjects that interests me, and find that anything I learn doesn't really stick. I think this is because I have no cause to think more deeply on what I learn and synthesise it into something. Hopefully writing here provides that exercise.
2. **Learn technical skills**: I have a graveyard of unfinished coding projects, where I never actually followed through far enough to learn skills that stuck. By forcing myself to build this site for myself, I hope I'll actually gain some lasting experience.
3. **Experiment with digital ownership**: A major theme I'm exploring currently is what an alternative to Big Tech's feudal ownership of cyberspace could look like. Creating and hosting my own "home" on the Internet is one experiment with the practicalities of an alternative.

## How is this site made

Learning how to do all of this myself is a big part of the fun and challenge of this project. I'll post notes occasionally about how I'm developing it, alongside new writing and notes. With that in mind, I thought it worth writing up the base state of how it's built and deployed, for comparison as it evolves.

### Development

I think it's considered fairly gauche to go on about the stack of your static website as if it's remotely relevant - I'm using Astro, obviously. Currently this is entirely statically rendered. I will try to keep to the challenge of keeping it that way, since (I believe) static sites draw less power, and it's an interesting creative constraint.

To get a first working version, I've only done the bare minimum of styling and structure. I have my colours, typography, and a single column page layout; I have a header and footer with nav links; and two simple components, a `pagehead` for the titles and metadata of posts, and a `gallery` for the list of posts. Improvements I hope to make include:

- Better styling for links and other inline text types;
- Styling for images and codeblocks;
- Filtering by tags on the list of posts;
- Richer metadata on posts, including some digital garden staples like the maturity and completeness of a post;
- Some utilities for my own workflow in creating this, like templates for new posts.

### Deployment

I host this site on a VPS, with aspirations to one day truly self-host it on my own machine. I started out doing this fully "from scratch" with SSH, Docker Compose, Traefik etc, and getting that working taught me a lot about the actual bones of the web. However, I'm now using Dokploy, which is just miraculously frictionless, without adding excessive reliance on big cloud providers. Hopefully I can self-host Dokploy as a build server some day too.
