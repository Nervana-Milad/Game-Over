"use strict";
export class UI {
  displayGames(games) {
    let myGames = "";
    for (let i = 0; i < games.length; i++) {
      myGames += `
                <div class="col">
                  <div
                    class="card h-100 bg-transparent"
                    data-id="${games[i].id}"
                    role="button"
                  >
                    <div class="card-body">
                      <figure class="position-relative">
                        <img
                          src="${games[i].thumbnail}"
                          alt=""
                          class="object-fit-cover h-100 card-img-top"
                        />
                      </figure>
                      <figcaption>
                        <div class="justify-content-between hstack">
                          <h3 class="small h6 text-white">${games[i].title}</h3>
                          <span class="badge text-bg-primary p-2 text-white"
                            >Free</span
                          >
                        </div>
                        <p
                          class="card-text small text-center opacity-50 text-white"
                        >
                          ${games[i].short_description}
                        </p>
                      </figcaption>
                    </div>
                    <div class="card-footer small hstack justify-content-between">
                      <span class="badge badge-bg">${games[i].genre}</span>
                      <span class="badge badge-bg">${games[i].platform}</span>
                    </div>
                  </div>
                </div>`;
    }
    document.getElementById("gameData").innerHTML = myGames;
  }

  displayDetails(datag) {
    let data = ``;
    const details = `
    <div class="col-md-4">
      <img src="${datag.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${datag.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${datag.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${datag.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${datag.status}</span> </p>
      <p class="small">${datag.description}</p>
      <a class="btn btn-outline-info" target="_blank" href="${datag.game_url}">Show Game</a>
   </div>
      `;

    document.getElementById("info-details").innerHTML = details;
  }
}
