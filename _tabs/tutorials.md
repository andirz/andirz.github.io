---
layout: page
title: Tutorials
icon: fas fa-graduation-cap  # Hier wird das Icon definiert!
order: 4                     # Die Position in der Liste (unten)
---

Hier findest du alle Anleitungen zu meinen Mods.

{% for guide in site.tutorials %}
  - [{{ guide.title }}]({{ guide.url }})
{% endfor %}
