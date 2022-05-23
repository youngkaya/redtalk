const clock = document.getElementById("clock")

const realTime = () => {
  date = new Date();
  hours = String(date.getHours()).padStart(2, "0");
  minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

realTime();
setInterval(realTime, 1000);