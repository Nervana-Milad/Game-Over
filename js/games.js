"use strict";

import { UI } from "./ui.js";
import { Details } from "./details.js";

export class Games {
  constructor() {
    this.ui = new UI();
    this.details = new Details();
    this.getGames("mmorpg");
    const links = document.querySelectorAll(".nav-menu a");

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => {
        document.querySelector(".nav-menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    }
  }

  async getGames(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4eb1357b69msh8c5cc211a218740p1be16ajsnccd0a0ecb110",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    const data = await api.json();
    this.ui.displayGames(data);
    this.getGameDetails();
    loading.classList.add("d-none");
  }

  getGameDetails() {
    const allGames = document.querySelectorAll(".card");
    for (let i = 0; i < allGames.length; i++) {
      allGames[i].addEventListener("click", () => {
        const gameid = allGames[i].dataset.id;
        this.details.showGameDetails(gameid);
      });
    }
  }
}
