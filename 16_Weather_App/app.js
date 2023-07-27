const city = document.getElementById("cityName");
const getWeather = document.getElementById("getWeather");
const apikey = "f50e477d043d0e04de465b37a8617d02";

async function weather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("network fails");
    }
    const data = await response.json();

    const temp = Math.floor(data.main.temp);
    const feelLike = data.main.feels_like;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    document.getElementsByClassName("tempno")[0].textContent = temp;
    document.getElementById("fl-n").textContent = feelLike;
    document.getElementById("hu-n").textContent = humidity;
    document.getElementById("ws-n").textContent = windSpeed;
    document.getElementById("description").textContent = description;
  } catch (error) {
    console.log(error);
  }
}

getWeather.addEventListener("click", () => {
  weather(city);
});
