---
layout: page
title: Pack Codes
icon: fas fa-box-open
order: 3
toc: true
---

In this overview, you will find the official abbreviations for **The Sims 4** Packs. 
Click on the headers to sort the columns.

## Expansion Packs
Expansion Packs are the largest type of DLC for The Sims 4. They focus on major new features, large worlds, and significant gameplay overhauls.

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}

## Game Packs
Game Packs are mid-sized DLCs that fall between Expansion Packs and Stuff Packs. They usually introduce a new world and unique, themed gameplay systems or careers.

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}

## Stuff Packs
Stuff Packs are smaller DLCs that typically focus on a specific theme, providing a collection of themed furniture, clothing, and one or two functional gameplay objects.

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}
  {% assign code = pack[0] %}
  {% assign info = pack[1] %}
  {% if code contains "SP" %}
    {% assign sp_number = code | remove: "SP" | plus: 0 %}
    {% if sp_number <= 18 or sp_number == 46 or sp_number == 49 %}
| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
    {% endif %}
  {% endif %}
{% endfor %}

## Kits
Kits are mini-collections of content designed to add a very specific style or a single gameplay feature. Even though they often use "SP" codes internally, they are categorized as Kits.

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}
  {% assign code = pack[0] %}
  {% assign info = pack[1] %}
  {% if code contains "SP" %}
    {% assign sp_number = code | remove: "SP" | plus: 0 %}
    {% unless sp_number <= 18 or sp_number == 46 or sp_number == 49 %}
| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
    {% endunless %}
  {% endif %}
{% endfor %}

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
    background-color: rgba(100, 149, 237, 0.15) !important; /* Ein sanftes Blau */
    transition: background-color 0.2s ease;
  }
</style>

<script>
  // Fügt die Sortier-Klasse zu allen Tabellen hinzu
  document.querySelectorAll("table").forEach(table => {
    table.classList.add("sortable");
  });
</script>
