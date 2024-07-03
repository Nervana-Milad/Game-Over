"use strict";

import { UI } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new UI();

    const closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click", () => {
      document.querySelector(".games-sec").classList.remove("d-none");
      document.querySelector(".details-sec").classList.add("d-none");
    });

    this.getDetails(id);
  }

  async getDetails(gameId) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4eb1357b69msh8c5cc211a218740p1be16ajsnccd0a0ecb110",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
      options
    );

    const result = await api.json();
    this.ui.displayDetails(result);
    loading.classList.add("d-none");
  }

  showGameDetails(id) {
    const details = new Details(id);
    document.querySelector(".games-sec").classList.add("d-none");
    document.querySelector(".details-sec").classList.remove("d-none");
  }
}
