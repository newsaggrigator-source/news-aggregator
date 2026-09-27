const newsSources = {
    sudan: {
        language: "ar",
        title: "أخبار السودان",
        feed: "https://alikhbariya.net/feeds/countries/sd.xml"
    },

    ethiopia: {
        language: "en",
        title: "Ethiopia News",
        feed: "https://feeds.bbci.co.uk/news/topics/c302m85qe3yt/rss.xml"
    },

    somalia: {
        language: "en",
        title: "Somalia News",
        feed: "https://feeds.bbci.co.uk/news/topics/cnx753jejqwt/rss.xml"
    }
};

console.log("Sudan News:", newsSources.sudan);
console.log("Ethiopia News:", newsSources.ethiopia);
console.log("Somalia News:", newsSources.somalia);
