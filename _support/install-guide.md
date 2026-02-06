---
layout: page
title: "How to Install Mods in Sims 4?"
order: 1
---

This guide will walk you through the process of installing mods for The Sims 4. Please read the instructions carefully to ensure a smooth modding experience.

## 1. Enable Mods in The Sims 4 Settings

To use mods in The Sims 4, you first need to enable mod support within the game. To enable mods in The Sims 4, launch the game and go to the "Options" menu. Under "Game Options" and then "Other", check the boxes for *"Enable Custom Content and Mods"* and, if needed, *"Script Mods Allowed".* Apply the changes and restart the game. Your mods should now be active and available in the game.

![](/assents/img/tutorials/supportimg01.png)

## 2. Find and Download Your Desired Mods

Always download mods from **reputable and trusted sources**. This is crucial for the security and stability of your game.

* **Recommended Sources:** Look for mods on platforms like **CurseForge**, Mod The Sims, or directly from the mod creator's official website/blog. These sources usually host the latest versions and provide clear installation instructions.
* **Avoid:** "Mod compilation" or "re-distribution" sites. These often host outdated, broken, or even malicious files without the original author's permission. Using such sites significantly increases the risk of game corruption or security issues.

### After Downloading:

* Most mods come in a compressed format (like `.zip` or `.rar`). You will need a program like **WinRAR** or **7-Zip** to extract these files.
* **Extract the contents** of the downloaded archive. Inside, you will typically find `.package` files, `.ts4script` files, or sometimes both.

## 3. Placing Mods in the Correct Folder

Once you have extracted your mod files, you need to place them into The Sims 4's designated Mods folder.

The default path for this folder is:

`Documents > Electronic Arts > The Sims 4 > Mods`

### Important Folder Structure Rules:

* **`.package` files:** These can be placed directly in the `Mods` folder or organized into subfolders. For example, `Mods/MyCustomHair/` or `Mods/Furniture/ModernSet/` is perfectly fine.
* **`.ts4script` files:** This is a critical rule for script mods. They **must not be nested more than ONE subfolder deep** within the `Mods` folder.
    * **Correct:** `Documents/Electronic Arts/The Sims 4/Mods/MyAwesomeScriptMod/my_script.ts4script`
    * **Incorrect:** `Documents/Electronic Arts/The Sims 4/Mods/MyAwesomeScriptMod/SubFolder/my_script.ts4script` (This will likely prevent the script mod from loading).

## 4. Understanding Mod Types

Knowing the difference between mod types can help you troubleshoot issues.

* **`.package` files:** These typically contain custom content like clothing, hairstyles, objects, terrains, or overrides of existing game resources. They are generally considered safer as they do not execute complex code.
* **`.ts4script` files:** These are Python script files that can introduce new gameplay mechanics, modify game logic, or add complex features. Because they execute code, it's vital to only download them from trusted creators.

## 5. Keeping Your Mods and Game Healthy

To maintain a stable game and enjoy your mods without issues:

* **Backup Your Saves:** Before installing any new mod, especially script mods, always make a backup of your entire `The Sims 4` folder in `Documents/Electronic Arts/`. This allows you to revert to a working state if something goes wrong.
* **Keep Mods Updated:** Just like the game, mods receive updates. Always check the mod creator's page for the latest version, especially after a new game patch. Outdated mods are a primary cause of bugs, glitches, and crashes.
* **Read Mod Instructions:** Every mod is different. Some have specific installation steps, dependencies (other mods or packs required), or known conflicts. Always read the mod author's documentation.

---

## Watch the Video Guide

Here's a detailed video guide walking you through the mod installation process:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-bottom: 30px;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
        src="https://www.youtube.com/embed/5aQj9M321_E" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

---
