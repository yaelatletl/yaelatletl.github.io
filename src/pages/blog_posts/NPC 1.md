---
layout: ../../layouts/blog_post.astro
title: AI EDITOR DEV-LOG 2
author:
 - Bueno Rojas Y.A.
publishDate: 2020-12-10 00:00:00
img: /assets/blog_posts/npcs/dev2.png
description: |
  Following what was concieved before, I made a more uniform approach to these nodes:
  Green dots indicate a Misc Object that must be filtered to be interacted with a Filter Node (must be added).
  Red dots are Characters.
  The black dot is a pure signal, that means that the signal has no arguments tied to it, this was the function of a trigger in the previous approach. 
  The next step is to concieve the actual structure to pass through the nodes...
tags:
  - game development
  - godot
  - moonwards
---

Following what was concieved before, I made a more uniform approach to these nodes:

![Sitimulus](../../assets/blog_posts/npcs/dev2.png)

Green dots indicate a Misc Object that must be filtered to be interacted with a Filter Node (must be added).
Red dots are Characters.
The black dot is a pure signal, that means that the signal has no arguments tied to it, this was the function of a trigger in the previous approach. 

The next step is to concieve the actual structure to pass through the nodes. 

But we have a problem, following a static approach would roule out the application of this tool in other development workflows. So I concieved first a way to describe a character through a dictionary:

{
"name" : "Default",
"used_types" : [
TYPE_VECTOR3,
TYPE_OBJECT ],
"variables" : {
 "type" : TYPE_INT,
 "shield" : TYPE_REAL,
 "health" : TYPE_REAL,
 "translation" : TYPE_VECTOR3,
 "target" : TYPE_OBJECT,
 "current_point" : TYPE_VECTOR3 }
}

This is the definition for the "default" character scheme.

translation, target and current_point are variables that are going to be used from the character container, their current values are the types they are, though these could be dynamic, typing them will allow us to create new nodes to separate the information for further usage.

Another example, for Moonwards, the project I'm working at, the definition could be:

{
"name" : "Moonwards",
"used_types" : [TYPE_VECTOR3],
"variables" : {
"translation" : TYPE_VECTOR3,
"target_location" : TYPE_VECTOR3}
}
These schemes or templates have kind of the same information we should pass through our signals, but slightly different.

Default:
{
"object_type" : "Character",
"variables" : { "type" : TYPE_INT,
 "shield" : TYPE_REAL,
 "health" : TYPE_REAL,
 "translation" : TYPE_VECTOR3,
 "target" : TYPE_OBJECT,
 "current_point" : TYPE_VECTOR3 }
}
Moonwards:
{
"object_type" : "Char Entity",
"variables" : {
"translation" : TYPE_VECTOR3,
"target_location" : TYPE_VECTOR3}
}


This will help us have different kinds of information being passed, generally simplified data.

In the Default scheme, an attack data and Object seen data are present, the green dots. Those must be filtered as the attack data is certainly a bullet, but the Object seen can be either a player, another NPC, a bullet or anything a NPC has to be aware of. 

At this point, there's still some static data on the project, the final goal is to make this as dynamic as possible, so you can use this tool for any NPC you create.
