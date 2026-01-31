---
layout: page
title: Smart Core API Browser
icon: fas fa-microchip
---

<style>
  #api-container { display: flex; height: 85vh; border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; background: var(--bg-primary); }
  .api-nav { width: 350px; border-right: 1px solid var(--border-color); display: flex; flex-direction: column; background: var(--bg-secondary); }
  .search-box { padding: 15px; border-bottom: 1px solid var(--border-color); }
  #api-search { width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-color); }
  .api-list { overflow-y: auto; flex-grow: 1; }
  .api-item { padding: 12px 20px; cursor: pointer; border-bottom: 1px solid var(--border-color); transition: 0.2s; }
  .api-item:hover { background: rgba(128, 128, 128, 0.1); }
  .api-item.active { border-left: 4px solid var(--accent-color); background: rgba(0, 123, 255, 0.05); }
  .api-item .type-label { font-size: 0.65rem; text-transform: uppercase; font-weight: bold; color: var(--accent-color); opacity: 0.8; }
  
  .api-content { flex-grow: 1; padding: 40px; overflow-y: auto; }
  .code-block { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; line-height: 1.5; margin-top: 20px; border: 1px solid #333; }
  .attr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px; }
  .attr-item { background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 15px; border-radius: 8px; }
  .xml-tag { color: #569cd6; } .xml-attr { color: #9cdcfe; } .xml-val { color: #ce9178; }
</style>

<div id="api-container">
  <div class="api-nav">
    <div class="search-box">
      <input type="text" id="api-search" placeholder="Search interactions & snippets...">
    </div>
    <div id="api-list" class="api-list"></div>
  </div>
  <div class="api-content">
    <div id="api-welcome" style="text-align:center; margin-top:100px; opacity:0.3;">
       <i class="fas fa-project-diagram" style="font-size: 5rem;"></i>
       <h2>Smart Core API Reference</h2>
       <p>Select a class from the sidebar to see the tuning structure.</p>
    </div>
    <div id="api-detail" style="display:none;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h1 id="node-name" style="margin:0;"></h1>
        <button onclick="copyXML()" style="background:var(--accent-color); color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; font-size:0.8rem;">
          <i class="fas fa-copy"></i> Copy XML
        </button>
      </div>
      <p id="node-module" style="font-family:monospace; color:var(--accent-color); margin-top:10px;"></p>
      <p id="node-desc" style="font-size:1.1rem; margin-top:20px; line-height:1.6;"></p>
      
      <h3>Tunable Fields</h3>
      <div id="node-attrs" class="attr-grid"></div>
      
      <h3>Tuning Example</h3>
      <div class="code-block"><pre id="node-xml" style="margin:0;"></pre></div>
    </div>
  </div>
</div>

<script>
const smartCoreData = [
  {
    id: "trait_picker",
    name: "SmartCoreTraitPickerSuperInteraction",
    type: "Interaction",
    module: "andirz_corescript.interactions.traitpicker",
    desc: "A powerful picker that allows Sims to select traits. Supports filtering by TraitType and custom replacement logic.",
    attrs: [
      { n: "is_add", t: "Tunable (bool)", d: "If true, selected trait is added. If false, it's removed." },
      { n: "continuation", t: "TunableContinuation", d: "Interaction to push after a trait is picked." }
    ],
    xml: `<V n="_interactable" t="interaction_picker">\n  <U n="interaction_picker">\n    <V n="content" t="trait_picker">\n      <U n="trait_picker">\n        <T n="is_add">True</T>\n      </U>\n    </V>\n  </U>\n</V>`
  },
  {
    id: "obj_info",
    name: "ImmediateSuperInteraction",
    type: "Interaction",
    module: "andirz_corescript.interactions.object_info",
    desc: "Provides a detailed HTML-based information dump for any object in the game, including components and states.",
    attrs: [
      { n: "button_text", t: "LocalizedString", d: "Text for the 'Open Info' button in the notification." }
    ],
    xml: `<I c="SmartObjectInfoImmediateInteraction" i="interaction" m="andirz_corescript.interactions.object_info" n="andirz:object_info" s="123">\n  <T n="button_text">0x123456</T>\n</I>`
  },
  {
    id: "config_picker",
    name: "SmartCoreConfigPickerSuperInteraction",
    type: "Interaction",
    module: "andirz_corescript.interactions.configpicker",
    desc: "A picker that directly modifies Smart Core configuration snippets based on player choice.",
    attrs: [
      { n: "config_reference", t: "TunableReference", d: "The config snippet to be modified." },
      { n: "operations", t: "TunableList", d: "List of actions to perform on the config." }
    ],
    xml: `<I c="SmartCoreConfigPickerSuperInteraction" i="interaction" m="andirz_corescript.interactions.configpicker" n="example_picker" s="456">\n  <V n="config_reference" t="enabled">\n    <T n="enabled">98765</T>\n  </V>\n</I>`
  }
];

function highlight(xml) {
  return xml.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/(&lt;[\/]?[\w:]+)/g, '<span class="xml-tag">$1</span>')
    .replace(/([\w:]+)=/g, '<span class="xml-attr">$1</span>=')
    .replace(/"([^"]*)"/g, '<span class="xml-val">"$1"</span>');
}

function selectNode(id) {
  const data = smartCoreData.find(d => d.id === id);
  document.getElementById('api-welcome').style.display = 'none';
  document.getElementById('api-detail').style.display = 'block';
  document.getElementById('node-name').innerText = data.name;
  document.getElementById('node-module').innerText = `Module: ${data.module}`;
  document.getElementById('node-desc').innerText = data.desc;
  document.getElementById('node-xml').innerHTML = highlight(data.xml);
  
  const grid = document.getElementById('node-attrs');
  grid.innerHTML = data.attrs.map(a => `
    <div class="attr-item">
      <div style="font-weight:bold; font-family:monospace;">${a.n}</div>
      <div style="color:var(--accent-color); font-size:0.75rem; margin-bottom:5px;">${a.t}</div>
      <div style="font-size:0.85rem; opacity:0.8;">${a.d}</div>
    </div>
  `).join('');
}

function renderList(filter = "") {
  const container = document.getElementById('api-list');
  container.innerHTML = smartCoreData
    .filter(d => d.name.toLowerCase().includes(filter.toLowerCase()))
    .map(d => `<div class="api-item" onclick="selectNode('${d.id}')">
      <div class="type-label">${d.type}</div>
      <div style="font-weight:bold; font-size:0.9rem;">${d.name}</div>
    </div>`).join('');
}

function copyXML() {
  const text = document.getElementById('node-xml').innerText;
  navigator.clipboard.writeText(text);
  alert("XML copied to clipboard!");
}

document.getElementById('api-search').oninput = (e) => renderList(e.target.value);
renderList();
</script>
