const start = document.getElementById("start");
const end = document.getElementById("end");

setTimeout(() => {
  end.style.display = "flex";
}, 2000);

const List = Array.from(document.getElementsByClassName("PutOther"));

// List.forEach((e) => {
//   e.addEventListener("scroll", () => {
//     const lo = Array.from(document.getElementsByClassName("recTangle"));
//     const lis = Array.from(e.firstChild);
//   });
// });

const left = document.getElementById("left");
const right = document.getElementById("right");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const AllScR = [one, two, three, four, five];
let globalIncr = 0;

right.addEventListener("click", () => {
  if (globalIncr < 4) {
    globalIncr++;
    AllScR[globalIncr].scrollIntoView();
  } else {
    globalIncr = 0;
    AllScR[globalIncr].scrollIntoView();
  }
});

left.addEventListener("click", () => {
  if (globalIncr > 0) {
    globalIncr--;
    AllScR[globalIncr].scrollIntoView();
  } else {
    globalIncr = 4;
    AllScR[globalIncr].scrollIntoView();
  }
});
