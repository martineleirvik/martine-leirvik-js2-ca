import { makeFavourites } from "./favourites.js";
import { getFav, savetoFavourites } from "../utils/localStorage.js";

export function renderArticles(render) {

    const articlesContainer = document.querySelector("ul");
    articlesContainer.innerHTML = "";


    render.forEach(function (article){
        articlesContainer.innerHTML += `<div class="card">
                                            <li>Title: ${article.title}</li>
                                            <li>Summary: ${article.summary}</li>
                                            <li>Author: ${article.author}</li>
                                            <i class="far fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
                                        </div>`;
    });

    makeFavourites();   

};

