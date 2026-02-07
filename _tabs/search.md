---
layout: page
title: Search
permalink: /search/
---

<div class="search-page">
  <div class="search-box">
    <input id="search-input"
           class="form-control"
           type="search"
           placeholder="Search…"
           autocomplete="off">
    <div class="search-hint text-muted" style="margin-top:8px; font-size:0.9rem;">
      Tip: try words like “core”, “pso”, “skill”, “install”…
    </div>
  </div>

  <div id="search-status" class="text-muted" style="margin-top:14px;"></div>
  <div id="search-results" class="search-results" style="margin-top:18px;"></div>
</div>

<style>
  .search-page { max-width: 860px; }
  .search-results article { margin: 14px 0; padding: 12px 14px; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-primary); }
  .search-results h2 { margin: 0 0 6px 0; font-size: 1.05rem; }
  .search-results p { margin: 0; opacity: .9; }
  .search-results .meta { margin-top: 6px; font-size: .85rem; opacity: .7; }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');

  // Falls Script nicht geladen wurde
  if (typeof SimpleJekyllSearch === 'undefined') {
    status.textContent = 'Search library not loaded (SimpleJekyllSearch).';
    return;
  }

  status.textContent = 'Type to search…';

  SimpleJekyllSearch({
    searchInput: input,
    resultsContainer: results,
    json: '/assets/js/data/search.json',
    searchResultTemplate: `
      <article>
        <h2><a href="{url}">{title}</a></h2>
        <p>{content}</p>
        <div class="meta">{categories} {tags}</div>
      </article>
    `,
    noResultsText: '<p class="text-muted" style="margin-top:10px;">No results.</p>',
    limit: 30,
    fuzzy: false,
    success: function() {
      // wird aufgerufen, wenn JSON erfolgreich geladen ist
      // (einfach nur nice-to-have Feedback)
    },
    templateMiddleware: function(prop, value) {
      if (prop === 'content') {
        // kürzen, damit’s nicht riesig wird
        const s = (value || '').replace(/\s+/g, ' ').trim();
        return s.length > 180 ? s.slice(0, 180) + '…' : s;
      }
      if (prop === 'categories' || prop === 'tags') {
        return value ? value : '';
      }
      return value;
    }
  });

  // kleines Status-Update
  input.addEventListener('input', () => {
    const q = input.value.trim();
    status.textContent = q ? `Searching for “${q}”…` : 'Type to search…';
  });
});
</script>
