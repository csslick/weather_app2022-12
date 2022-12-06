function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "지도 기능 사용 불가";
  }
}

function showPosition(position) {
  let geoLocation =  { 
    lat: position.coords.latitude,
    lon: position.coords.longitude
  }
  console.log(geoLocation)
  currentGeoInfo(getLocation)
}

getLocation()

