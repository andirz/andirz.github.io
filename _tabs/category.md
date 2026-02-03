---
title: "Categories"
permalink: /category/
layout: page
---

<style>
  .cat-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
    margin-bottom: 18px;
  }
  .cat-pill {
    display: inline-block;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    color: var(--text-muted);
    font-weight: 650;
    font-size: .88rem;
    text-decoration: none;
    line-height: 1.1;
    transition: transform .12s ease, box-shadow .12s ease;
  }
  .cat-pill:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0,0,0,.06);
  }
  .cat-pill.is-active {
    color: var(--link-color);
    border-color: rgba(0,0,0,.18);
    background: rgba(0,0,0,.03);
  }

  .cat-selected {
    display: none;
    margin-top: 6px;
    margin-bottom: 10px;
    color: var(--text-muted);
  }
  .cat-selected a {
    color: var(--link-color);
    text-decoration: none;
    font-weight: 700;
  }

  .mods-grid {
    display: none; /* erst bei aktivem Filter sichtbar */
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 14px;
    margin-top: 14px;
  }
  .mod-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 14px;
    padding: 14px 14px 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    transition: transform .12s ease, box-shadow .12s ease;
  }
  .mod-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.07);
  }
  .mod-head {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
  .mod-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    color: var(--accent-color);
    flex: 0 0 auto;
  }
  .mod-title a {
    color: var(--link-color);
    text-decoration: none;
    font-weight: 850;
    font-size: 1.05rem;
    line-height: 1.1;
  }
  .mod-meta {
    display:flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
    color: var(--text-muted);
    font-size: .85rem;
  }
  .chip {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    font-weight: 650;
    font-size: 0.72rem;
    line-height: 1.3;
  }
  .chip-pack {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 750;
    background: rgba(128,128,128,0.10);
    border: 1px solid rgba(128,128,128,0.18);
  }
  .mod-desc {
    color: var(--text-muted);
    font-size: .9rem;
    line-height: 1.45;
    margin-top: 8px;
  }
</style>

<p style="margin-top:0; color: var(--text-muted);">
  Pick a category to see matching mods.
</p>

{%- comment -%}
  1) Kategorien aus ALLEN Mod-Pages sammeln (site.mods)
  Jekyll hat kein “uniq” für Arrays in jeder Umgebung, daher sammeln wir in einem String und deduplizieren per contains.
{%- endcomment -%}

{% assign all_cats = "" | split: "|" %}
{% for m in site.mods %}
  {% if m.categories and m.categories.size > 0 %}
    {% for c in m.categories %}
      {% assign all_cats = all_cats | push: c %}
    {% endfor %}
  {% endif %}
{% endfor %}

{%- comment -%}
  2) Deduplizieren + Sortieren
{%- endcomment -%}
{% assign unique_cats = "" | split: "|" %}
{% for c in all_cats %}
  {% assign c_clean = c | strip %}
  {% unless unique_cats contains c_clean %}
    {% assign unique_cats = unique_cats | push: c_clean %}
  {% endunless %}
{% endfor %}
{% assign unique_cats = unique_cats | sort %}

<div class="cat-cloud" id="catCloud">
  {% for c in unique_cats %}
    <a class="cat-pill" href="{{ site.baseurl }}/category/?category={{ c | url_encode }}" data-cat="{{ c | escape }}">
      {{ c }}
    </a>
  {% endfor %}
</div>

<div class="cat-selected" id="catSelected">
  Showing category: <strong id="catSelectedName"></strong>
  · <a href="{{ site.baseurl }}/category/">clear</a>
</div>

<div class="mods-grid" id="modsGrid">
  {% for mod_entry in site.data.mods %}
    {% assign mod_page = site.mods | where: "mod_id", mod_entry.id | first %}

    {% assign display_name = mod_page.title | default: mod_entry.name | default: mod_entry.id %}
    {% assign display_icon = mod_page.icon | default: mod_entry.icon | default: 'fas fa-box' %}
    {% assign current_version = mod_page.version | default: mod_entry.version %}
    {% assign update_date = mod_page.updated | default: mod_entry.updated %}
    {% assign final_packs = mod_page.packs | default: mod_entry.packs %}
    {% assign cats = mod_page.categories | default: mod_entry.categories | default: "" %}

    <div class="mod-card"
         data-categories="{{ cats | join: '|' | escape }}">
      <div class="mod-head">
        <div class="mod-icon">
          <i class="{{ display_icon }}" style="font-size: 1.25rem;"></i>
        </div>

        <div class="mod-title" style="min-width:0;">
          {% if mod_page %}
            <a href="{{ mod_page.url | relative_url }}">{{ display_name }}</a>
          {% else %}
            <span style="font-weight:850; opacity:.7;">{{ display_name }}</span>
          {% endif %}

          <div class="mod-meta">
            {% if current_version %}
              <span class="chip" title="Version">v{{ current_version }}</span>
            {% endif %}
            {% if update_date %}
              <span class="chip" title="Last Update">{{ update_date | date: "%b %d, %Y" }}</span>
            {% endif %}
            {% if final_packs and final_packs.size > 0 %}
              {% for p in final_packs %}
                {% if p != "BG" %}
                  <span class="chip chip-pack" title="{{ site.data.packs[p].en | default: p }}">{{ p }}</span>
                {% endif %}
              {% endfor %}
            {% endif %}
          </div>
        </div>
      </div>

      {% if mod_page and mod_page.excerpt %}
        <div class="mod-desc">{{ mod_page.excerpt | strip_html | truncate: 140 }}</div>
      {% endif %}
    </div>
  {% endfor %}
</div>

<script>
(function () {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');

  const grid = document.getElementById('modsGrid');
  const selected = document.getElementById('catSelected');
  const selectedName = document.getElementById('catSelectedName');
  const pills = document.querySelectorAll('.cat-pill');

  // Wenn ohne category aus Menü: nur Wolke anzeigen (Grid bleibt display:none)
  if (!category) return;

  // UI: aktive Pill markieren + “Showing …” einblenden
  selected.style.display = 'block';
  selectedName.textContent = category;
  pills.forEach(p => {
    if (p.getAttribute('data-cat') === category) p.classList.add('is-active');
  });

  // Grid aktivieren und filtern
  grid.style.display = 'grid';
  const cards = grid.querySelectorAll('[data-categories]');
  let shown = 0;

  cards.forEach(card => {
    const cats = (card.dataset.categories || '').split('|').map(s => s.trim());
    const ok = cats.includes(category);
    card.style.display = ok ? '' : 'none';
    if (ok) shown++;
  });

  // Wenn nix gefunden: kurzen Hinweis rein
  if (shown === 0) {
    const msg = document.createElement('div');
    msg.style.color = 'var(--text-muted)';
    msg.style.marginTop = '10px';
    msg.textContent = 'No mods found in this category.';
    grid.parentNode.insertBefore(msg, grid.nextSibling);
  }
})();
</script>
