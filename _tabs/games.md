---
layout: page
title: Game Center
icon: "fas fa-gamepad"
order: 9
description: Sims 4 themed mini games — reflex challenges and thinking puzzles.
---

## <i class="fas fa-gamepad"></i> Game Center

Play small Sims 4 themed games — some are fast, some require planning and strategy.

---

<style>
  .game-grid{
    display:grid;
    grid-template-columns: 1fr;
    gap:22px;
    margin-top:2rem;
  }

  @media (min-width:768px){
    .game-grid{ grid-template-columns: repeat(2, 1fr); }
  }

  @media (min-width:992px){
    .game-grid{ grid-template-columns: repeat(3, 1fr); }
  }

  .game-tile{
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    aspect-ratio: 1 / 1;      /* square tiles */
    min-height:260px;         /* fallback */

    border-radius:22px;
    border:1px solid var(--border-color, rgba(0,0,0,0.08));
    background: var(--bg-secondary, #fff);
    padding:22px;
    text-decoration:none;

    box-shadow:0 14px 35px -18px rgba(0,0,0,0.18);
    transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
  }

  .game-tile:hover{
    transform: translateY(-4px);
    box-shadow:0 26px 55px -26px rgba(0,0,0,0.35);
    border-color: rgba(59,130,246,.45);
  }

  .game-head{
    display:flex;
    flex-direction:column;
    gap:14px;
    align-items:center;
    text-align:center;
  }

  .game-icon{
    width:64px;
    height:64px;
    border-radius:18px;
    display:grid;
    place-items:center;
    background: rgba(59,130,246,0.12);
    border:1px solid rgba(59,130,246,0.22);
  }

  .game-icon i{
    font-size:28px;
    color: var(--link-color, #2563eb);
  }

  .game-title{
    font-weight:900;
    margin:0;
    line-height:1.2;
    font-size:1.15rem;
    color: var(--link-color, #2563eb);
  }

  .game-desc{
    margin-top:6px;
    font-size:.95rem;
    color: rgba(15,23,42,.75);
  }

  .game-meta{
    margin-top:16px;
    display:flex;
    gap:8px;
    flex-wrap:wrap;
    justify-content:center;
  }

  .game-pill{
    font-size:.78rem;
    font-weight:700;
    padding:6px 12px;
    border-radius:999px;
    border:1px solid rgba(0,0,0,.07);
    background:#f8fafc;
    color: rgba(15,23,42,.75);
  }
</style>

<div class="game-grid">
{% assign sorted_games = site.games | sort: "order" %}
{% for game in sorted_games %}
  <a href="{{ game.url | relative_url }}" class="game-tile">

    <div class="game-head">
      <div class="game-icon">
        {% if game.icon %}
          <i class="{{ game.icon }}"></i>
        {% else %}
          <i class="fas fa-gamepad"></i>
        {% endif %}
      </div>

      <div>
        <p class="game-title">{{ game.title }}</p>
        <p class="game-desc">
          {{ game.description | default: "A Sims 4 themed mini game." }}
        </p>
      </div>
    </div>

    <div class="game-meta">
      {% if game.mode %}
        <span class="game-pill">{{ game.mode }}</span>
      {% endif %}
      {% if game.difficulty %}
        <span class="game-pill">Difficulty: {{ game.difficulty }}</span>
      {% endif %}
      {% if game.time %}
        <span class="game-pill">{{ game.time }}</span>
      {% endif %}
    </div>

  </a>
{% endfor %}
</div>
