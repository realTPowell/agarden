---
title: AI, Cultural Technologies & Abstraction
date: 2026-11-9
tags: ["agarden"]
status: "new"
---

As is clear from the timeline, I haven't written here in a long time. So today I want to do two things about that:
- Bang out a load of stub posts for the ideas I've had for months and meant to write about.
- Reflect on why I'm not writing, and how to reduce that friction.

This post is for the latter, and I am returning to it after blitzing out the former point. That means I am short the energy to go into this deeply right now, and will just quickly jot some points.

- With more Permacomputing zeal in my veins, I now feel this site is pretty overbuilt - it's a static site served with nginx, there is no need for the Docker-based CI/CD that I've got going on.
    - move to simpler static site builder, possibly somewhat hand rolled
    - move to deploying with a bash script and rsync onto the VPS
- However, clearly I can't make it feel harder to write here, since I'm already pretty reticent. I think I'd like a setup to be able to jot and work on notes away from the laptop with this repo, perhaps by using syncthing to allow editing the content folder from my phone, so I just hop on to run a script to publish. If that fails though, I may need to consider a bit of a CMS, so that I can publish to live from my phone as well. That won't be totally compatible with the above tech decisions, so these design factors need balancing.
    - possibly follow what we're doing with Permacomputing; make the static site build and publish a codeberg action, and just use the codeberg interface for editing markdown to add new stuff?
