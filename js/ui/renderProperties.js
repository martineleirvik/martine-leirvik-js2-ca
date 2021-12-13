export function renderArticles(render) {

    const articlesContainer = document.querySelector("ul");
    articlesContainer.innerHTML = "";


    render.forEach(function (article){
        articlesContainer.innerHTML += `<div class="card">
                                            <li>Title: ${article.title} </li>
                                            <li>Summary: ${article.summary}</li>
                                            <li>Author: ${article.author}</li>
                                            <i class="far fa-heart"></i>
                                        </div>`;
    });
};