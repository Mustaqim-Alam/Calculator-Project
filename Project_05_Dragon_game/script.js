dino = document.querySelector(".dino");
document.onkeydown = function (e) {
  console.log(e.keyCode);
  if (e.keyCode == 38) {
    dino.classList.add("dino-active");
    setTimeout(() => {
      dino.classList.remove("dino-active");
    }, 400);
  } else if (e.keyCode == 39) {
    dino.classList.add("dinoLeft");
    setTimeout(() => {
      dino.classList.remove("dinoLeft");
    }, 700);
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  obstacle = document.querySelector(".obstacles");
  gameOver = document.querySelector(".gameOver");
}, 100);
