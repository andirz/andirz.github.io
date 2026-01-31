---
mod_id: cleanup-script
title: "Cleanup Script for Windows"
icon: "fas fa-broom"
files: ["bat"]
categories: [Tools]
curseforge_ban = true
---

## What does this tool do?
The **Cleanup Script for Windows** is a utility designed to keep your *The Sims 4* user folder healthy. It automates the task of deleting temporary cache files and error logs that can cause game lag, visual glitches, or mod conflicts.

> **Important:** Files are **not deleted automatically** by your system. To clean them, you need to manually double-click the script. This gives you the chance to keep logs if you need to send them to mod authors for troubleshooting before wiping them.

### This script deletes the following data:
* **onlinethumbnailcache** (folder and all files)
* **cachestr** (folder and all files)
* **ConfigOverride** & **Screenshots** (folders - *deleted only if empty*)
* **localthumbcache.package** (file)
* **localsimtexturecache.package** (file)
* **avatarcache.package** (file)
* **UserData.lock** (file)
* **notify.glob** (file)
* **ConnectionStatus.txt** (file)
* **GPU Benchmark/Score Results** (txt files)
* **lastCrash**, **lastException** & **lastUIException** (all matching .txt files)
* **BE-ExceptionReport** & **BE-UIExceptionReport** (all matching .html files)
* **WickedWhims** & **WhimsInfo** (all matching .log and .txt files)
* **Andirz_*.log** (all logs from my own mods)

**No other files will be deleted**—not from your Mods folder, not from your Saves folder, or any other location. All your personal data is safe! For a detailed explanation of what these files do, see [Crinrict's User Files Explained](https://sims4.crinrict.com/eng/2014/09/user-files-explained/).

## Why you should delete cache files
Over time, cache files can become corrupted, especially after game updates. Deleting them forces the game to regenerate fresh data. Read more in [Crinrict's Guide: How to delete cache files](https://sims4.crinrict.com/eng/2014/09/delete-cache-files/).

## Improved Permissions
I have added a check to the script to ensure it runs with **Administrator rights**. If it lacks permissions, it will automatically restart and ask for permission. This was implemented to fix reports where the script "did nothing" for some users. If you still encounter issues, please let me know!

## How to use this script
This is a self-executable [Batch file](https://en.wikipedia.org/wiki/Batch_file). 

1. **Placement:** Do **not** copy this file into your Mods folder. Place it directly into your **The Sims 4** main folder (where you see "Mods", "Saves", and "Tray"). 
2. **Execution:** Double-click the script to run it. 
3. **Verification:** You can right-click the file and select **"Edit"** to see the code and verify every command yourself.

---

### What is a .bat file?
* **Transparency:** It is 100% transparent—open it in any text editor (like Notepad) to see the full list of deletion commands.
* **SmartScreen:** Windows might show a "Windows protected your PC" warning. Click **"More info"** and then **"Run anyway"**.
