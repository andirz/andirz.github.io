---
layout: page
title: Support
icon: fas fa-question-circle
order: 500
toc: true
---

## <i class="fas fa-info-circle"></i> Support Guidelines

Welcome to the central support hub for my Sims 4 mods. To ensure the best experience for everyone, **please read the available documentation thoroughly before reaching out for individual help.** As a modder, I invest a significant amount of my personal time into creating, updating, and documenting these tools for the community. By checking the guides first, you help me spend less time answering repetitive questions and more time developing new features and maintaining existing mods.

## <i class="fas fa-map-signs"></i> Getting Started
If you are new to my mods, I highly recommend starting with the **General Installation Guide**. Most issues can be resolved by ensuring you have the latest version of the **Smart Core Script** installed, as it is the backbone of my modding system.

---

## <i class="fas fa-graduation-cap"></i> Mod Guides

<div class="support-container" style="margin-top: 1.5rem;">
  <div class="list-group">
  {% assign sorted_guides = site.support | sort: "title" %}
  {% for guide in sorted_guides %}
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

---

## <i class="fas fa-comments"></i> Need More Help?

Can't find the answer you're looking for? If you've read the guides and still encounter issues, please join our community:

* **[Discord Community]({{ site.data.globals.links.discord }})** – **This is the only place for support.** It is the most efficient way to get help, share screenshots, and use dedicated threads.

**Important Note on Support:**
To respect my time and ensure you get an answer, please **do not** send support requests or bug reports via **Patreon** or **CurseForge** comments. These platforms are not suitable for technical troubleshooting. Any messages there may be overlooked or redirected to Discord.
