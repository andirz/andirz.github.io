---
mod_id: trait-tracker-injector
title: Trait Tracker Injector
icon: "fas fa-syringe"
files: ["ts4script"]
categories: [Scripts, Injectors]
---

## What is this?
The **Trait Tracker Injector** (originally created by **MAL22**) is a specialized tool that enables the inheritance of custom traits across Sim generations. It allows traits to be passed from parents to offspring, making it possible to create unique family lines with inherited abilities, such as dormant occult traits or special skills.

> **Note:** If you are not using any mods that specifically depend on this injector, you do not need to install it!

## Why this version?
After **Patch 1.110**, many mods—including the original Trait Tracker Injector—stopped working. Since the original version was no longer maintained, I stepped in to provide a fix for the community. I have completely reworked the script to resolve bugs introduced by the patch. All mods relying on this injector should now function correctly again without any extra steps from you.

## Important: Compatibility Note
A similar injector is now included in the **Lot51 Core Library**, which many modern mods have switched to. 
* **Check your mods:** If a mod you use recently updated to require the *Lot51 Core Library*, you may no longer need this standalone injector.
* **Legacy support:** This fix is primarily for older or specific mods that still strictly rely on the original MAL22 syntax.

## How To Use
This is a single script file. To ensure it works correctly:
1. **Direct Placement:** Copy the `*.ts4script` file directly into your `Mods` folder. Do **not** place it inside any subfolders.
2. **Remove Old Files:** Do not use any files from the original MAL22 post, as they are outdated and will cause conflicts. Only this updated script is needed.
3. **Settings:** Ensure that "Script Mods Allowed" is enabled in your game options.

## For Modders
The usage and syntax of this updated version remain **entirely unchanged**. You can continue to use it in your new projects exactly as described in the original documentation by MAL22, without having to modify your code or integration methods.

---

### Credits
* **Original Author:** MAL22
* **Update & Maintenance:** Andirz
