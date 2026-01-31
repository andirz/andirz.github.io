---
layout: mod_info
mod_id: smart-core-script
title: Smart Core Script
icon: fas fa-microchip
files: [ts4script]
categories: [Core, Script]
---

## The Engine Behind the Magic
The **Smart Core Script** is a specialized technical library designed for **The Sims 4**. It is **NOT a standalone mod** that adds visible gameplay on its own. Instead, it serves as the essential “engine” or framework that powers many of my other projects. By centralizing complex functions into this core library, I can ensure that my mods are more stable, easier to update, and highly compatible with one another.

### Why is this required?
If you are here, it is likely because you want to use one of my gameplay mods. These mods “borrow” code from this library to perform advanced tasks that the standard game engine doesn’t support out of the box. 

**Important:** You only need to install this library if a mod’s requirements specifically state that it is required! If you don’t use any of my core-dependent mods, you don’t need this file in your folder.

---

## Key Features

* <i class="fas fa-vial" style="color: #2563eb; margin-right: 8px;"></i> **Engine Extensions:** Adds vital script injections and logic that are missing from the original game engine, enabling complex mod features.
* <i class="fas fa-bell" style="color: #2563eb; margin-right: 8px;"></i> **Version Validation:** Automatically checks if the script is outdated and notifies you to ensure your game stays stable after patches.
* <i class="fas fa-gauge-high" style="color: #2563eb; margin-right: 8px;"></i> **Optimized Performance:** Built for efficiency with minimal impact on game loading times and frame rates.
* <i class="fas fa-file-settings" style="color: #2563eb; margin-right: 8px;"></i> **Config System:** Allows you to save your own settings in dedicated config files. Your preferences remain safe even after mod updates.
* <i class="fas fa-clipboard-list" style="color: #2563eb; margin-right: 8px;"></i> **Centralized Logging:** Provides a unified error reporting system, making it easier to diagnose and fix conflicts.

---

{% include script_notice.html %}

## Compatibility
This is a standalone script library. It does not override any game files (tuning or internal code), so there are **no known compatibility issues** with other mods or game updates. The included package file contains only the translations for menus and system messages.

## Translations
The following translations are available:
* **English, German, Spanish and Russian** (by myself)
* **Brazilian Portuguese** (by Nymphieta)
* **Chinese and Simplified Chinese** (by Orchard Team)
* **Italian** (thanks to vale93_games)

---

## Developer Note
**Coming Soon:** I am working on a public documentation for the Smart Core functions. If you are a modder and want to use this core for your own projects, please stay tuned or contact me via Discord in the meantime.
