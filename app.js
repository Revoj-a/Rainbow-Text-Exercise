const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const spans = document.querySelectorAll("h1 span");

let i = 0;
for (const color of colors) {
  if (i >= spans.length) break;
  spans[i].style.color = color;
  i++;
}
