---
layout: ../../layouts/blog_post.astro
title: AI EDITOR DEV-LOG
author:
 - Bueno Rojas Y.A.
publishDate: 2020-12-9 00:00:00
img: /assets/blog_posts/npcs/dev1.png
description: |
  
  This is a not so formal writing about my chain of thoughts, documenting the change of approach in the Character Studio.

  It will remain a node based editor, but instead of a multivalue system, I've decided to make a struct to pass more information through signals, so the final "compiled version" doesn't actually exist but a json file that can be loaded as a resource, containing functions, signals and connections. All of them actually made through code...
tags:
  - game development
  - godot
  - moonwards
---

This is a not so formal writing about my chain of thoughts, documenting the change of approach in the Character Studio.

It will remain a node based editor, but instead of a multivalue system, I've decided to make a struct to pass more information through signals, so the final "compiled version" doesn't actually exist but a json file that can be loaded as a resource, containing functions, signals and connections. All of them actually made through code.

So first let's identify the part of this system. In the editor we have:

Stimulus
Inhibitors
Actions
The simplest parallel I can draw from that is:

Signals
Connections
Functions
And not quite exactly like that, but very similar, the idea is to add converter nodes, so a property can be used as a trigger in an action, without it having to take multiple inputs.

Now, we got our base.

Next step is to verify what we have and what we need to have.

![Raleigh shader](../../assets/blog_posts/npcs/dev1.png)


I have divided the currently existing nodes in three groups, stimulus (signals) on the left, inhibitors (connectors) in the middle, and actions (functions) on the right. 

With this approach the signals will deliver a single output and we will be able to pick the data we actually want to deliver in the next signal.

I labeled each input port relying on the context of the node.
