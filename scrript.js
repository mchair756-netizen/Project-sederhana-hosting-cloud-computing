/* ---------- SNOW GENERATOR ULTRA REALISTIC ---------- */
const snowContainer = document.getElementById("snow-container");

function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");

  snow.textContent = "❄";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = Math.random() * 12 + 8 + "px";
  snow.style.animationDuration = Math.random() * 3 + 4 + "s";

  snowContainer.appendChild(snow);
  setTimeout(() => snow.remove(), 8000);
}
setInterval(createSnow, 120);

/* ---------- MOUSE PARALLAX 3D ---------- */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 70;

  document.querySelector(
    ".layer-back"
  ).style.transform = `translateX(${x}px) scale(1.03)`;
  document.querySelector(".layer-mid").style.transform = `translateX(${
    x * 1.5
  }px) scale(1.04)`;
  document.querySelector(".layer-front").style.transform = `translateX(${
    x * 2
  }px) scale(1.05)`;
});
function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.textContent = "❄";

  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = Math.random() * 10 + 10 + "px";
  snow.style.animationDuration = Math.random() * 5 + 4 + "s";
  snow.style.opacity = Math.random() * 0.9 + 0.2;

  document.body.appendChild(snow);
  setTimeout(() => snow.remove(), 11000);
}
setInterval(createSnow, 120);
