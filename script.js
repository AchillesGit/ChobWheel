import { Wheel } from "https://cdn.jsdelivr.net/npm/spin-wheel@5.0.1/dist/spin-wheel-esm.js";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 1. Configure the wheel's properties:
const food = [
  { label: "Pommes 🍟" },
  { label: "Döner 🥙" },
  { label: "Kantine 🍲" },
  { label: "RiceOn 🍚" },
  { label: "Kube 🍔" },
  { label: "Vapiano 🍝" },
  { label: "L'Osteria 🍕" },
  { label: "Peter Pane 🍔" },
  { label: "Fasten ☠️" },
  { label: "Asia Gourmet 🍜" },
  { label: "Fresh Seeds 🥗" },
  { label: "Burrito-Laden 🌯" },
];

const props = {
  items: [...food],
  borderColor: "#ffffff",
  borderWidth: 0,
  debug: false,
  image: null,
  isInteractive: false,
  itemBackgroundColors: ["#F38181", "#FCE38A", "#EAFFD0", "#95E1D3"],
  itemLabelAlign: "right",
  itemLabelBaselineOffset: 0,
  itemLabelColors: ["#000"],
  itemLabelFont: "Comic Sans MS",
  itemLabelFontSizeMax: 999,
  itemLabelRadius: 0.85,
  itemLabelRadiusMax: 0.2,
  itemLabelRotation: 0,
  itemLabelStrokeColor: "#ffffff",
  itemLabelStrokeWidth: 1,
  lineColor: "#ffffff",
  lineWidth: 2,
  overlayImage: null,
  pixelRatio: 0,
  pointerAngle: 0,
  radius: 1,
  rotationResistance: -100,
  rotationSpeedMax: 1000,
  onRest() {
    console.log("Wheel stopped spinning");
    console.log("Selected item:", wheel);
    let x = 12 - ((Math.floor(wheel._rotation / 30) % 12) % 12);
    let y = (x % 12) - 1;
    console.log(food[y].label);
    alert("Chob: " + food[y].label);
  },
};

// 2. Decide where you want it to go:
const container = document.querySelector(".wheel-container");

// 3. Create the wheel in the container and initialise it with the props:
const wheel = new Wheel(container, props);

async function spinWheel() {
  const winningItemIndex = Math.floor(Math.random() * food.length);
  const duration = 4000;
  wheel.spinToItem(winningItemIndex, duration, true, 2, 1);
}

document.getElementById("spinButton").addEventListener("click", spinWheel);

// only show sea horse on mobile
console.log(isMobile);

if (!isMobile) {
  document.getElementById("seaHorse").style.display = "block";
}
