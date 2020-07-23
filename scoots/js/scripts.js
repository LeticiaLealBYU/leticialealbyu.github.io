// Toggle the hamburger menu class name upon click
function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}


// Return current date in the format "Wednesday, 20 May 2020"
var currentDate = new Date();
var weekdayOption = { weekday: 'long' };
var weekday = currentDate.toLocaleDateString('en-US', weekdayOption);
var monthOption = { month: 'long' };
var month = currentDate.toLocaleDateString('en-US', monthOption);
var day = currentDate.getDate();
var year = currentDate.getFullYear();

document.getElementById('currentDate').textContent = weekday + ", " + day + " " + month + " " + year;

// forecast weather data from OpenWeather API
const forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=9b717b87c356c42c153e56b94339d80a&units=imperial';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {

    var i = 0;
    var j = 0;

    // Loop through forecast data and only pull the first 5 records at 18:00:00
    while (i < 40 && j < 5)
    {
      var time = jsObject.list[i].dt_txt;
      if (time.includes('18:00:00')) {

        // Pull the date and post it in a short weekday format
        let date = new Date(time);
        let weekdayOption = { weekday: 'short' };
        let weekday = date.toLocaleDateString('en-US', weekdayOption);
        let labelId = 'label' + j;
        document.getElementById(labelId).textContent = weekday;

        // Post the weather icon
        let icon = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        let description = jsObject.list[i].weather[0].description;
        let imageId = 'image' + j;
        document.getElementById(imageId).setAttribute('src', icon); 
        document.getElementById(imageId).setAttribute('alt', description); 

        // Post the temperature
        let temp = Math.round(jsObject.list[i].main.temp);
        let tempId = 'temp' + j;
        document.getElementById(tempId).textContent = temp;

        j++;
      }
    
      i++;
    }

  });
