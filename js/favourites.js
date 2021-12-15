import { renderArticles } from "./ui/renderProperties.js";

renderArticles(null, true);

const clearBtn = document.querySelector("button");
const articlesContainer = document.querySelector("ul");

clearBtn.addEventListener("click", clearStorage); 

function clearStorage () {
    const clear = localStorage.clear();

    if (clear) {
        articlesContainer.innerHTML = "";
    }

}