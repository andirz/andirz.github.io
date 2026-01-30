---
layout: page
icon: fas fa-box-open
order: 3
title: Pack Codes
---

In this overview, you will find the official abbreviations for **The Sims 4** Packs. These codes are used in mod descriptions and requirements.

### Expansion Packs (EP)

| Code | Pack Name |
|:---|:---|
{% for pack in site.data.packs %}
  {% assign code = pack[0] %}
  {% assign strings = pack[1] %}
  {% if code contains "EP" %}
| **{{ code }}** | {{ strings.en }} |
  {% endif %}
{% endfor %}

### Game Packs (GP)

| Code | Pack Name |
|:---|:---|
{% for pack in site.data.packs %}
  {% assign code = pack[0] %}
  {% assign strings = pack[1] %}
  {% if code contains "GP" %}
| **{{ code }}** | {{ strings.en }} |
  {% endif %}
{% endfor %}

### Stuff Packs & Kits (SP)

| Code | Pack Name |
|:---|:---|
{% for pack in site.data.packs %}
  {% assign code = pack[0] %}
  {% assign strings = pack[1] %}
  {% if code contains "SP" %}
| **{{ code }}** | {{ strings.en }} |
  {% endif %}
{% endfor %}
