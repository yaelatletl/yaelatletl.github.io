---
layout: ../../layouts/project.astro
title: GodotLighting 3D
client: Self
publishDate: 2021-12-12 00:00:00
img: /assets/contribs/lightning/bolt.png
description:
  Contributed code to use generators for the addon, allowing easier control over the effect. 
tags:
  - godot
  - shader
  - visual effects
  - addon
---
## About the project

In this contribution, I expanded the code by Auren, creating a branched lightning and a lightning bolt generators, for ease of use, so the lightnings don't need to be manually set. 

## How does it work?
The branched lightning draws a line with random offsets towards the destination point, meanwhile it creates smaller sublightnings that can be configured to end in a random place or go towards the destination. 

The bolt detects collisions in a certain range with random raycasts and creates lightnings between the origin of the bolt and the collision point.


## How does it look?

Two frames of the behaviour of the branching images. 

![6D light shader](../../assets/contribs/lightning/branching.png)
![6D light shader](../../assets/contribs/lightning/branching2.png)

A lightning bolt, detects collisions and creates branching lightnings in the collision points. 

![6D light shader](../../assets/contribs/lightning/bolt.png)
