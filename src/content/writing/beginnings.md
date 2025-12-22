---
title: Beginnings
date: 2025-11-01
tags: ["agarden"]
---

A blog needs a first post, and that post may as well be navel-gazing about the purpose of the blog itself.

## What is this site for

I think of this as a "digital garden". That is, it's not a blog in the sense that most of what's posted will be unfinished - polished, self-contained pieces of writing will probably be the exception not the rule. I will add rough notes, TODOs and half-baked thoughts. Although it's a bit too self-serious, I have adopted the digital garden [Terms of Service](/tos) suggested by [swyxio](https://github.com/swyxio/digital-garden-tos), because I think they set a really good basis for my intentions towards this site, and the engagement I would request from those who view it.

As to what I will be "learning in public" _about_ on this site, I have some ideas (to be explored in a later note), but there isn't a fixed theme. This is an unabashedly self-centred exercise, so feel free to take what interests you and ignore what doesn't.

### Some goals

As a rough expression of my current intentions, here are some of my goals in starting this page.

1. **Deepen my thinking**: Currently I just flit between subjects that interests me, and find that anything I learn doesn't really stick. I think this is because I have no cause to think more deeply on what I learn and synthesise it into something. Hopefully writing here provides that exercise.
2. **Learn technical skills**: I have a graveyard of unfinished coding projects, where I never actually followed through far enough to learn skills that stuck. By forcing myself to build this site for myself, I hope I'll actually gain some lasting experience.
3. **Experiment with digital ownership**: A major theme I'm exploring currently is what an alternative to Big Tech's feudal ownership of cyberspace could look like. Creating and hosting my own "home" on the Internet is one experiment with the practicalities of an alternative.

## How is this site made

Learning how to do all of this myself is a big part of the fun and challenge of this project. I intend to post notes about how I'm developing it, alongside publishing new posts. With that in mind, I thought it worth writing up the base state of how it's built and deployed, for comparison as it evolves.

### Development

This blog is built "from scratch" with [NueJS](nuejs.org). By "from scratch", I mean I've written all the CSS and markup myself, rather than using pre-themed tools for statically generating blog sites using Markdown. I'm using the Markdown compilation, templating and SSR tools provided by Nue. I suppose nothing in code is ever truly "from scratch" unless you're writing bytecode.

To get a first working version, I've only done the bare minimum of styling and structure. I have my colours, typography, and a single column page layout; I have a header and footer with nav links; and two simple components, a `pagehead` for the titles and metadata of posts, and a `gallery` for the list of posts. Improvements I hope to make include:

- Better styling for links and other inline text types;
- Styling for images and codeblocks;
- Filtering by tags on the list of posts;
- Richer metadata on posts, including some digital garden staples like the maturity and completeness of a post;
- Some utilities for my own workflow in creating this, like templates for new posts.

I'll probably write something soon about why I haven't just used a static site generator like Hugo. It's part of a general mindset of wanting to be closer to how the things in my life are created, owned and operated.

### Deployment

I host this site on a Digital Ocean VPS, with aspirations to one day truly self-host it on my own machine.
Getting this working has taught me a lot about the actual bones of the web.
