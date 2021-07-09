// current time
setInterval(() => {
  Data = new Date();
Hour = Data.getHours();
Minutes = Data.getMinutes();
Seconds = Data.getSeconds();

document.querySelector('.time').innerHTML = ("Current time: " + Hour + ":" + Minutes + ":" + Seconds);
}, 1000);

// placeholder
var input = document.getElementById('inp_1');
var placeholder = input.placeholder;

input.addEventListener('mouseover', () => {
  input.placeholder = 'city'
})

input.addEventListener('mouseout', () => {
  input.placeholder = placeholder;
})

// main function
function main () {
fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=a521c8a838880922f4b48025b3e277df`)
    .then(function (resp) { return resp.json() }) // получит строку и преобразует в массив
    .then(function (data_weather) {
      console.log(data_weather)

       document.querySelector('.city__name').innerHTML = data_weather.name
       document.querySelector('.deg').innerHTML = Math.round(data_weather.main.temp - 273) + '&deg';
       document.querySelector('.weather').innerHTML = data_weather.weather[0]['description']
       document.querySelector('.img').innerHTML = `<img src='http://openweathermap.org/img/wn/${data_weather.weather[0]["icon"]}@2x.png'>`
       document.querySelector('.feels__like').innerHTML = Math.round(data_weather.main.feels_like - 273) + '&deg'; 
       document.querySelector('.pressure').innerHTML = Math.round(data_weather.main.pressure) + ' mmHg'; 
       document.querySelector('.humidity').innerHTML = Math.round(data_weather.main.humidity) + '%'; 
       document.querySelector('.wind').innerHTML = Math.round(data_weather.wind.speed) + ' m/s'; 
      })
    .catch(function (e) { console.log(e) })
}

// samara start
main(id = 499099)

// input city
document.getElementById('inp_1').addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
 
    var city = this.value 

    city == 'самара'    || city == 'samara'     ? main(id = 499099) : '';
    city == 'тольятти'  || city == 'toliatti'   ? main(id = 482283) : '';
    city == 'москва'    || city == 'moscow'     ? main(id = 524894) : '';
    city == 'волгоград' || city == 'volgograd'  ? main(id = 472757) : '';
    city == 'лондон'    || city =='london'      ? main(id = 2643741): '';
    city == 'швейцария' || city == 'switzeland' ? main(id = 2658434): '';
    city == 'нью йорк'  || city == 'new york'   ? main(id = 5128581): '';
    
  }
});
