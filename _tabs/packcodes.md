---
layout: page
title: "Pack Codes"
icon: fas fa-box-open
order: 3
---

In this overview, you will find the official abbreviations for **The Sims 4** Packs. These codes are used in mod descriptions and requirements.

<div class="status-info-box">
  <i class="fas fa-info-circle"></i> 
  <span>This list is automatically generated from the database.</span>
</div>

### Expansion Packs (EP)
| Code | Pack Name |
|:---|:---|
{% assign expansion_packs = site.data.packs | filter: "type", "EP" %}{% for pack in expansion_packs %}
| **{{ pack.id }}** | {{ pack.name }} |{% endfor %}

### Game Packs (GP)
| Code | Pack Name |
|:---|:---|
{% assign game_packs = site.data.packs | filter: "type", "GP" %}{% for pack in game_packs %}
| **{{ pack.id }}** | {{ pack.name }} |{% endfor %}

### Stuff Packs (SP)
| Code | Pack Name |
|:---|:---|
{% assign stuff_packs = site.data.packs | filter: "type", "SP" %}{% for pack in stuff_packs %}
| **{{ pack.id }}** | {{ pack.name }} |{% endfor %}
