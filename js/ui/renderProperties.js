import { displayMessage} from "../components/displayMessage.js";
import { getFav, savetoFavourites } from "../utils/localStorage.js";
import messages from "./messages.js";



export function renderArticles(render) {

    const favourite = getFav();

    if ( render.length === 0){
        return displayMessage("warning", messages.noResults, "ul");
    }

    const articlesContainer = document.querySelector("ul");

    articlesContainer.innerHTML = "";

    render.forEach(function (article){
        const articleIsInFav = favourite.find(function (item) {
            return parseInt(item.id) === article.id;
        });

        articlesContainer.innerHTML += `<div class="card">
                                            <li>Title: ${article.title}</li>
                                            <li>Summary: ${article.summary}</li>
                                            <li>Author: ${article.author}</li>
                                            <i class="far fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
                                        </div>`;
    });

    

    const favoButton = document.querySelectorAll(".card i");

    favoButton.forEach((btn) => {
        btn.addEventListener("click", handleClick);
    });

    function handleClick(event) {
        console.log(event);
        event.target.classList.toggle("fa");
        event.target.classList.toggle("far");

        const { id, title } = this.dataset;

        console.log("title", title)

        const favourite = getFav();

        const articlesIsInFav = favourite.find(function (item){
            return item.id === id;
        });

        if (!articlesIsInFav) {
            const addArticle = { id: id, title: title };
            favourite.push(addArticle);
            savetoFavourites(favourite);
        } else {
            const newFavList = favourite.filter((fav)=> fav.id !== id);
            savetoFavourites(newFavList);
        }
    }
};

