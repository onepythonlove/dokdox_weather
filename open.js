const apiKey = "76a1b16b1ed8357b2830f5684250eaa4"; 


function success({ coords }) {
  const lat = coords.latitude;
  const lon = coords.longitude;

  //open meteo api
  const a = 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,relative_humidity_2m,rain,showers,snowfall,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,wind_speed_10m,wind_direction_10m,temperature_80m,soil_temperature_0cm,soil_temperature_6cm&wind_speed_unit=ms&timezone=Asia%2FTokyo&forecast_days=16'
//json 으로 받고 표시

  















    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("7").innerHTML = `
     <p>${data.hourly.time[7]}</p>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[7]}</h2>
     `
      

      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("10").innerHTML = `
     <p>${data.hourly.time[10]}</p>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[10]}</h2>
     `
      

      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("14").innerHTML = `
     <p>${data.hourly.time[14]}</p>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[14]}</h2>
     `
      

      
  
  
    })







    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("8").innerHTML = `
     <p>${data.hourly.time[8]}</p>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[8]}</h2>
     `
      

      
  
  
    })

    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("20").innerHTML = `
     <p>${data.hourly.time[20]}</p>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[20]}</h2>
     `
      

      
  
  
    })
}

// 위치 정보를 가져오는 함수
function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success);
    }
  }
  
  // 위치 정보 오류 처리
  
  
  getUserLocation();