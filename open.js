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
     <h3>${data.hourly.time[7]}</h3>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[7]}°C</h2>
     <p>강수</p>
     <h2>${data.hourly.rain[7]}mm</h2>
     <p>강우</p>
     <h2>${data.hourly.showers[7]}mm</h2>
     <p>눈</p>
     <h2>${data.hourly.snowfall[7]}cm</h2>
     <p>눈의 깊이</p>
     <h2>${data.hourly.snow_depth[7]}m</h2>
     <p>풍속</p>
     <h2>${data.hourly.wind_speed_10m[7]}m/s</h2>

     `
      

      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("10").innerHTML = `
     <h3>${data.hourly.time[10]}</h3>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[10]}°C</h2>
     <p>강수</p>
     <h2>${data.hourly.rain[10]}mm</h2>
     <p>강우</p>
     <h2>${data.hourly.showers[10]}mm</h2>
     <p>눈</p>
     <h2>${data.hourly.snowfall[10]}cm</h2>
     <p>눈의 깊이</p>
     <h2>${data.hourly.snow_depth[10]}m</h2>
     <p>풍속</p>
     <h2>${data.hourly.wind_speed_10m[10]}m/s</h2>
     `
      

      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("14").innerHTML = `
     <h3>${data.hourly.time[14]}</h3>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[14]}°C</h2>
     <p>강수</p>
     <h2>${data.hourly.rain[14]}mm</h2>
     <p>강우</p>
     <h2>${data.hourly.showers[14]}mm</h2>
     <p>눈</p>
     <h2>${data.hourly.snowfall[14]}cm</h2>
     <p>눈의 깊이</p>
     <h2>${data.hourly.snow_depth[14]}m</h2>
     <p>풍속</p>
     <h2>${data.hourly.wind_speed_10m[14]}m/s</h2>
     `
      

      
  
  
    })







    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("8").innerHTML = `
     <h3>${data.hourly.time[8]}</h3>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[8]}°C</h2>
     <p>강수</p>
     <h2>${data.hourly.rain[8]}mm</h2>
     <p>강우</p>
     <h2>${data.hourly.showers[8]}mm</h2>
     <p>눈</p>
     <h2>${data.hourly.snowfall[8]}cm</h2>
     <p>눈의 깊이</p>
     <h2>${data.hourly.snow_depth[8]}m</h2>
     <p>풍속</p>
     <h2>${data.hourly.wind_speed_10m[8]}m/s</h2>
     `
      

      
  
  
    })

    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("20").innerHTML = `
     <h3>${data.hourly.time[20]}</h3>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[20]}°C</h2>
     <p>강수</p>
     <h2>${data.hourly.rain[20]}mm</h2>
     <p>강우</p>
     <h2>${data.hourly.showers[20]}mm</h2>
     <p>눈</p>
     <h2>${data.hourly.snowfall[20]}cm</h2>
     <p>눈의 깊이</p>
     <h2>${data.hourly.snow_depth[20]}m</h2>
     <p>풍속</p>
     <h2>${data.hourly.wind_speed_10m[20]}m/s</h2>
     `
      

      
  
  
    })





    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("22").innerHTML = `
     <h3>${data.hourly.time[22]}</h3>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[22]}°C</h2>
     <p>강수</p>
     <h2>${data.hourly.rain[22]}mm</h2>
     <p>강우</p>
     <h2>${data.hourly.showers[22]}mm</h2>
     <p>눈</p>
     <h2>${data.hourly.snowfall[22]}cm</h2>
     <p>눈의 깊이</p>
     <h2>${data.hourly.snow_depth[22]}m</h2>
     <p>풍속</p>
     <h2>${data.hourly.wind_speed_10m[22]}m/s</h2>
     `
      

      
  
  
    })



    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("29").innerHTML = `
      <h3>${data.hourly.time[29]}</h3>
     <p>온도</p>
     <h2>${data.hourly.temperature_2m[29]}°C</h2>
     <p>강수</p>
     <h2>${data.hourly.rain[29]}mm</h2>
     <p>강우</p>
     <h2>${data.hourly.showers[29]}mm</h2>
     <p>눈</p>
     <h2>${data.hourly.snowfall[29]}cm</h2>
     <p>눈의 깊이</p>
     <h2>${data.hourly.snow_depth[29]}m</h2>
     <p>풍속</p>
     <h2>${data.hourly.wind_speed_10m[29]}m/s</h2>
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

