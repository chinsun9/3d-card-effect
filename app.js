// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const avatar = document.querySelector(".avatar img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  const { pageX, pageY } = e;
  let xAxis = (window.innerWidth / 2 - pageX) / 25;
  let yAxis = (window.innerHeight / 2 - pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.1s ease";

  // Popout;
  title.style.transform = "translateZ(150px)";
  avatar.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
  //   Popback
  title.style.transform = "translateZ(0px)";
  avatar.style.transform = "translateZ(0) rotateZ(0)";
  description.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
  purchase.style.transform = "translateZ(0)";
});
