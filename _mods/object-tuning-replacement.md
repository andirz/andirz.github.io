---
mod_id: object_tuning_replacement
title: Object Tuning Replacement
icon: fas fa-chair
files: ["ts4script"]
categories: [Scripts, Tweaks, Replacement]
tagline: "Fixes hundreds of EA objects on the fly, making chairs, lamps, and gear portable and live-drag compatible without overrides."
---

## About This Mod
Many EA objects—especially "outdoor" items like folding chairs, camping lamps, and meditation pillows—look like they should be portable but aren't. This mod dynamically fixes that without overriding a single game file.

> **Note:** This mod officially replaces the discontinued *Outdoor Tweaks*. You can safely delete the old version.

## What does this mod do?
It uses a Python-based script injection to fix object behavior on the fly. It is **pack-aware**, meaning it automatically detects which DLCs you own and only applies fixes for the objects present in your game.

### Key Features:
* **Live Drag Support:** Adds the ability to drag objects directly in Live Mode for inventory-compatible items.
* **Portable Enhancements:** Makes chairs and lamps from various packs (and Base Game) portable.
* **Smart Injection:** Zero overrides! It respects EA's recent tuning fixes and only replaces what is still broken.
* **Error Logging:** Automatically creates a log file in your game directory if something goes wrong.

## Upgraded Objects
* **Little Campers Kit (SP33):** Full Live Drag support for all compatible items.
* **Folding Chairs:** Portable versions for chairs from *City Living*, *Get Famous*, *Toddler Stuff*, and more.
* **Portable Lamps:** Small table lamps from *Base Game*, *Get to Work*, and *High School Years* now function as portable lamps (Requires **Discover University**).

## Compatibility & Requirements
* **Requires:** Script Mods must be enabled in your game settings.
* **Dependencies:** Some lamp features require *EP08 (Discover University)*.
* **Conflicts:** Possible with other scripts that modify the same object tunings via injection, though none are currently known.
