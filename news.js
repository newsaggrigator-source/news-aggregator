async function loadNews() {
    const container = document.getElementById("sudan-news");

    try {
        const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent(
                "https://news.google.com/rss/search?q=Sudan&hl=ar&gl=SD&ceid=SD:ar"
            )
        );

        const data = await response.json();

        container.innerHTML = "";

        data.items.slice(0, 6).forEach(article => {

            const card = document.createElement("article");
            card.className = "card";

            card.innerHTML = `
                <span class="category">السودان</span>
                <h2>${article.title}</h2>
                <p>${article.pubDate}</p>
                <a href="${article.link}" target="_blank">
                    اقرأ الخبر
                </a>
            `;

            container.appendChild(card);
        });

    } catch (error) {

        container.innerHTML = `
            <article class="card">
                <h2>تعذر تحميل الأخبار</h2>
                <p>سنحاول الاتصال بمصادر الأخبار مرة أخرى.</p>
            </article>
        `;

        console.error(error);
    }
}

loadNews();
async function loadEthiopiaNews() {
    const card = document.querySelector("#ethiopia-news h2");

    try {
        const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent(
                "https://feeds.bbci.co.uk/news/topics/cwlw3xz047jt/rss.xml"
            )
        );

        const data = await response.json();

        if (data.items && data.items.length > 0) {
            card.textContent = data.items[0].title;
        }

    } catch (error) {
        console.error("Ethiopia news error:", error);
    }
}

loadEthiopiaNews();
