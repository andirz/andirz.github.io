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

<script src="https://cdn.jsdelivr.net/gh/tofsjonas/sortable@latest/sortable.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/tofsjonas/sortable@latest/sortable.min.css" rel="stylesheet">

<style>
  /* Macht die Header anklickbar */
  .sortable th { 
    cursor: pointer; 
    position: relative; 
  }

  /* Hover-Effekt für die Tabellenköpfe */
  .sortable th:hover { 
    background-color: rgba(128, 128, 128, 0.2); 
  }

  /* --- Markierung der aktuellen Zeile --- */
  .sortable tbody tr:hover {
    background-color: var(--bs-table-hover-bg); /* Nutzt die Chirpy Theme Farbe */
    transition: background-color 0.2s ease;
  }
</style>

<script>
  // WICHTIG: Wartet, bis die Seite komplett geladen ist
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("table").forEach(function(table) {
      table.classList.add("sortable");
    });
  });
</script>
