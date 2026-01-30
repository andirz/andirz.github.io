---
layout: page
title: Support
icon: fas fa-question-circle
order: 4
---

## Support & Documentation
Welcome to the support hub. Here you will find all the necessary guides and documentation for my mods. If you need further assistance, please consider joining my community on Discord or reaching out via Patreon.

---

{% comment %} 
Filtering pages by 'sub_group: support' and sorting them alphabetically by title.
{% endcomment %}

{% assign support_pages = site.pages | where: "sub_group", "support" | sort: "title" %}

<div class="support-container" style="margin-top: 1.5rem;">
  <div class="list-group">
  {% for page in support_pages %}
    <a href="{{ page.url | relative_url }}" class="list-group-item list-group-item-action d-flex align-items-center" style="padding: 1rem;">
      <div class="icon-wrapper" style="margin-right: 1.5rem;">
        <i class="fas fa-book text-primary fa-lg"></i>
      </div>
      <div>
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1" style="font-weight: 600; color: var(--link-color);">{{ page.title }}</h5>
        </div>
        {% if page.description %}
          <p class="mb-1 text-muted" style="font-size: 0.9rem;">{{ page.description }}</p>
        {% endif %}
      </div>
    </a>
  {% endfor %}
  </div>
</div>

<div class="status-info-box mt-4">
  <i class="fas fa-exclamation-triangle"></i> 
  <span>Before reporting a bug, please ensure you have the latest **Smart Core Script** installed and your game is updated to the current patch.</span>
</div>
