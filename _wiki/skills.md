---
layout: page
title: Skills
icon: "fas fa-graduation-cap"
order: 2
description: "A comprehensive guide to all Sims 4 skills, including Cheat IDs, Pack Codes, and Max Levels."
---

<style>
  #skillTable tbody tr:nth-child(even) { background-color: rgba(128, 128, 128, 0.03); }
  #skillTable tbody tr:hover {
    background-color: rgba(128, 128, 128, 0.08) !important;
    outline: 1.5px solid var(--text-muted);
    outline-offset: -1.5px;
  }
  .skill-icon-container {
    width: 44px; height: 44px;
    display: flex; align-items: center; justify-content: center;
    background: var(--bg-secondary);
    border-radius: 10px; border: 1px solid var(--border-color);
    margin: 0 auto; position: relative;
  }
  .skill-icon-fa { 
    font-size: 1.4rem; 
    color: var(--accent-color); 
    position: absolute;
    transition: all 0.2s ease;
  }
  .skill-icon-img { width: 34px; height: 34px; object-fit: contain; position: relative; z-index: 2; }
  
  .age-icon {
    font-size: 1.1rem;
    color: var(--text-muted);
    cursor: help;
  }
</style>

# The Sims 4 Skills List

Below is a complete list of all skills available in The Sims 4. Use `stats.set_skill_level [Skill_ID] [Level]`.

