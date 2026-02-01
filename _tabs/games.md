---
layout: page
title: Game Center
icon: "fas fa-gamepad"
order: 9
description: Play Sims 4 themed mini games — quick reflex challenges and slow strategy puzzles.
---

## <i class="fas fa-gamepad"></i> Game Center

Pick a game and have fun — more games will be added over time.

---

<style>
  .game-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    .game-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (min-width: 992px) {
    .game-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .game-tile {
    display: block;
    border-radius: 18px;
    border: 1px solid var(--border-color, rgba(0,0,0,0.08));
    background: var(--bg-secondary, #fff);
    box-shadow: 0 10px 25px -10px rgba(0,0,0,0.10);
    padding: 18px;
    text-decoration: none;
    transition: transform .08s ease, box-shadow .08s ease, border-color .08s ease;
    height: 100%;
  }

  .game-tile:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px -14px rgba(0,0,0,0.18);
    border-color: rgba(59, 130, 246, 0.35);
  }

  .game-tile-top {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .game-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: rgba(59, 130, 246, 0.10);
    border: 1px solid rgba(59, 130, 246, 0.18);
    flex: 0 0 auto;
  }

  .game-icon i {
    font-size: 22px;
    color: var(--link-color, #2563eb);
  }

  .game-title {
    font-weight: 800;
    margin: 0;
    color: var(--link-color, #2563eb);
    line-height: 1.2;
    font-size: 1.05rem;
  }

  .game-desc {
    margin: 6px 0 0;
    color: rgba(15,23,42,0.70);
    font-size: 0.92rem;
  }

  .game-meta {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .game-pill {
    font-size: 0.80rem;
    font-weight: 700;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,0.07);
    background: rgba(248, 250, 252, 0.95);
    color: rgba(15,23,42,0.75);
  }
</style>

<div class="game-grid">
{% assign sorted_games = site.games | sort: "title" %}
{% for entry in sorted_games %}
  <a href="{{ entry.url | relative_url }}" class="game-tile">
    <div class="game-tile-top">
      <div class="game-icon">
        {% if entry.icon %}
          <i class="{{ entry.icon }}"></i>
        {% else %}
          <i class="fas fa-gamepad"></i>
        {% endif %}
      </div>
      <div>
        <p class="game-title">{{ entry.title }}</p>
        {% if entry.description %}
          <p class="game-desc">{{ entry.description }}</p>
        {% else %}
          <p class="game-desc">A Sims 4 themed mini game.</p>
        {% endif %}
      </div>
    </div>

    <div class="game-meta">
      {% if entry.difficulty %}
        <span class="game-pill">Difficulty: {{ entry.difficulty }}</span>
      {% endif %}
      {% if entry.mode %}
        <span class="game-pill">{{ entry.mode }}</span>
      {% endif %}
      {% if entry.time %}
        <span class="game-pill">{{ entry.time }}</span>
      {% endif %}
    </div>
  </a>
{% endfor %}
</div>
