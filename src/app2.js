// app.js
const API_KEY = '179ceeb11c23a912fefd41421f453ea0';
let city_name = 'seoul';
let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
let global_data = {};
let weather_array = [];

fetch(API_URL)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data);
    global_data = {...data}
    // console.log('global data = ', global_data.name)
    weather(data);
}) 

function weather(data) {
    const weather_main = data.weather[0].main; //날씨상태 설명
    const weather_icon = data.weather[0].icon; // 아이콘
    const temp = `${parseInt(data.main.temp-273.15)}&deg;C`; // 현재온도
    const name = data.name; //도시명 
    weather_array.push(name, weather_icon, temp,weather_main);
    
    // console.log('weather_array = ', weather_array);
    // console.log('global data = ', global_data)
    console.log('weather_array inside = ', weather_array);
    callsub(weather_array)
}

console.log('weather_array outside = ', weather_array);


function callsub(arr) {
  console.log('sub arr = ', arr);
  
  // for (i=0; i<4; i++) {
  //     liEl[i].innerHTML = weather_array[i];
  // }
}


