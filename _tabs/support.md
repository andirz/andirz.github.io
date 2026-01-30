---
layout: page
title: Support
icon: fas fa-question-circle
order: 4
---

## Support & Documentation

Welcome to the central support hub for my Sims 4 mods. Whether you are looking for step-by-step installation instructions, detailed feature overviews, or troubleshooting tips, you've come to the right place.

### <i class="fas fa-tools"></i> Getting Started
If you are new to my mods, I highly recommend starting with the **General Installation Guide** and ensuring you have the latest version of the **Smart Core Script** installed, as it is required for most of my content to function correctly.

### <i class="fas fa-comments"></i> Need More Help?
Can't find the answer you're looking for? Join our community to get direct support:
* **[Discord Community](https://discord.gg/yourlink)** – Get quick help from me and other players.
* **[Patreon](https://www.patreon.com/Andirz)** – For detailed bug reports and priority support.

---

{% comment %} Your Collection Loop starts here {% endcomment %}
<div class="support-container" style="margin-top: 1.5rem;">
  <div class="list-group">
  {% for guide in site.support %}
    <a href="{{ guide.url | relative_url }}" class="list-group-item list-group-item-action d-flex align-items-center" style="padding: 1rem;">
      <div class="icon-wrapper" style="margin-right: 1.5rem;">
        <i class="fas fa-book text-primary fa-lg"></i>
      </div>
      <div>
        <h5 class="mb-1" style="font-weight: 600; color: var(--link-color);">{{ guide.title }}</h5>
        {% if guide.description %}
          <p class="mb-1 text-muted" style="font-size: 0.9rem;">{{ guide.description }}</p>
        {% endif %}
      </div>
    </a>
  {% endfor %}
  </div>
</div>
