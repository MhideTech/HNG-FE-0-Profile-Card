const timeElement = document.getElementById("user-time");
const updateTime = () => {
  timeElement.textContent = Date.now();
};
updateTime();
setInterval(updateTime, 1000);
