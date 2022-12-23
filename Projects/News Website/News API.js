//https://newsapi.org/

let APIkey = '3467d8394b764d0db83f60a31372864a';

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIkey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let news = JSON.parse(this.responseText);
        let newsArticles = news.articles;
        let newsHTML = '';
        newsArticles.forEach(element => {
            let body = '';
            if (element['content'] != null) {
                body = element['content'];
            } else {
                body = element['description'];
            }
            let html = `<article>
                            <h2>${element['title']}</h2>
                            <div class="align"><img src="${element['urlToImage']}" alt="Image Not Found"></div>
                            <p>${body}</p>
                            <div class="align"><a href="${element['url']}">Read More - ${element['source']['name']}</a></div>
                        </article>`;
            newsHTML += html;
        });
        latestNews.innerHTML = newsHTML;
    } else {
        console.log('Some Error');
    }
}
xhr.send();

//News Category Function
function news(newsCategory) {
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&apiKey=${APIkey}`, true);
    xhr.send();
}