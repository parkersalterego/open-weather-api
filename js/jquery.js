$(document).ready(function(){
  //retrieve our location info
  let locationData = $.get('https://ipapi.co/json/');
  //Make sure to declare variables to store data


  locationData.then(function(response, status){
    // Declare location variables (lat, lon, city, state) then activate api call
    console.log(response);
    let city = response.city;
    let lat = response.latitude;
    let lon = response.longitude;
    let state = response.region;
    getWeatherData(lat, lon, city, state);


  });

  function getWeatherData(lat, lon, city, state) {
    var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
    var apiKEY = '05cda9d059e3f35511f0ca2cb1772062';
    var weatherData = $.getJSON(`${weatherAPI}lat=${lat}&lon=${lon}&APPID=${apiKEY}`);

    weatherData.then(function(response, status){
      // Insert your data into the html! hint: log the api response and see what data is available.
      let temp = response.main.temp;
      let icon = response.weather[0].icon;
      let tempFarenheit = response.main.temp * (9/5) - 459.67;
      console.log(response);
      console.log(tempFarenheit);
      console.log(icon);

      $('#city').html(city);
      $('#state').html(state);
      $('#lat').html(lat);
      $('#lon').html(lon);
      $('#temp').html(tempFarenheit.toFixed(2));
      $('#weatherIcon').append(`<img id="icon"  src="http://openweathermap.org/img/w/${icon}.png" />`);
    });
   }
});
