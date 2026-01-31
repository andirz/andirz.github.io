---
layout: page
title: Skills
icon: "fas fa-graduation-cap"
order: 2
description: "A comprehensive guide to all Sims 4 skills, including Cheat IDs, Pack Codes, and Max Levels."
---

# The Sims 4 Skills List

Below is a complete list of all skills available in The Sims 4. You can use these IDs with the cheat `stats.set_skill_level [Skill_ID] [Level]`.

<div class="status-table-container" style="overflow-x: auto; margin-top: 25px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; background: var(--bg-primary);">
    <thead>
      <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
        <th style="padding: 15px;">Skill Name</th>
        <th style="padding: 15px;">Age</th>
        <th style="padding: 15px;">Pack</th>
        <th style="padding: 15px;">Skill ID</th>
        <th style="padding: 15px; text-align: center;">Max Level</th>
      </tr>
    </thead>
    <tbody>
      {% comment %} Hier ist das Array für die Skills {% endcomment %}
      {% assign skills = "Acting|Adult|EP06|Major_Acting|10,Archaeology|Adult|GP06|Major_Archaeology|10,Baking|Adult|EP01|Major_Baking|10,Bowling|Adult|SP10|Skill_Bowling|5,Charisma|Adult|BG|Major_Charisma|10,Comedy|Adult|BG|Major_Comedy|10,Cooking|Adult|BG|Major_HomestyleCooking|10,Cross-stitch|Adult|EP11|Skill_CrossStitch|10,Dancing|Adult|EP02|Minor_Dancing|5,DJ Mixing|Adult|EP02|Major_DJ|10,Entrepreneur|Adult|EP12|Major_Entrepreneur|5,Equestrian Skill|Adult|EP14|AdultMajor_EquestrianSkill|10,Fabrication|Adult|EP09|AdultMajor_Fabrication|10,Fishing|Adult|BG|Major_Fishing|10,Fitness|Adult|BG|Skill_Fitness|10,Flower Arranging|Adult|EP05|AdultMajor_FlowerArranging|10,Gardening|Adult|BG|Major_Gardening|10,Gemology|Adult|SP49|Major_Gemology|10,Gourmet Cooking|Adult|BG|Major_GourmetCooking|10,Guitar|Adult|BG|Major_Guitar|10,Handiness|Adult|BG|Major_Handiness|10,Herbalism|Adult|GP01|Major_Herbalism|10,Juice Fizzing|Adult|EP09|AdultMinor_JuiceFizzing|5,Knitting|Adult|SP17|Major_Knitting|10,Logic|Adult|BG|Major_Logic|10,Media Production|Adult|EP06|Minor_Mediaproduction|5,Medium|Adult|SP18|Minor_Medium|5,Mischief|Adult|BG|Major_Mischief|10,Mixology|Adult|BG|Major_Bartending|10,Nectar Making|Adult|EP14|AdultMinor_RanchNectar|5,Painting|Adult|BG|Major_Painting|10,Parenting|Adult|GP05|Major_Parenting|10,Pet Training|Adult|EP04|Skill_Dog|5,Photography|Adult|BG|Major_Photography|5,Piano|Adult|BG|Major_Piano|10,Pipe Organ|Adult|GP04|Major_PipeOrgan|10,Pottery|Adult|EP18|Major_Pottery|10,Programming|Adult|BG|Major_Programming|10,Research & Debate|Adult|EP08|Major_Research|10,Robotics|Adult|EP08|Major_Robotic|10,Rock Climbing|Adult|EP10|Major_Rockclimbing|10,Rocket Science|Adult|BG|Major_RocketScience|10,Romance|Adult|EP16|Major_Romance|10,Selvadoradian Culture|Adult|GP06|Minor_LocalCulture|5,Singing|Adult|EP03|Major_Singing|10,Skiing|Adult|EP10|Major_Skiing|10,Snowboarding|Adult|EP10|Major_Snowboarding|10,Tattooing|Adult|EP18|Major_Tattooing|10,Vampire Lore|Adult|GP04|VampireLore|15,Veterinarian|Adult|EP04|Major_Vet|10,Video Gaming|Adult|BG|Major_VideoGaming|10,Violin|Adult|BG|Major_Violin|10,Wellness|Adult|GP02|Major_Wellness|10,Writing|Adult|BG|Major_Writing|10,Creativity|Child|BG|Skill_Child_Creativity|10,Mental|Child|BG|Skill_Child_Mental|10,Motor|Child|BG|Skill_Child_Motor|10,Social|Child|BG|Skill_Child_Social|10,Communication|Toddler|BG|Toddler_Communication|5,Imagination|Toddler|BG|Toddler_Imagination|5,Movement|Toddler|BG|Toddler_Movement|5,Potty|Toddler|BG|Toddler_Potty|3,Thinking|Toddler|BG|Toddler_Thinking|5" | split: "," %}

      {% for skill_row in skills %}
        {% assign details = skill_row | split: "|" %}
        <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;" onmouseover="this.style.backgroundColor='var(--bg-secondary)'" onmouseout="this.style.backgroundColor='transparent'">
          <td style="padding: 15px; font-weight: 600;">{{ details[0] }}</td>
          <td style="padding: 15px;"><span style="background: var(--bg-secondary); padding: 4px 8px; border-radius: 6px; font-size: 0.85rem;">{{ details[1] }}</span></td>
          <td style="padding: 15px;">
            {% if details[2] == "BG" %}
              <span style="font-size: 0.75rem; color: var(--text-muted);">Base Game</span>
            {% else %}
              {% assign pack_info = site.data.packs[details[2]] %}
              <span title="{{ pack_info.en | default: details[2] }}" style="cursor: help; font-size: 0.65rem; background: var(--accent-color-transparent); color: var(--accent-color); padding: 2px 6px; border-radius: 4px; font-weight: 700; border: 1px solid var(--accent-color-transparent);">{{ details[2] }}</span>
            {% endif %}
          </td>
          <td style="padding: 15px;"><code style="font-size: 0.85rem;">{{ details[3] }}</code></td>
          <td style="padding: 15px; text-align: center; font-weight: 700;">{{ details[4] }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
