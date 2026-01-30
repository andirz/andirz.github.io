---
layout: page
title: Support
icon: fas fa-graduation-cap
order: 7
---

## <i class="fas fa-info-circle"></i> Welcome to the Guides
In this section, you will find detailed instructions on how to install and use my mods. Whether you're setting up the **SimSim Online Store** for the first time or configuring the **Smart Core Script**, these tutorials will help you get the most out of your game.

---

{% comment %} 
Wir gruppieren alle Tutorials aus deiner Collection nach der Kategorie 
{% endcomment %}
{% assign tutorials_by_category = site.tutorials | group_by: "category" %}

{% for group in tutorials_by_category %}
  {% if group.name != "" and group.name != nil %}
    <div class="category-header" style="margin-top: 2rem;">
      <h3 class="border-bottom pb-2">
        <i class="fas fa-folder-open text-primary"></i> {{ group.name }}
      </h3>
    </div>
  {% else %}
    <div class="category-header" style="margin-top: 2rem;">
      <h3 class="border-bottom pb-2">
        <i class="fas fa-folder text-muted"></i> General Guides
      </h3>
    </div>
  {% endif %}

  <div class="tutorial-list" style="padding-left: 1rem; margin-bottom: 2rem;">
    {% for guide in group.items %}
      <div class="tutorial-item" style="margin: 10px 0;">
        <i class="fas fa-file-alt text-muted"></i> 
        <a href="{{ guide.url | relative_url }}" style="font-weight: 500; font-size: 1.1rem;">
          {{ guide.title }}
        </a>
        {% if guide.description %}
          <p style="margin: 0 0 0 25px; font-size: 0.9rem; color: var(--text-muted);">
            {{ guide.description }}
          </p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% endfor %}
