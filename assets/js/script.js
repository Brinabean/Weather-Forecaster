var savebutton = document.querySelector(".btn");

var getWeather = function(city) {
    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&exclude=minutely,hourly,alerts&appid=2cc1964a5390e1f202056d592e6bd361";

    var todayapi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2cc1964a5390e1f202056d592e6bd361";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
          console.log(data);
        });
    });

    fetch(todayapi).then(function(response) {
        response.json().then(function(data) {
          console.log(data);
        });
    });
};

savebutton.addEventListener("click", getWeather);