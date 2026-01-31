---
layout: page
title: Smart Core Documentation
description: Technical reference for Modders using the Smart Core Script.
icon: fas fa-book-code
order: 10
---

<style>
  /* Container für API-Endpunkte */
  .api-block {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
  }

  .api-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    background: var(--accent-color-transparent);
    color: var(--accent-color);
    padding: 4px 8px;
    border-radius: 5px;
    font-weight: 700;
  }

  /* Styling für die Tuning-Struktur */
  .tuning-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    font-size: 0.9rem;
  }

  .tuning-table th {
    text-align: left;
    padding: 10px;
    border-bottom: 2px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .tuning-table td {
    padding: 12px 10px;
    border-bottom: 1px solid var(--border-color);
    vertical-align: top;
  }

  .type-label {
    font-family: 'JetBrains Mono', monospace;
    color: #d63384; /* Klassische Farbe für Typen */
    font-size: 0.8rem;
  }
</style>

## Overview

If you want to use **Smart Core Script** (SCS) to inject data into the game, you can use the following custom tunings. These are designed to be as close to EA's original TDESC format as possible.

---

<div class="api-block">
  <h3><span class="api-tag">Injectable</span> Snippet: <code>andirz:smart_injector</code></h3>
  <p>This snippet allows you to inject interaction, loot, or states into existing game objects without overriding them.</p>

  <table class="tuning-table">
    <thead>
      <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>target_instance</code></td>
        <td><span class="type-label">TunableReference</span></td>
        <td>The ID of the target resource (e.g., a Buffet Table or a Sim).</td>
      </tr>
      <tr>
        <td><code>injection_type</code></td>
        <td><span class="type-label">Enum</span></td>
        <td>Defines where to inject. Options: <code>AFFORDANCE</code>, <code>LOOT</code>, <code>STATE</code>.</td>
      </tr>
      <tr>
        <td><code>value</code></td>
        <td><span class="type-label">List</span></td>
        <td>A list of references to be added to the target.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="api-block">
  <h3><span class="api-tag">Example</span> XML Usage</h3>

  ```xml
  <I c="SmartInjector" i="snippet" m="andirz.smart_core" n="example_injection" s="12345">
    <U n="value">
      <T n="target_instance">15053</T>
      <E n="injection_type">AFFORDANCE</E>
      <L n="value">
        <T>98765</T>
      </L>
    </U>
  </I>
