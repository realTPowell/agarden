---
title: Beginnings
og: img/colors-2.jpg
date: 2025-05-04
tags: [ "this blog" ]
---

A blog needs a first post, and that post may as well be navel-gazing about the purpose of the blog itself.

## What is this blog for

## How is this blog made
Learning how to do all of this by hand is a big part of the fun and challenge of this blog. I intend to post notes about how I'm developing it, alongside publishing new posts. With that in mind, I thought it worth writing up the base state of how it's built and deployed, for comparison as it evolves.

### Development
This blog is built "from scratch" with NueJS. By "from scratch", I mean I've written all the CSS and markup myself, rather than using pre-themed tools for statically generating blog sites using Markdown. Of course, I'm still using the lightweight Markdown compilation, templating and SSR tools provided by the Nue framework. 

I'll probably write something soon about why I've taken that objectively harder approach, and my general mindset at the moment on getting closer to how the things in my life are created, owned and operated.

### Deployment
Notes on how this is deployed to a DigitalOcean Droplet VPS, once I've figured that out! My current sketch of how it will be done is:
1. Dockerise this app
2. Make a Compose file that plumbs it together correctly with [ Caddy ](https://caddyserver.com) (as reverse proxy and TLS certificate provider) and UFW (as firewall).
3. Get DOCR going?
4. Rig a GitHub action to build a new image and push it onto that registry (and then onto the Droplet), hopefully following an existing DO recipe.

This seems maybe overcomplicated for a first deploy; I can probably just SSH, rsync the files and build on server?
