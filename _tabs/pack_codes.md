---
layout: page
icon: fas fa-box-open
order: 3
title: Pack Codes
---

In this overview, you will find the official abbreviations for **The Sims 4** Packs. Click on the headers to sort the columns.

### Expansion Packs

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}

### Game Packs

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}

### Stuff Packs & Kits

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}
| **{{ code }}** | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}

<script src="https://cdn.jsdelivr.net/gh/tofsjonas/sortable@latest/sortable.min.js"></script>
<link href="https://cdn.jsdelivr.net/gh/tofsjonas/sortable@latest/sortable.min.css" rel="stylesheet">
<style>
  /* Optional: Kleiner Pfeil beim Drüberfahren */
  .sortable th { cursor: pointer; }
  .sortable th:hover { background-color: rgba(0,0,0,0.1); }
</style>

<script>
  // Wir fügen die Klasse "sortable" automatisch an alle Tabellen an
  document.querySelectorAll("table").forEach(table => {
    table.classList.add("sortable");
  });
</script>
