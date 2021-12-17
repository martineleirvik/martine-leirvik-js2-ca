import { displayMessage} from "../components/displayMessage.js";
import { getFav, savetoFavourites } from "../utils/localStorage.js";
import messages from "./messages.js";

export function renderArticles(render, isFavourite = false) {

    const favourite = getFav();

    if (isFavourite) {
        render = favourite;
    }

    if ( render.length === 0){
        return displayMessage("warning", isFavourite ? messages.emptyFav : messages.noResults, "ul");
    }

    const articlesContainer = document.querySelector("ul");

    articlesContainer.innerHTML = "";

    render.forEach(function (article){
        const articleIsInFav = favourite.find(function (item) {
            return item.id == article.id;
        });

        const heartClass = articleIsInFav ? "fas" : "far";

        articlesContainer.innerHTML += `<div class="card">
                                            <li>Title: ${article.title}</li>
                                            <li>Summary: ${article.summary}</li>
                                            <li>Author: ${article.author}</li>
                                            <i class="${heartClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-summary="${article.summary}" data-author="${article.author}"></i>
                                        </div>`;
    });


    const favoButton = document.querySelectorAll(".card i");

    favoButton.forEach((btn) => {
        btn.addEventListener("click", handleClick);
    });

    function handleClick(event) {
        console.log(event);
        event.target.classList.toggle("fas");
        event.target.classList.toggle("far");

        const { id, title, summary, author } = this.dataset;

        const favourite = getFav();

        const articlesIsInFav = favourite.find(function (item){
            return item.id === id;
        });

        if (!articlesIsInFav) {
            const addArticle = { id: id, title: title, summary: summary, author: author };
            favourite.push(addArticle);
            savetoFavourites(favourite);
        } else {
            const newFavList = favourite.filter((fav)=> fav.id !== id);
            savetoFavourites(newFavList);
        }
        if (isFavourite) {
            renderArticles(null, true)
        }
    }
};