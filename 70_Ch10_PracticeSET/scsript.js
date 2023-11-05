let url = "https://kontests.net/api/v1/all";
let response = fetch(url);

response
  .then((value) => {
    return value.json();
  })
  .then((contest) => {
    console.log(contest);
    ihtml = "";
    for (item in contest) {
      console.log(contest[item]);
      ihtml += `
      <div class="card" style="width: 22rem;">
        <img src="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">Status is ${contest[item].status}</p>
        <p class="card-text">In 24 Hours : ${contest[item].in_24_hours}</p>
        <p class="card-text">site is ${contest[item].site}</p>
        <p>Started at: ${contest[item].start_time}</p>
        <p>Ended at: ${contest[item].end_time}</p>
        <a href="${contest[item].url}" class="btn btn-primary">Visit Here</a>
        </div>
     </div>`;
    }
    cardContainer.innerHTML = ihtml;
  });
