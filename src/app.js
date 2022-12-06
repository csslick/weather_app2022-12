// app.js

// 아이콘 마이그레이션 데이터
import { icons_origin, icons_fa } from './icon.js'
// 현재 위치 가져오기
// import { geoLocation } from './geoLocation.js';
// console.log(geoLocation)

const API_KEY = '179ceeb11c23a912fefd41421f453ea0';
let city_name = 'seoul';
let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`

// 서버에서 불러오는 작업은 비동기 처리(async)
fetch(API_URL)
  .then(function(응답데이터){
    return 응답데이터.json()
  })
  .then(function(data){
    console.log(data);
    showWeather(data)
  })

function showWeather(data) {
  const desc = data.weather[0].main; // 날씨상태 설명
  let weather_icon = data.weather[0].icon; // 아이콘
  const temp = parseInt(data.main.temp - 273.15); // 현재온도
  const name = data.name; // 도시명
  console.log(name, desc, weather_icon, temp);

  // 날씨 아이콘 교체
  for (let i = 0; i < icons_origin.length;i++) {
    if(icons_origin[i] == weather_icon) {
      weather_icon = icons_fa[i]
      console.log('변경아이콘 = ', weather_icon)
      break;            
    }
  }


  // UI 출력(DOM)
  const citynameEl = document.querySelector('.cityname');
  const iconEl = document.querySelector('.icon');
  const tempEl = document.querySelector('.temp');
  const descEl = document.querySelector('.desc');

  citynameEl.textContent = name;
  // iconEl.innerHTML = `<img src='http://openweathermap.org/img/wn/${weather_icon}@2x.png' alt='아이콘'/>`
  iconEl.innerHTML = weather_icon;
  tempEl.innerHTML = `${temp}&deg;`
  descEl.textContent = desc;
}