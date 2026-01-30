---
layout: page
title: Pack Codes
icon: fas fa-box-open
order: 3
toc: true
---

This list provides an overview of all official abbreviations and codes for **The Sims 4** Packs. It is a helpful resource for modders and players to identify packs across different languages.

**Tip:** Click on the table headers to sort the columns or use `Ctrl + F` to find a specific pack.

## <i class="fas fa-expand-arrows-alt"></i> Expansion Packs

| Code | en | de | es |
| :--- | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endfor %}

## <i class="fas fa-gamepad"></i> Game Packs

| Code | en | de | es |
| :--- | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endfor %}

## <i class="fas fa-tshirt"></i> Stuff Packs

| Code | en | de | es |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% if sp_num <= 18 or sp_num == 46 or sp_num == 49 %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endif %}{% endfor %}

## <i class="fas fa-puzzle-piece"></i> Kits

| Code | en | de | es |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% unless sp_num <= 18 or sp_num == 46 or sp_num == 49 %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endunless %}{% endif %}{% endfor %}

<style>
  /* Fixierte Spaltenbreiten für Symmetrie */
  .sortable {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
  }

  /* Erste Spalte (Code): 15% Breite */
  .sortable th:nth-child(1), 
  .sortable td:nth-child(1) {
    width: 15%;
    text-align: center;
  }

  /* Sprachen (EN, DE, ES) */
  .sortable th:nth-child(2), .sortable td:nth-child(2),
  .sortable th:nth-child(3), .sortable td:nth-child(3),
  .sortable th:nth-child(4), .sortable td:nth-child(4) {
    width: 28.33%;
  }

  /* --- NEU: Header Hervorhebung --- */
  .sortable thead th {
    background-color: #2a2d33; /* Ein edles Dunkelgrau */
    color: #ffffff !important;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 2px solid #007bff; /* Ein blauer Akzent-Strich */
    padding: 12px 8px;
  }

  /* --- Hover-Effekt für Zeilen --- */
  .sortable tbody tr {
    transition: all 0.2s ease;
  }

  .sortable tbody tr:hover {
    background-color: rgba(0, 123, 255, 0.15) !important; /* Dezentes Blau beim Drüberfahren */
    transform: scale(1.002); /* Minimaler Zoom-Effekt */
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  /* Icons in Überschriften */
  h2 i { margin-right: 10px; color: #007bff; }
  
  .sortable td {
    padding: 10px 8px;
    vertical-align: middle;
  }

  /* Styling für die Code-Zellen */
  .sortable td:nth-child(1) strong {
    color: #007bff;
  }
</style>

<script src="https://cdn.jsdelivr.net/gh/tofsjonas/sortable@latest/sortable.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/tofsjonas/sortable@latest/sortable.min.css" rel="stylesheet">

<script>
  function initSortable() {
    // Finde alle Tabellen
    const tables = document.querySelectorAll("table");
    
    if (tables.length > 0) {
      tables.forEach(table => {
        // Füge die Klasse hinzu, die das Plugin benötigt
        table.classList.add("sortable");
      });
      console.log("Sortable initialized for " + tables.length + " tables.");
    } else {
      // Falls die Tabellen noch nicht da sind (Timing-Problem), kurz warten
      setTimeout(initSortable, 100);
    }
  }

  // Starte die Initialisierung sofort und nach dem Laden
  if (document.readyState === "complete") {
    initSortable();
  } else {
    window.addEventListener("load", initSortable);
  }
</script>
