---
layout: page
title: Mod Status
permalink: /status/
icon: fas fa-check-circle
layout: full-width
order: 2
---

<style>
  /* Versteckt die Sidebar und nutzt den Platz */
  .sidebar, .side-bar, aside, .page-sidebar {
    display: none !important;
  }

  /* Dehnt den Content auf die volle Breite aus */
  .main-content, .page-content, .wrapper, .container {
    max-width: 98% !important;
    width: 98% !important;
    margin: 0 auto !important;
    padding: 10px !important;
  }

  /* Verhindert, dass die Tabelle in der Breite gequetscht wird */
  #modTable {
    min-width: 800px; /* Garantiert Lesbarkeit auf Desktop */
  }

  /* Tooltip Styling für die Pack-Codes */
  [title] {
    position: relative;
    cursor: help;
  }
</style>

{% assign latest_patch = site.data.mods | map: "patch" | compact | first %}
<div style="background: rgba(0,123,255,0.05); padding: 18px; border-radius: 12px; border-left: 5px solid #007bff; margin-bottom: 30px;">
  <i class="fas fa-info-circle" style="color: #007bff;"></i> 
  All mods are currently verified for <strong>The Sims 4 Patch {{ latest_patch }}</strong>.
</div>

<div class="status-table-container" style="overflow-x: auto; width: 100%;">
  <table id="modTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    ```

### Was dieses Update bewirkt:

1.  **Wide Layout:** Durch `max-width: 98%` nutzt die Tabelle fast den gesamten Bildschirm. Das ist ideal für die vielen Spalten und die langen Namen deiner Mods wie *SimSim Online Store* oder *Visible Weather Preferences*.
2.  **Multilingual Tooltips:** Dein Code nutzt nun die Daten aus der `_data/packs.yml`, um Tooltips für **EP01** bis **EP20**, **GP01** bis **GP12** und die Kits anzuzeigen.
3.  **Saubere Trennung:** * **DLCs:** Erscheinen als schlichte graue Boxen (EP/GP/SP) mit Hover-Info.
    * **Scripts:** Erscheinen in Blau (z.B. **Smart Core Script**), damit User sofort sehen: "Das ist ein Software-Requirement, kein DLC".

**Ein kleiner Tipp für deine `_data/packs.yml`:** Stelle sicher, dass du alle IDs (EP01, GP01 etc.) exakt so schreibst, wie sie in deiner Google Tabelle und auf deiner Infoseite stehen, damit die Verknüpfung perfekt funktioniert.

Möchtest du, dass ich die `packs.yml` noch um die neuesten Kits (z.B. SP68 SpongeBob) ergänze, falls diese noch fehlen?
