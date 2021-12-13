import { renderArticles } from "./renderProperties.js";

export function searchArticle(result) {

    const search = document.querySelector(".search");
    const articlesContainer = document.querySelector("ul");

    search.onkeyup = function () {

        console.log(event)

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProp = result.filter(function (card) {
            if (card.title.toLowerCase().includes(searchValue)) {
                return true;
            }
            else {
                articlesContainer.innerHTML += `<p> There are no items under the price you typed.</p>`
            }
        });

        renderArticles(filteredProp);
    };
};

