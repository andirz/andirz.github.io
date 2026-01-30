---
layout: page
icon: fas fa-box-open
order: 3
title: Pack Codes
---

In this overview, you will find the official abbreviations for **The Sims 4** Packs.

### Expansion Packs

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "EP" %}
| {{ code }} | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}

### Game Packs

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "GP" %}
| {{ code }} | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}

### Stuff Packs & Kits

| Code | English | Deutsch | Español |
| :---: | :--- | :--- | :--- |
{% for pack in site.data.packs %}{% assign code = pack[0] %}{% assign info = pack[1] %}{% if code contains "SP" %}
| {{ code }} | {{ info.en }} | {{ info.de }} | {{ info.es }} |{% endif %}{% endfor %}
