async function loadNews() {
    try {
        const response = await fetch("news.json?t=" + Date.now());
        const data = await response.json();

        // Top News
        const topNewsContainer = document.getElementById("top-news");

        if (topNewsContainer) {
            topNewsContainer.innerHTML = "";

            const topNews = [];

            if (data.sudan) {
                data.sudan.slice(0, 2).forEach(article => {
                    topNews.push({
                        ...article,
                        category: "السودان",
                        button: "اقرأ الخبر"
                    });
                });
            }

            if (data.ethiopia) {
                data.ethiopia.slice(0, 2).forEach(article => {
                    topNews.push({
                        ...article,
                        category: "Ethiopia",
                        button: "Read more"
                    });
                });
            }

            if (data.somalia) {
                data.somalia.slice(0, 2).forEach(article => {
                    topNews.push({
                        ...article,
                        category: "Somalia",
                        button: "Read more"
                    });
                });
            }

            topNews.slice(0, 6).forEach(article => {
                const card = document.createElement("article");
                card.className = "card";

                card.innerHTML = `
                    ${article.image ? `<img src="${article.image}" alt="" loading="lazy" style="width:100%; height:190px; object-fit:cover; border-radius:12px; margin-bottom:15px;">` : ""}
                    <span class="category">${article.category}</span>
                    <h2 dir="${article.category === "السودان" ? "rtl" : "ltr"}"
                         style="text-align: ${article.category === "السودان" ? "right" : "left"};">
                         ${article.title}
                    </h2>
                    <p class="date">${article.date || ""}</p>
                    <p class="summary"
                        dir="${article.category === "السودان" ? "rtl" : "ltr"}"
                        style="text-align: ${article.category === "السودان" ? "right" : "left"};">
                        ${article.summary || ""}
                     </p>
                    <a class="read-more"
                       href="${article.page_url || article.link}"
                       target="_blank"
                       rel="noopener noreferrer">
                       ${article.button}
                    </a>
                `;

                topNewsContainer.appendChild(card);
            });
        }


        // Sudan
        const sudanContainer = document.getElementById("sudan-news");

        if (sudanContainer && data.sudan) {
            sudanContainer.innerHTML = "";

            data.sudan.slice(0, 6).forEach(article => {
                const card = document.createElement("article");
                card.className = "card";

                card.innerHTML = `
                    ${article.image ? `<img src="${article.image}" alt="" loading="lazy" style="width:100%; height:190px; object-fit:cover; border-radius:12px; margin-bottom:15px;">` : ""}
                    <span class="category">السودان</span>
                    <h2>${article.title}</h2>
                    <p class="date">${article.date || ""}</p>
                    <p class="summary" dir="rtl" style="text-align: right;">${article.summary || ""}</p>
                    <a class="read-more"
                       href="${article.page_url || article.link}"
                       target="_blank"
                       rel="noopener noreferrer">
                       اقرأ الخبر
                    </a>
                `;

                sudanContainer.appendChild(card);
            });
        }


        // Ethiopia
        const ethiopiaContainer = document.getElementById("ethiopia-news");

        if (ethiopiaContainer && data.ethiopia) {
            ethiopiaContainer.innerHTML = "";

            data.ethiopia.slice(0, 6).forEach(article => {
                const card = document.createElement("article");
                card.className = "card";
                card.style.direction = "ltr";
                card.innerHTML = `
                    ${article.image ? `<img src="${article.image}" alt="" loading="lazy" style="width:100%; height:190px; object-fit:cover; border-radius:12px; margin-bottom:15px;">` : ""}
                    <span class="category">Ethiopia</span>
                    <h2 dir="ltr" style="text-align: left;">${article.title}</h2>
                    <p class="date">${article.date || ""}</p>
                    <p class="summary" dir="ltr" style="text-align: left;">${article.summary || ""}</p>
                    <a class="read-more"
                       href="${article.page_url || article.link}"
                       target="_blank"
                       rel="noopener noreferrer">
                       Read more
                    </a>
                `;

                ethiopiaContainer.appendChild(card);
            });
        }


        // Somalia
        const somaliaContainer = document.getElementById("somalia-news");

        if (somaliaContainer && data.somalia) {
            somaliaContainer.innerHTML = "";

            data.somalia.slice(0, 6).forEach(article => {
                const card = document.createElement("article");
                card.className = "card";
                card.style.direction = "ltr";

                card.innerHTML = `
                    ${article.image ? `<img src="${article.image}" alt="" loading="lazy" style="width:100%; height:190px; object-fit:cover; border-radius:12px; margin-bottom:15px;">` : ""}
                    <span class="category">Somalia</span>
                    <h2 dir="ltr" style="text-align: left;">${article.title}</h2>
                    <p class="date">${article.date || ""}</p>
                    <p class="summary" dir="ltr" style="text-align: left;">${article.summary || ""}</p>
                    <a class="read-more"
                       href="${article.page_url || article.link}"
                       target="_blank"
                       rel="noopener noreferrer">
                       Read more
                    </a>
                `;

                somaliaContainer.appendChild(card);
            });
        }


        
        // Sudanese Football
        const footballContainer = document.getElementById("football-news");

        if (footballContainer && data.football) {
            footballContainer.innerHTML = "";

            data.football.slice(0, 6).forEach(article => {
                const card = document.createElement("article");
                card.className = "card";

                card.innerHTML = `
                    ${article.image ? `<img src="${article.image}" alt="" referrerpolicy="no-referrer" onerror="this.style.display='none'" style="width:100%; height:190px; object-fit:cover; border-radius:12px; margin-bottom:15px;">` : ""}
                    <span class="category">رياضة</span>
                    <h2>${article.title}</h2>
                    <p class="date">${article.date || ""}</p>
                    <p class="summary" dir="rtl" style="text-align: right;">${article.summary || ""}</p>
                    <a class="read-more"
                       href="${article.page_url || article.link}"
                       target="_blank"
                       rel="noopener noreferrer">
                       Read more
                    </a>
                `;

                footballContainer.appendChild(card);
            });
        }


    } catch (error) {
        console.error("News loading error:", error);
    }
}

loadNews();
