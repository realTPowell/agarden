---
title: Current Goals
date: 2026-11-09
tags: ["agarden"]
status: "new"
---

As is clear from the timeline, I haven't written here in a long time. So today I want to do two things about that:
- Bang out a load of stub posts for the ideas I've had for months and meant to write about.
- Reflect on why I'm not writing, and how to reduce that friction.

This post is for the latter, and I am returning to it after blitzing out the former point. That means I am short the energy to go into this deeply right now, and will just quickly jot some points.

With more Permacomputing zeal in my veins, I now feel this site is pretty overbuilt - it's a static site served with nginx, there is no need for the Docker-based CI/CD that I've got going on.
  - move to simpler static site builder, possibly somewhat hand rolled
  - move to deploying with a bash script and rsync onto the VPS

However, clearly I can't make it feel harder to write here, since I'm already pretty reticent. I think I'd like a setup to be able to jot and work on notes away from the laptop with this repo, perhaps by using syncthing to allow editing the content folder from my phone, so I just hop on to run a script to publish. If that fails though, I may need to consider a bit of a CMS, so that I can publish to live from my phone as well. That won't be totally compatible with the above tech decisions, so these design factors need balancing.
    - possibly follow what we're doing with Permacomputing; make the static site build and publish a codeberg action, and just use the codeberg interface for editing markdown to add new stuff?

## site stack
First writing above, I jotted two goals.
  1. move to simpler static site builder, possibly somewhat hand rolled
  1. move to deploying with a bash script and rsync onto the VPS

### simpler static site builder
Had a lovely time experimenting with a port to [makko](https://makko.starlightnet.work/):
- very minimal, but built around the right feed + posts structure for me;
- written in Zig (positive if I needed to fork and tweak for my needs)
- lovely documentation and general apparent ethos.

It made me appreciate templating tools like Mustache (which Makko uses) a bit more.

However, I think I'm deciding against it. I do want some more modern/fancy affordances on the page (notably sub-feeds filtered by tag, some routes outside the blog post list, and a colour scheme switcher down the line). Astro is just really nice for writing those things with a little bit of JS that still rolls up with SSG. So, I think I will keep the build stack, and stick to a commitment that the site must always load effectively without any of the JS (i.e. at the extreme, in a terminal/text based browser).

### simpler continuous deployment

Current thinking is that I'll do this with a simple git hook. Two candidates:
1. **post-commit hook**

    `git log -1 HEAD --format=format:"%D"` to just output the branches of your latest commit, so action only runs on main. Run build locally, SSH to deploy server, `rsync --delete` the dist folder over the one mounted over there. Would need to move to administering the nginx config on the deployed server separately?
2. **post-receive hook**

    run a bare git repository as remote on the deploy server, and push there when done. On receive to main, the _deploy_ server builds, and mounts the new content appropriately on the VPS.

