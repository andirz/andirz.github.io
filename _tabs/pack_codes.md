---
layout: page
title: Pack Codes
icon: fas fa-box-open
order: 3
toc: true
---

This list provides an overview of all official abbreviations and codes for **The Sims 4** Packs. It is a helpful resource for modders and players to identify packs across different languages.

**Tip:** Click on the table headers to sort the columns or use `Ctrl + F` to find a specific pack.

## Expansion Packs

| Code <i onclick="smartSort(this, 0)" class="fas fa-sort"></i> | en <i onclick="smartSort(this, 1)" class="fas fa-sort"></i> | de <i onclick="smartSort(this, 2)" class="fas fa-sort"></i> | es <i onclick="smartSort(this, 3)" class="fas fa-sort"></i> |
| :--- | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endfor %}

## Game Packs

| Code <i onclick="smartSort(this, 0)" class="fas fa-sort"></i> | en <i onclick="smartSort(this, 1)" class="fas fa-sort"></i> | de <i onclick="smartSort(this, 2)" class="fas fa-sort"></i> | es <i onclick="smartSort(this, 3)" class="fas fa-sort"></i> |
| :--- | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endfor %}

## Stuff Packs

| Code <i onclick="smartSort(this, 0)" class="fas fa-sort"></i> | en <i onclick="smartSort(this, 1)" class="fas fa-sort"></i> | de <i onclick="smartSort(this, 2)" class="fas fa-sort"></i> | es <i onclick="smartSort(this, 3)" class="fas fa-sort"></i> |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}{% assign sp_num = code | remove: "SP" | plus: 0 %}{% if sp_num <= 18 or sp_num == 46 or sp_num == 49 %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endif %}{% endfor %}

## Kits

| Code <i onclick="smartSort(this, 0)" class="fas fa-sort"></i> | en <i onclick="smartSort(this, 1)" class="fas fa-sort"></i> | de <i onclick="smartSort(this, 2)" class="fas fa-sort"></i> | es <i onclick="smartSort(this, 3)" class="fas fa-sort"></i> |
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

<script>
function smartSort(element, n) {
  // Findet die Tabelle, in der das geklickte Icon liegt
  var table = element.closest('table');
  var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc";
  
  while (switching) {
    switching = false;
    rows = table.rows;
    // Wir starten bei 1, um den Header zu überspringen
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      
      var xValue = x.innerText.toLowerCase();
      var yValue = y.innerText.toLowerCase();
      
      if (dir == "asc") {
        if (xValue > yValue) { shouldSwitch = true; break; }
      } else if (dir == "desc") {
        if (xValue < yValue) { shouldSwitch = true; break; }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
</script>
