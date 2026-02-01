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
        <th style="padding: 15px; width: 60px; text-align: center;">#</th>
        <th style="padding: 15px;">Skill Name</th>
        <th style="padding: 15px;">Age</th>
        <th style="padding: 15px;">Pack ID</th>
        <th style="padding: 15px;">Pack Name</th>
        <th style="padding: 15px;">Skill ID</th>
        <th style="padding: 15px; text-align: center;">Max Level</th>
      </tr>
    </thead>
    <tbody>
      {% assign skills = "fas fa-theater-masks|Acting|Adult|EP06|Get Famous|Major_Acting|10,fas fa-monument|Archaeology|Adult|GP06|Jungle Adventure|Major_Archaeology|10,fas fa-cookie|Baking|Adult|EP01|Get to Work|Major_Baking|10,fas fa-bowling-ball|Bowling|Adult|SP10|Bowling Night|Skill_Bowling|5,fas fa-glasses|Charisma|Adult|BG|Base Game|Major_Charisma|10,fas fa-grin-tears|Comedy|Adult|BG|Base Game|Major_Comedy|10,fas fa-user-graduate|Cooking|Adult|BG|Base Game|Major_HomestyleCooking|10,fas fa-certificate|Cross-stitch|Adult|EP11|Cottage Living|Skill_CrossStitch|10,fas fa-shoe-prints|Dancing|Adult|EP02|Get Together|Minor_Dancing|5,fas fa-compact-disc|DJ Mixing|Adult|EP02|Get Together|Major_DJ|10,fas fa-briefcase|Entrepreneur|Adult|EP12|High School Years|Major_Entrepreneur|5,fas fa-horse|Equestrian Skill|Adult|EP14|Horse Ranch|AdultMajor_EquestrianSkill|10,fas fa-tools|Fabrication|Adult|EP09|Eco Lifestyle|AdultMajor_Fabrication|10,fas fa-fish|Fishing|Adult|BG|Base Game|Major_Fishing|10,fas fa-dumbbell|Fitness|Adult|BG|Base Game|Skill_Fitness|10,fas fa-seedling|Flower Arranging|Adult|EP05|Seasons|AdultMajor_FlowerArranging|10,fas fa-leaf|Gardening|Adult|BG|Base Game|Major_Gardening|10,fas fa-gem|Gemology|Adult|SP49|Crystal Creations|Major_Gemology|10,fas fa-concierge-bell|Gourmet Cooking|Adult|BG|Base Game|Major_GourmetCooking|10,fas fa-guitar|Guitar|Adult|BG|Base Game|Major_Guitar|10,fas fa-wrench|Handiness|Adult|BG|Base Game|Major_Handiness|10,fas fa-mortar-pestle|Herbalism|Adult|GP01|Outdoor Retreat|Major_Herbalism|10,fas fa-wine-glass-alt|Juice Fizzing|Adult|EP09|Eco Lifestyle|AdultMinor_JuiceFizzing|5,fas fa-socks|Knitting|Adult|SP17|Nifty Knitting|Major_Knitting|10,fas fa-brain|Logic|Adult|BG|Base Game|Major_Logic|10,fas fa-video|Media Production|Adult|EP06|Get Famous|Minor_Mediaproduction|5,fas fa-ghost|Medium|Adult|SP18|Paranormal|Minor_Medium|5,fas fa-user-secret|Mischief|Adult|BG|Base Game|Major_Mischief|10,fas fa-cocktail|Mixology|Adult|BG|Base Game|Major_Bartending|10,fas fa-wine-bottle|Nectar Making|Adult|EP14|Horse Ranch|AdultMinor_RanchNectar|5,fas fa-palette|Painting|Adult|BG|Base Game|Major_Painting|10,fas fa-baby|Parenting|Adult|GP05|Parenthood|Major_Parenting|10,fas fa-dog|Pet Training|Adult|EP04|Cats & Dogs|Skill_Dog|5,fas fa-camera|Photography|Adult|BG|Base Game|Major_Photography|5,fas fa-keyboard|Piano|Adult|BG|Base Game|Major_Piano|10,fas fa-church|Pipe Organ|Adult|GP04|Vampires|Major_PipeOrgan|10,fas fa-shapes|Pottery|Adult|EP18|Life & Death|Major_Pottery|10,fas fa-code|Programming|Adult|BG|Base Game|Major_Programming|10,fas fa-microphone-alt|Research & Debate|Adult|EP08|Discover University|Major_Research|10,fas fa-robot|Robotics|Adult|EP08|Discover University|Major_Robotic|10,fas fa-mountain|Rock Climbing|Adult|EP10|Snowy Escape|Major_Rockclimbing|10,fas fa-rocket|Rocket Science|Adult|BG|Base Game|Major_RocketScience|10,fas fa-heart|Romance|Adult|EP16|Lovestruck|Major_Romance|10,fas fa-globe-americas|Selvadoradian Culture|Adult|GP06|Jungle Adventure|Minor_LocalCulture|5,fas fa-microphone|Singing|Adult|EP03|City Living|Major_Singing|10,fas fa-skiing|Skiing|Adult|EP10|Snowy Escape|Major_Skiing|10,fas fa-snowboarding|Snowboarding|Adult|EP10|Snowy Escape|Major_Snowboarding|10,fas fa-pen-nib|Tattooing|Adult|EP18|Life & Death|Major_Tattooing|10,fas fa-bat|Vampire Lore|Adult|GP04|Vampires|VampireLore|15,fas fa-stethoscope|Veterinarian|Adult|EP04|Cats & Dogs|Major_Vet|10,fas fa-gamepad|Video Gaming|Adult|BG|Base Game|Major_VideoGaming|10,fas fa-music|Violin|Adult|BG|Base Game|Major_Violin|10,fas fa-spa|Wellness|Adult|GP02|Spa Day|Major_Wellness|10,fas fa-pen-fancy|Writing|Adult|BG|Base Game|Major_Writing|10,fas fa-paint-brush|Creativity|Child|BG|Base Game|Skill_Child_Creativity|10,fas fa-puzzle-piece|Mental|Child|BG|Base Game|Skill_Child_Mental|10,fas fa-running|Motor|Child|BG|Base Game|Skill_Child_Motor|10,fas fa-users|Social|Child|BG|Base Game|Skill_Child_Social|10,fas fa-comment|Communication|Toddler|BG|Base Game|Toddler_Communication|5,fas fa-cloud|Imagination|Toddler|BG|Base Game|Toddler_Imagination|5,fas fa-child|Movement|Toddler|BG|Base Game|Toddler_Movement|5,fas fa-toilet|Potty|Toddler|BG|Base Game|Toddler_Potty|3,fas fa-lightbulb|Thinking|Toddler|BG|Base Game|Toddler_Thinking|5" | split: "," %}

      {% for skill_row in skills %}
        {% assign details = skill_row | split: "|" %}
        <tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;" onmouseover="this.style.backgroundColor='var(--bg-secondary)'" onmouseout="this.style.backgroundColor='transparent'">
          <td style="padding: 15px; text-align: center; color: var(--accent-color); font-size: 1.2rem;"><i class="{{ details[0] }}"></i></td>
          <td style="padding: 15px; font-weight: 600;">{{ details[1] }}</td>
          <td style="padding: 15px;"><span style="background: var(--bg-secondary); padding: 4px 8px; border-radius: 6px; font-size: 0.85rem;">{{ details[2] }}</span></td>
          <td style="padding: 15px; font-size: 0.85rem;">{{ details[3] }}</td>
          <td style="padding: 15px; font-size: 0.85rem;">{{ details[4] }}</td>
          <td style="padding: 15px;"><code style="font-size: 0.85rem;">{{ details[5] }}</code></td>
          <td style="padding: 15px; text-align: center; font-weight: 700;">{{ details[6] }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
