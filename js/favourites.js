import { renderArticles } from "./ui/renderProperties.js";
import { displayMessage } from "./components/displayMessage.js";
import messages from "./ui/messages.js";

renderArticles(null, true);

const clearBtn = document.querySelector("button");


clearBtn.addEventListener("click", clearStorage); 

function clearStorage () {

    const articlesContainer = document.querySelector("ul");
    
    localStorage.clear();

    displayMessage("warning", messages.emptyFav, "ul");
        
};