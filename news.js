async function loadNews() {
    try {
        const response = await fetch("news.json");
        const data = await response.json();

        // Sudan
        const sudanContainer = document.getElementById("sudan-news");

        if (sudanContainer && data.sudan) {
            sudanContainer.innerHTML = "";

            data.sudan.slice(0, 6).forEach(article => {
                const card = document.createElement("article");
                card.className = "card";

                card.innerHTML = `
                    <span class="category">السودان</span>
                    <h2>${article.title}</h2>
                    <p>${article.date}</p>
                    <a href="${article.link}" target="_blank">اقرأ الخبر</a>
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

                card.innerHTML = `
                    <span class="category">Ethiopia</span>
                    <h2>${article.title}</h2>
                    <p>${article.date}</p>
                    <a href="${article.link}" target="_blank">Read more</a>
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

                card.innerHTML = `
                    <span class="category">Somalia</span>
                    <h2>${article.title}</h2>
                    <p>${article.date}</p>
                    <a href="${article.link}" target="_blank">Read more</a>
                `;

                somaliaContainer.appendChild(card);
            });
        }

    } catch (error) {
        console.error("News loading error:", error);
    }
}

loadNews();