<div class="status-table-container" style="overflow-x: auto; margin-top: 25px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <table id="skillTable" style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary);">
    <thead>
      <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
        <th style="padding: 12px; width: 50px; text-align: center;">#</th>
        <th style="padding: 12px; width: 70px; text-align: center;">Icon</th>
        <th onclick="sortTable(2)" style="padding: 12px; cursor: pointer;">Skill Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(3)" style="padding: 12px; cursor: pointer; text-align: center;">Age <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(4)" style="padding: 12px; cursor: pointer;">Pack ID <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(5)" style="padding: 12px; cursor: pointer;">Pack Name <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(6)" style="padding: 12px; cursor: pointer;">Skill ID <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
        <th onclick="sortTable(7)" style="padding: 12px; cursor: pointer; text-align: center;">Max <i class="fas fa-sort" style="font-size: 0.7rem; opacity: 0.3;"></i></th>
      </tr>
    </thead>
    <tbody>
      {% assign skills = "acting|fas fa-theater-masks|Acting|Adult|EP06|Get Famous|Major_Acting|10,archaeology|fas fa-monument|Archaeology|Adult|GP06|Jungle Adventure|Major_Archaeology|10,baking|fas fa-cookie-bite|Baking|Adult|EP01|Get to Work|Major_Baking|10,bowling|fas fa-bowling-ball|Bowling|Adult|SP10|Bowling Night|Skill_Bowling|5,charisma|fas fa-glasses|Charisma|Adult|BG|Base Game|Major_Charisma|10,comedy|fas fa-grin-tears|Comedy|Adult|BG|Base Game|Major_Comedy|10,cooking|fas fa-utensils|Cooking|Adult|BG|Base Game|Major_HomestyleCooking|10,cross_stitch|fas fa-certificate|Cross-stitch|Adult|EP11|Cottage Living|Skill_CrossStitch|10,dancing|fas fa-shoe-prints|Dancing|Adult|EP02|Get Together|Minor_Dancing|5,dj_mixing|fas fa-compact-disc|DJ Mixing|Adult|EP02|Get Together|Major_DJ|10,entrepreneur|fas fa-briefcase|Entrepreneur|Adult|EP12|High School Years|Major_Entrepreneur|5,equestrian_skill|fas fa-horse|Equestrian Skill|Adult|EP14|Horse Ranch|AdultMajor_EquestrianSkill|10,fabrication|fas fa-tools|Fabrication|Adult|EP09|Eco Lifestyle|AdultMajor_Fabrication|10,fishing|fas fa-fish|Fishing|Adult|BG|Base Game|Major_Fishing|10,fitness|fas fa-dumbbell|Fitness|Adult|BG|Base Game|Skill_Fitness|10,flower_arranging|fas fa-seedling|Flower Arranging|Adult|EP05|Seasons|AdultMajor_FlowerArranging|10,gardening|fas fa-leaf|Gardening|Adult|BG|Base Game|Major_Gardening|10,gemology|fas fa-gem|Gemology|Adult|SP49|Crystal Creations|Major_Gemology|10,gourmet_cooking|fas fa-concierge-bell|Gourmet Cooking|Adult|BG|Base Game|Major_GourmetCooking|10,guitar|fas fa-guitar|Guitar|Adult|BG|Base Game|Major_Guitar|10,handiness|fas fa-wrench|Handiness|Adult|BG|Base Game|Major_Handiness|10,herbalism|fas fa-mortar-pestle|Herbalism|Adult|GP01|Outdoor Retreat|Major_Herbalism|10,juice_fizzing|fas fa-bottle-water|Juice Fizzing|Adult|EP09|Eco Lifestyle|AdultMinor_JuiceFizzing|5,knitting|fas fa-socks|Knitting|Adult|SP17|Nifty Knitting|Major_Knitting|10,logic|fas fa-chess-knight|Logic|Adult|BG|Base Game|Major_Logic|10,media_production|fas fa-video|Media Production|Adult|EP06|Get Famous|Minor_Mediaproduction|5,medium|fas fa-ghost|Medium|Adult|SP18|Paranormal|Minor_Medium|5,mischief|fas fa-user-secret|Mischief|Adult|BG|Base Game|Major_Mischief|10,mixology|fas fa-cocktail|Mixology|Adult|BG|Base Game|Major_Bartending|10,nectar_making|fas fa-wine-bottle|Nectar Making|Adult|EP14|Horse Ranch|AdultMinor_RanchNectar|5,painting|fas fa-palette|Painting|Adult|BG|Base Game|Major_Painting|10,parenting|fas fa-baby|Parenting|Adult|GP05|Parenthood|Major_Parenting|10,pet_training|fas fa-dog|Pet Training|Adult|EP04|Cats & Dogs|Skill_Dog|5,photography|fas fa-camera|Photography|Adult|BG|Base Game|Major_Photography|5,piano|fas fa-keyboard|Piano|Adult|BG|Base Game|Major_Piano|10,pipe_organ|fas fa-music|Pipe Organ|Adult|GP04|Vampires|Major_PipeOrgan|10,pottery|fas fa-hands|Pottery|Adult|EP18|Life & Death|Major_Pottery|10,programming|fas fa-code|Programming|Adult|BG|Base Game|Major_Programming|10,research_debate|fas fa-microphone-alt|Research & Debate|Adult|EP08|Discover University|Major_Research|10,robotics|fas fa-robot|Robotics|Adult|EP08|Discover University|Major_Robotic|10,rock_climbing|fas fa-mountain|Rock Climbing|Adult|EP10|Snowy Escape|Major_Rockclimbing|10,rocket_science|fas fa-rocket|Rocket Science|Adult|BG|Base Game|Major_RocketScience|10,romance|fas fa-heart|Romance|Adult|EP16|Lovestruck|Major_Romance|10,local_culture|fas fa-globe-americas|Selvadoradian Culture|Adult|GP06|Jungle Adventure|Minor_LocalCulture|5,singing|fas fa-microphone|Singing|Adult|EP03|City Living|Major_Singing|10,skiing|fas fa-skiing|Skiing|Adult|EP10|Snowy Escape|Major_Skiing|10,snowboarding|fas fa-snowboarding|Snowboarding|Adult|EP10|Snowy Escape|Major_Snowboarding|10,tattooing|fas fa-pen-fancy|Tattooing|Adult|EP18|Life & Death|Major_Tattooing|10,vampire_lore|fas fa-vampire|Vampire Lore|Adult|GP04|Vampires|VampireLore|15,veterinarian|fas fa-stethoscope|Veterinarian|Adult|EP04|Cats & Dogs|Major_Vet|10,video_gaming|fas fa-gamepad|Video Gaming|Adult|BG|Base Game|Major_VideoGaming|10,violin|fas fa-music|Violin|Adult|BG|Base Game|Major_Violin|10,wellness|fas fa-spa|Wellness|Adult|GP02|Spa Day|Major_Wellness|10,writing|fas fa-pen-nib|Writing|Adult|BG|Base Game|Major_Writing|10,child_creativity|fas fa-paint-brush|Creativity|Child|BG|Base Game|Skill_Child_Creativity|10,child_mental|fas fa-puzzle-piece|Mental|Child|BG|Base Game|Skill_Child_Mental|10,child_motor|fas fa-running|Motor|Child|BG|Base Game|Skill_Child_Motor|10,child_social|fas fa-users|Social|Child|BG|Base Game|Skill_Child_Social|10,toddler_communication|fas fa-comment|Communication|Toddler|BG|Base Game|Toddler_Communication|5,toddler_imagination|fas fa-cloud|Imagination|Toddler|BG|Base Game|Toddler_Imagination|5,toddler_movement|fas fa-child|Movement|Toddler|BG|Base Game|Toddler_Movement|5,toddler_potty|fas fa-toilet|Potty|Toddler|BG|Base Game|Toddler_Potty|3,toddler_thinking|fas fa-lightbulb|Thinking|Toddler|BG|Base Game|Toddler_Thinking|5" | split: "," %}

      {% for skill_row in skills %}
        {% assign details = skill_row | split: "|" %}
        {% assign img_path = "/assets/img/skills/" | append: details[0] | append: ".png" %}
        
        {% assign img_exists = false %}
        {% for static_file in site.static_files %}
          {% if static_file.path == img_path %}
            {% assign img_exists = true %}
            {% break %}
          {% endif %}
        {% endfor %}

        <tr style="border-bottom: 1px solid var(--border-color);">
          <td style="padding: 8px; text-align: center; color: var(--text-muted); font-size: 0.8rem; font-family: monospace;">{{ forloop.index }}</td>
          
          <td style="padding: 8px; text-align: center;">
             <div class="skill-icon-container">
              <i class="{{ details[1] }} skill-icon-fa" {% if img_exists %}style="opacity:0.25; font-size: 1.1rem;"{% endif %}></i>
              {% if img_exists %}
                <img src="{{ img_path | relative_url }}" alt="{{ details[2] }}" class="skill-icon-img">
              {% endif %}
            </div>
          </td>

          <td style="padding: 12px; font-weight: 700; color: var(--text-color); font-size: 1.05rem;">{{ details[2] }}</td>
          
          <td style="padding: 12px; text-align: center;">
            {% if details[3] == "Adult" %}
              <i class="fas fa-accessibility age-icon" title="Adult"></i>
            {% elsif details[3] == "Child" %}
              <i class="fas fa-child age-icon" title="Child"></i>
            {% elsif details[3] == "Toddler" %}
              <i class="fas fa-baby age-icon" title="Toddler"></i>
            {% endif %}
          </td>

          <td style="padding: 12px; font-size: 0.95rem;">{{ details[4] }}</td>
          <td style="padding: 12px; font-size: 0.95rem; color: var(--text-muted);">{{ details[5] }}</td>
          <td style="padding: 12px;"><code style="font-size: 0.85rem;">{{ details[6] }}</code></td>
          <td style="padding: 12px; text-align: center; font-weight: 700;">{{ details[7] }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<script>
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("skillTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      var xValue = x.innerText.toLowerCase();
      var yValue = y.innerText.toLowerCase();
      
      // Nummerische Sortierung für die Max-Spalte (Index 7)
      if (n === 7) {
        if (dir == "asc") { if (parseInt(xValue) > parseInt(yValue)) { shouldSwitch = true; break; } }
        else if (dir == "desc") { if (parseInt(xValue) < parseInt(yValue)) { shouldSwitch = true; break; } }
      } else {
        if (dir == "asc") { if (xValue > yValue) { shouldSwitch = true; break; } }
        else if (dir == "desc") { if (xValue < yValue) { shouldSwitch = true; break; } }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") { dir = "desc"; switching = true; }
    }
  }
}
</script>
