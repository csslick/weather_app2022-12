// app.js
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
    // let copyArr = [...data];
    // newArr = [...copyArr];
  })

function showWeather(data) {
  const desc = data.weather[0].main; // 날씨상태 설명
  const weather_icon = data.weather[0].icon; // 아이콘
  const temp = parseInt(data.main.temp - 273.15); // 현재온도
  const name = data.name; // 도시명
  console.log(name, desc, weather_icon, temp);

  // UI 출력(DOM)
  const citynameEl = document.querySelector('.cityname');
  const iconEl = document.querySelector('.icon');
  const tempEl = document.querySelector('.temp');
  const descEl = document.querySelector('.desc');

  citynameEl.textContent = name;
  iconEl.innerHTML = `<img src='http://openweathermap.org/img/wn/${weather_icon}@2x.png' alt='아이콘'/>`
  tempEl.innerHTML = `${temp}&deg;`
  descEl.textContent = desc;
}