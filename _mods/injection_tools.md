---
layout: default
title: Injection Tools (Fix)
---

{% include mod-infobox.html %}

{% include script_notice.html %}

## What is that?
After patch 1.110, several popular mods stopped working. To help the community stay afloat after numerous calls for help, I have updated the **Injection Tools** (originally created by *BrainBlasted*). 

Since the original author hasn’t fixed it yet, I fixed the bugs introduced by patch 1.110 and completely reworked the script. All mods using the Injection Tools should now function correctly without requiring any changes from you.

> **Note:** I only fixed the injector itself. I’m not responsible for how other mod authors have implemented it in their mods. I do not claim authorship and want to give huge thanks to the original creator for his fantastic work!

## Important Note
There are actually three injectors in this tool: 
* **Sim Filter Injector**
* **Situation Shift Injector** * **Walkby Tuning Injector**

Not all mods that use this tool use all three of these injectors. It's quite possible that some of these injectors are or will be included in another library, such as the *Lot51 Core Library*. 

However, some older mods still use the original injection tools — and this fix ensures that these older mods continue to work. If you're using a mod that required the original injection tools, please ensure that they are still required and that the mod author hasn't replaced them with the Lot51 core library or another script.

## How To Use
You only need to copy this one script file into your mod folder. 

**Placement:** Place it directly into the Mods folder, not inside any subfolders. Do not copy any files from the original post, as they are not required and may cause compatibility issues or unexpected behavior in your game.

## For Modders
The usage and syntax of this updated version of the script remain entirely unchanged. You can continue using it in new mods exactly as described in the original post, without any need to modify your code or adjust how it’s integrated.

