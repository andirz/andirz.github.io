---
layout: default
mod_id: cleanup_script
title: Cleanup Script for Windows
---

{% include mod-infobox.html %}

## What does this tool do?
The **Cleanup Script for Windows** is a specialized tool for The Sims 4 that automates the cleaning of temporary cache and log files. Over time, these files can accumulate and cause performance issues, visual glitches, or mod conflicts.

Starting with **Version 1.3.0**, the script includes an automatic administrator rights check. If the script lacks the necessary permissions to delete certain files, it will automatically request to restart with elevated privileges.

### Files and Folders Cleared:
The script targets specific files that are safe to delete and are known to cause issues when outdated:
* **Cache Folders:** `onlinethumbnailcache` (all files) and `cachestr`.
* **Standard Packages:** `localthumbcache.package`, `avatarcache.package`, and `localsimtexturecache.package`.
* **Lock & Status Files:** `UserData.lock`, `notify.glob`, and `ConnectionStatus.txt`.
* **Log Files:** Cleans out various logs including `lastException.txt`, `lastUIException.txt`, `lastCrash.txt`, and even mod-specific logs like `WickedWhimsInfoLog.log` or `WonderfulWhimsInfoLog.log`.
* **Empty Folders:** Safely removes `Screenshots`, `Recorded Videos`, and `ConfigOverride` only if they are completely empty.

> **Note on Safety:** Since v1.3.0, the `houseDescription-client.package` is **excluded** from deletion to prevent the loss of household descriptions, following community troubleshooting reports.

## How to use
This is a **self-executable batch (.bat) script**. It is not a mod in the traditional sense and does not belong in your Mods folder.

1. **Placement:** Move the `*.bat` file directly into your **The Sims 4** main folder (where the `Mods`, `Saves`, and `Tray` folders are located).
2. **Run:** Double-click the script to start the cleanup.
3. **Confirm:** If Windows asks for administrator permissions, grant them to allow the script to delete protected temporary files.

## Why do I need this?
Deleting cache files is a standard troubleshooting step for The Sims 4. It is often required after:
* Updating the game.
* Adding or removing mods.
* Experiencing "Last Exception" errors or UI glitches.

By using this script, you ensure that no old data interferes with your current game session, leading to a smoother and more stable experience.

## What is a .bat file?
A `.bat` (Batch) file is a simple script used by Windows to execute a sequence of commands. 
* **Safe & Transparent:** You can right-click the script and select **"Edit"** to see the exact code. It only uses standard Windows delete commands.
* **No Settings Lost:** Log files do not contain mod settings. Your preferences for mods like WickedWhims are stored safely in your `Saves` folder and will not be touched.
* **SmartScreen:** If Windows shows a "protected your PC" warning, click **"More info"** and then **"Run anyway"**. This is a standard warning for scripts downloaded from the internet.
