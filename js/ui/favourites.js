import { renderArticles } from "./renderProperties.js";

export function makeFavourites () {


    const favoButton = document.querySelectorAll(".card i");
    // console.log(favoButton);

    favoButton.forEach((btn) => {
        btn.addEventListener("click", handleClick);
    });

    function handleClick() {
        //console.log(event);
        event.target.classList.toggle("fa");
        event.target.classList.toggle("far");

        const id = event.target.dataset.id;
        const title = event.target.dataset.title;

        console.log("title", title)

        const currentFavs = getExcistingFavs();
        // console.log(currentFavs);

        const article = { id: id, title: title};

        currentFavs.push(article);

        saveFavStorage(currentFavs);

    }


    function getExcistingFavs() {
        const fav = localStorage.getItem("favourites");
        // console.log(fav);

        if(!fav) {
            return [];
        } else {
            return JSON.parse(fav);
        }
    }

    function saveFavStorage() {
        const fav = localStorage.getItem("favourites");
        localStorage.setItem("favourites", JSON.stringify(fav));
    }


}