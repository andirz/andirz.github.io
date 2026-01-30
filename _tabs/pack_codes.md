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

| Code | English | Deutsch | Español |
| :--- | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endfor %}

## Game Packs

| Code | English | Deutsch | Español |
| :--- | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |
{% endif %}{% endfor %}

## Stuff Packs

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
