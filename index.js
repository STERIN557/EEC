"use strict";
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("threeS");
const four = document.getElementById("four");
const five = document.getElementById("five");

const inner = document.getElementById("inner");
const service = document.getElementById("service");
const clients = document.getElementById("clients");
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

const headM = document.getElementById("bd");

const serDiv = document.getElementById("changingMain");
const clieDiv = document.getElementById("changingMain1");
const projDiv = document.getElementById("changingMain11");
const AbouDiv = document.getElementById("changingMain111");
const footDiv = document.getElementById("changingMain1111");

service.addEventListener("click", (e) => {
  one.style.backgroundColor = "white";
  two.style.backgroundColor = "rgba(255, 255, 255, 0)";
  three.style.backgroundColor = "rgba(255, 255, 255, 0)";
  four.style.backgroundColor = "rgba(255, 255, 255, 0)";
  five.style.backgroundColor = "rgba(255, 255, 255, 0)";
  serDiv.scrollIntoView(true);
});

clients.addEventListener("click", () => {
  one.style.backgroundColor = "rgba(255, 255, 255, 0)";
  two.style.backgroundColor = "white";
  three.style.backgroundColor = "rgba(255, 255, 255, 0)";
  four.style.backgroundColor = "rgba(255, 255, 255, 0)";
  five.style.backgroundColor = "rgba(255, 255, 255, 0)";
  clieDiv.scrollIntoView(true);
});

projects.addEventListener("click", () => {
  one.style.backgroundColor = "rgba(255, 255, 255, 0)";
  two.style.backgroundColor = "rgba(255, 255, 255, 0)";
  three.style.backgroundColor = "white";
  four.style.backgroundColor = "rgba(255, 255, 255, 0)";
  five.style.backgroundColor = "rgba(255, 255, 255, 0)";
  projDiv.scrollIntoView(true);
});

about.addEventListener("click", () => {
  one.style.backgroundColor = "rgba(255, 255, 255, 0)";
  two.style.backgroundColor = "rgba(255, 255, 255, 0)";
  three.style.backgroundColor = "rgba(255, 255, 255, 0)";
  four.style.backgroundColor = "white";
  five.style.backgroundColor = "rgba(255, 255, 255, 0)";
  AbouDiv.scrollIntoView(true);
});

contact.addEventListener("click", () => {
  one.style.backgroundColor = "rgba(255, 255, 255, 0)";
  two.style.backgroundColor = "rgba(255, 255, 255, 0)";
  three.style.backgroundColor = "rgba(255, 255, 255, 0)";
  four.style.backgroundColor = "rgba(255, 255, 255, 0)";
  five.style.backgroundColor = "white";
  footDiv.scrollIntoView(true);
});

const im1 = document.getElementById("imageS1");
const im2 = document.getElementById("imageS2");
const im3 = document.getElementById("imageS3");
var mutex = 1;

setInterval(() => {
  doContinue();
}, 3000);

let doContinue = () => {
  if (mutex === 1) {
    im1.style.display = "flex";
    im1.src = "../images/pic1.jpg";
    im2.style.display = "none";
    im3.style.display = "none";
    mutex = 2;
  } else if (mutex === 2) {
    im1.style.display = "none";
    im2.style.display = "flex";
    im2.src = "../images/pic2.jpg";
    im3.style.display = "none";
    mutex = 3;
  } else if (mutex === 3) {
    im1.style.display = "none";
    im2.style.display = "none";
    im3.style.display = "flex";
    im3.src = "../images/pi3.jpg";
    mutex = 1;
  }
};
