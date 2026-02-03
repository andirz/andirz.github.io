---
mod_id: cleanup_script
title: "Cleanup Script for Windows"
icon: "fas fa-broom"
files: ["bat"]
categories: [Utility, Tools, Scripts]
tagline: "Keep your game running smoothly by removing temporary cache and diagnostic logs with one simple tool."
curseforge_ban: true
---

## About This Tool
The **Cleanup Script for Windows** is a small utility designed to keep your *The Sims 4* user folder clean and healthy. It removes **temporary cache folders and diagnostic log files** that can build up over time and may cause lag, UI glitches, or confusing error reports — especially after game updates or frequent mod changes.

> **Important:** Nothing is deleted automatically. Files are only removed when you **manually run** the script. This gives you full control and allows you to keep logs for troubleshooting if needed.

### This script deletes the following data:
* **onlinethumbnailcache** (folder and all files)
* **cachestr** (folder and all files)
* **ConfigOverride** & **Screenshots** (folders – *deleted only if empty*)
* **localthumbcache.package**
* **localsimtexturecache.package**
* **avatarcache.package**
* **UserData.lock**
* **notify.glob**
* **ConnectionStatus.txt**
* **GPU Benchmark** / **Score result** files (`.txt`)
* **lastCrash**, **lastException** & **lastUIException** (all matching `.txt` files)
* **BE-ExceptionReport** & **BE-UIExceptionReport** (all matching `.html` files)
* **WickedWhims** & **WhimsInfo** logs (`.log` / `.txt`)
* **Andirz_*.log** (logs created by my own mods only)

No other files will be deleted. Your **Saves**, **Mods**, **Tray files**, and all personal game data remain untouched.

## Why you should delete cache files?
Cache files are meant to be temporary. After patches, mod updates, or configuration changes, they can become outdated or corrupted. Deleting them forces the game to regenerate fresh data on the next start, which often resolves:
- random UI issues;  
- long loading times;  
- visual glitches;  
- misleading error messages.  

## Improved Permissions
The script checks whether it is running with **Administrator rights**. If not, it automatically restarts and asks for permission. This prevents situations where the script appears to “do nothing” because Windows blocks file access.

## Language & Translations
This tool is a **Windows batch script** and contains **no in-game text strings**. The script itself is written in **English only**.  Translations are **not possible and not required**, as the script does not interact with the game UI or use localized text.

## Frequently Asked Questions

**Does this script work on macOS or iMac?**  
No. This is a Windows batch script (.bat) and cannot run on macOS or iMac systems.

**Does this script delete save files or mod settings?**  
No. The script does **not** delete save games, households, lots, or configuration files from other mods. It only removes **temporary cache data and diagnostic log files** that the game automatically recreates.

**Can this script break my game?**  
No. Deleting cache files is safe and recommended after updates or mod changes. The game will automatically regenerate everything it needs on the next launch.

**When should I run this script?**  
Typical use cases:
- After a game update  
- After installing or removing mods  
- If you experience lag, UI glitches, or strange errors  
- When preparing log files for troubleshooting

**The script opens and closes very quickly – is that normal?**  
Yes. If there is nothing to delete, the script may finish almost instantly.

**Why does Windows warn me about file deletion?**  
No. That warning is expected and intentional. The entire purpose of this script is to delete temporary cache and log files. If you feel unsure, you can simply open the .bat file in any text editor (for example Notepad). You will see that it only deletes the explicitly listed cache folders and log files — nothing else.
