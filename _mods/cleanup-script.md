---
mod_id: cleanup-script
title: "Cleanup Script for Windows"
icon: "fas fa-broom"
files: ["bat"]
categories: [Tools, Scripts]
curseforge_ban: true
---

## What does this tool do?
The **Cleanup Script for Windows** is a utility designed to keep your *The Sims 4* user folder healthy. It automates the task of deleting temporary cache files and error logs that can cause game lag, visual glitches, or mod conflicts.

**Important:** Files are **not deleted automatically** by your system. To clean them, you need to manually run the script. This gives you the chance to keep logs if you need to send them to mod authors for troubleshooting before wiping them.

### This script deletes the following data:
* **onlinethumbnailcache** (folder and all files)
* **cachestr** (folder and all files)
* **ConfigOverride** & **Screenshots** (folders – *deleted only if empty*)
* **localthumbcache.package** (file)
* **localsimtexturecache.package** (file)
* **avatarcache.package** (file)
* **UserData.lock** (file)
* **notify.glob** (file)
* **ConnectionStatus.txt** (file)
* **GPU Benchmark/Score Results** (txt files)
* **lastCrash**, **lastException** & **lastUIException** (all matching `.txt` files)
* **BE-ExceptionReport** & **BE-UIExceptionReport** (all matching `.html` files)
* **WickedWhims** & **WhimsInfo** (all matching `.log` and `.txt` files)
* **Andirz_*.log** (all logs from my own mods)

**No other files will be deleted** — not from your Mods folder, not from your Saves folder, or any other location.  
All your personal data is safe!

For a detailed explanation of what these files do, see:  
https://sims4.crinrict.com/eng/2014/09/user-files-explained/

## Why you should delete cache files
Over time, cache files can become corrupted, especially after game updates. Deleting them forces the game to regenerate fresh data.

More information here:  
https://sims4.crinrict.com/eng/2014/09/delete-cache-files/

## Improved Permissions
I have added a check to the script to ensure it runs with **Administrator rights**.  
If it lacks permissions, it will automatically restart and ask for permission.

This was implemented to fix reports where the script “did nothing” for some users.  
If you still encounter issues, please let me know.

## How to use this script

{% include notice-batch.html %}

1. **Placement:** Place the file directly into your **The Sims 4** main folder (where you see `Mods`, `Saves`, and `Tray`).
2. **Execution:** Double-click the script to run it.

---

## FAQ – Frequently Asked Questions

**Can I keep error logs instead of deleting them?**  
Yes. Simply do not run the script until you are done troubleshooting or sending logs to mod authors. Files are only deleted when you manually start the script.

**Can this script break my game?**  
No. Deleting cache files is safe and recommended after updates or mod changes. The game will automatically regenerate everything it needs on the next start.

**When should I run this script?**  
Typical use cases:
- After a game update  
- After installing or removing mods  
- If you experience lag, UI glitches, or random errors  
- When troubleshooting mod conflicts

**The script opens and closes very quickly – is that normal?**  
Yes. If there is nothing to delete, the script may finish almost instantly.
