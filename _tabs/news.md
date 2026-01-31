---
layout: page
title: World News
icon: fas fa-newspaper
order: 3
---

<style>
  .news-aggregator {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .news-card {
    background: var(--main-bg);
    border: 2px solid var(--card-border-color);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    position: relative;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  }

  .news-card:hover {
    transform: translateY(-5px);
    border-color: #0076ff;
  }

  .source-badge {
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    color: #0076ff;
    background: var(--shimmer-color);
    padding: 4px 10px;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 10px;
  }

  .news-title {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 1.1rem;
    line-height: 1.3;
    margin-bottom: 10px;
    color: var(--text-color);
  }

  .news-date {
    font-size: 0.8rem;
    color: var(--text-muted-color);
    margin-top: auto;
    padding-top: 15px;
  }

  .loading-spinner {
    text-align: center;
    padding: 50px;
    font-family: 'Nunito', sans-serif;
  }
</style>

<div id="news-loader" class="loading-spinner">
  <i class="fas fa-circle-notch fa-spin fa-2x mb-3" style="color: #0076ff;"></i>
  <p>Scanning the Sims World for updates...</p>
</div>

<div id="rss-feed-container" class="news-aggregator"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // The 3 sources you requested
    const feeds = [
        'https://simscommunity.info/feed/',
        'https://www.ea.com/en-gb/games/the-sims/the-sims-4/news/feed',
        'https://simsvip.com/feed/'
    ];

    const container = document.getElementById('rss-feed-container');
    const loader = document.getElementById('news-loader');
    
    async function fetchAllNews() {
        try {
            const allItems = [];

            for (const url of feeds) {
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
                const data = await response.json();

                if (data.status === 'ok') {
                    data.items.slice(0, 4).forEach(item => {
                        // We add the source name to each item
                        item.sourceName = data.feed.title;
                        allItems.push(item);
                    });
                }
            }

            // Sort by date (newest first)
            allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

            loader.style.display = 'none';
            
            allItems.forEach(item => {
                const pubDate = new Date(item.pubDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric' 
                });

                const card = document.createElement('div');
                card.className = 'news-card';
                card.innerHTML = `
                    <div>
                        <span class="source-badge">${item.sourceName}</span>
                        <h3 class="news-title">${item.title}</h3>
                    </div>
                    <div class="news-date">
                        <i class="far fa-calendar-alt me-1"></i> ${pubDate}
                    </div>
                    <a href="${item.link}" target="_blank" class="stretched-link"></a>
                `;
                container.appendChild(card);
            });

        } catch (error) {
            loader.innerHTML = '<p class="text-danger">Failed to load news. Please try again later.</p>';
            console.error("RSS Error:", error);
        }
    }

    fetchAllNews();
});
</script>
