const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const xmas = new Date("2023-12-25");
  const dDay = xmas - date;

  const day = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(3, "0");
  const hour = String(Math.floor(dDay / (1000 * 60 * 60)) % 24).padStart(2, "0");
  const min = String(Math.floor(dDay / (1000 * 60)) % 60).padStart(2, "0");
  const sec = String(Math.floor(dDay / 1000) % 60).padStart(2, "0");
  clock.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
