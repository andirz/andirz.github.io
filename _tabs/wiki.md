---
layout: page
title: Sims 4 Wiki
icon: "fas fa-book"
order: 450
---

## <i class="fas fa-atlas"></i> Documentation & Wiki

Explore the detailed documentation for all my mods. Each page contains information about features, settings, and requirements.

---

<div class="support-container" style="margin-top: 1.5rem;">
  <div class="list-group">
  {% assign sorted_wiki = site.wiki | sort: "title" %}
  {% for entry in sorted_wiki %}
    <a href="{{ entry.url | relative_url }}" class="list-group-item list-group-item-action d-flex align-items-center" style="padding: 1rem;">
      <div class="icon-wrapper" style="margin-right: 1.5rem; width: 30px; text-align: center;">
        {% if entry.icon %}
          <i class="{{ entry.icon }} text-primary fa-lg"></i>
        {% else %}
          <i class="fas fa-file-alt text-primary fa-lg"></i> {% endif %}
      </div>
      <div>
        <h5 class="mb-1" style="font-weight: 600; color: var(--link-color);">{{ entry.title }}</h5>
        {% if entry.description %}
          <p class="mb-1 text-muted" style="font-size: 0.9rem;">{{ entry.description }}</p>
        {% endif %}
      </div>
    </a>
  {% endfor %}
  </div>
</div>
