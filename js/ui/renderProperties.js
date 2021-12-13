export function renderArticles(render) {

    const articlesContainer = document.querySelector("ul");
    articlesContainer.innerHTML = "";


    render.forEach(function (article){
        articlesContainer.innerHTML += `<div class="card">
                                            <li><span> Title: ${article.title}</span></li>
                                            <li><span> Summary: ${article.summary}</span></li>
                                            <li><span> Author: ${article.author}</span></li>
                                        </div>`;
    });
};