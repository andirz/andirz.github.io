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
    gap:18px;
    margin-top:1.5rem;
  }
  @media (min-width:768px){
    .game-grid{ grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width:992px){
    .game-grid{ grid-template-columns: repeat(3, 1fr); }
  }

  .game-tile{
    display:block;
    height:100%;
    border-radius:18px;
    border:1px solid var(--border-color, rgba(0,0,0,0.08));
    background: var(--bg-secondary, #fff);
    padding:18px;
    text-decoration:none;
    box-shadow:0 10px 25px -12px rgba(0,0,0,0.12);
    transition: transform .08s ease, box-shadow .08s ease, border-color .08s ease;
  }
  .game-tile:hover{
    transform: translateY(-2px);
    box-shadow:0 18px 35px -16px rgba(0,0,0,0.20);
    border-color: rgba(59,130,246,.35);
  }

  .game-head{
    display:flex;
    gap:12px;
    align-items:flex-start;
  }

  .game-icon{
    width:46px;
    height:46px;
    border-radius:14px;
    display:grid;
    place-items:center;
    background: rgba(59,130,246,0.10);
    border:1px solid rgba(59,130,246,0.18);
    flex:0 0 auto;
  }
  .game-icon i{
    font-size:20px;
    color: var(--link-color, #2563eb);
  }

  .game-title{
    font-weight:800;
    margin:0;
    line-height:1.2;
    color: var(--link-color, #2563eb);
    font-size:1.05rem;
  }

  .game-desc{
    margin-top:6px;
    font-size:.92rem;
    color: rgba(15,23,42,.72);
  }

  .game-meta{
    margin-top:14px;
    display:flex;
    gap:8px;
    flex-wrap:wrap;
  }

  .game-pill{
    font-size:.78rem;
    font-weight:700;
    padding:6px 10px;
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
        <span class="game-pill">Time: {{ game.time }}</span>
      {% endif %}
    </div>
  </a>
{% endfor %}
</div>
