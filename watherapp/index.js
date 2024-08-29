const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "&appid=ceeec3c00097e97a9c8c0c3f3330485f";

const wetherIcon = document.querySelector(".wether-icon");

const chackfun = async (city) => {

  const responce = await fetch(url + city + apiKey);
    const data = await responce.json();
     if (data.cod == "404") {
         document.querySelector(".error").style.display = "block";
          document.querySelector(".wether").style.display = "none";
    } else {
         document.querySelector(".error").style.display = "none";
         
     }
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector("h1").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity-num").innerHTML =
    data.main.feels_like + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  if (data.weather[0].main == "Clouds") {
    wetherIcon.src = "image/clouds.png";
  } else if (data.weather[0].main == "Wind") {
    wetherIcon.src = "image/wind.png";
  } else if (data.weather[0].main == "Clear") {
    wetherIcon.src = "image/clear.png";
  } else if (data.weather[0].main == "Rain") {
    wetherIcon.src = "image/rain.png";
  } else if (data.weather[0].main == "Mist") {
    wetherIcon.src = "image/mist.png";
  } else if (data.weather[0].main == "Snow") {
    wetherIcon.src = "image/snow.png";
  } else if (data.weather[0].main == "Drizzle") {
    wetherIcon.src = "image/drizzle.png";
    }
    if (data.cod == "200") {
        
        document.querySelector(".wether").style.display = "block";
    } 
 
};
const searchBox = document.querySelector(".search input");
const btn = document.querySelector(".search button");

btn.addEventListener("click", () => {
  chackfun(searchBox.value);
});
