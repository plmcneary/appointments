function getWeather () {
  var city = $(".appt-details-city").text();

  $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q='
  +city+'&units=imperial&cnt=10&APPID=e5892a2f8415677f7b7ab2540d6149df')
    .done(function (data) {
      var today = new Date();
      var simpToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      var apptDate = new Date($('.appt-details-date').text());
      var diffDays = (apptDate.getTime() - simpToday.getTime())/86400000;
      if (diffDays>-1 && diffDays<10) {
        var apptWeather = data.list[diffDays];
        $('.appt-info').append('<div class="weather-data"><span>'
        +apptWeather.temp.day+' &degF</span><img class="weather-icon" src=http://openweathermap.org/img/w/'
        +apptWeather.weather[0].icon
        +'.png></div>');
      }
  })
}
