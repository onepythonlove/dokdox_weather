const apiKey = "76a1b16b1ed8357b2830f5684250eaa4"; 


function success({ coords }) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  document.getElementById("att").innerText = "현재 위치의(위도:"+lat+"경도"+lon+")날씨정보확인(클릭!)"
  // 현재날씨(openweathermap
  const urlx = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`;
  //예보(openwathermap
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`;
  //공기질(openweathermap
  const airurl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  //open meteo api
  const a = 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,relative_humidity_2m,rain,showers,snowfall,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,wind_speed_10m,wind_direction_10m,temperature_80m,soil_temperature_0cm,soil_temperature_6cm&wind_speed_unit=ms&timezone=Asia%2FTokyo&forecast_days=16'
//json 으로 받고 표시

   document.querySelector("progress").value = "60"
  fetch(airurl)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분
      const air = document.getElementById("air")
       
        const level = "1:매우좋음/좋음 2:보통/주의할 필요 있음 3:위험수준/매우 심각한 대기질 오염상태"     
        air.innerHTML = `
        <p>active theme 에 대해 더욱 알아보기-dokdox 는 active theme 을 제공합니다!공기질 부분에 공기질여부에 따라 테두리가  파랑/초록/주황/빨강 으로 표시됨니다.</p>
        <p>공기질 단</p>
        <h2>${data.list[0].main.aqi}</h2>
        <p>다음을 확인하세요!</p>
        <p>${level}</p>
        <p>미세먼지</p>
        <h2>${data.list[0].components.pm2_5}</h2>
        <p>초미세먼지</p>
        <h2>${data.list[0].components.pm10}</h2>
      `;
      const temp = data.list[0].main.aqi

      if (temp == 1) {
        document.getElementById("air").style.borderColor = "blue";
      } else if (temp > 1 && temp <= 2) {
        document.getElementById("air").style.borderColor = "green";
      } else if (temp > 2 && temp <= 3) {
        document.getElementById("air").style.borderColor = "orange";
      } else {
        document.getElementById("air").style.borderColor = "red";
      }
      
   
  
  
    }
    )














  fetch(urlx)
    .then(response => response.json())
    .then(data => {
      const weatherDiv = document.getElementById("result");
      const moreresult = document.getElementById("moreresult");

      // 현재 날씨 표시
      weatherDiv.innerHTML = `
        <p>현재지역</p>
        <h1>${data.main.feels_like} °C</h1>
        <p>온도: ${data.main.temp}°C</p>
        <p>습도: ${data.main.humidity} %</p>
        <p> ${data.weather[0].description}</p>
        <p> ${data.weather[0].main}</p>
      `;
       //dokdox active theme
      const tempx = data.main.feels_like

      if (tempx < 0) {
        document.getElementById("result").style.backgroundColor = "blue";
      } 
      else if (tempx > 0 && tempx <= 10) {
        document.getElementById("result").style.backgroundColor = "purple";
      } 
      else if (tempx > 10 && tempx <= 19) {
        document.getElementById("result").style.backgroundColor = "green";
      } else if (tempx > 19 && tempx <=30 ) {
        document.getElementById("result").style.backgroundColor = "orange";
      } else {
        document.getElementById("result").style.backgroundColor = "red";
      }
      // 추가적인 날씨 정보
      moreresult.innerHTML = `
        <p>풍속</p>
        <h2>${data.wind.speed} m/s</h2>
        <p>풍향</p>
        <h2>${data.wind.deg}°</h2>
        <p>습도</p>
        <h2>${data.main.humidity}</h2>
        <p>기압</p>
        <h2>${data.main.pressure}</h2>
      `;
    });


    fetch(a)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분


     document.getElementById("openmeteoc").innerHTML = `
     <p>다른 출처의 현재온도 정보</p>
     <h2>${data["current"].temperature_2m}°C</h2>
     `
      
     document.getElementById("openmeteocr").innerHTML = `
     <p>강수/강우</p>
     <h2>${data["current"].rain}mm/</h2>
     <h2>${data["current"].showers}mm</h2>
     `
      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분


     document.getElementById("snowfall").innerHTML = `
     <p>적설량</p>
     <h2>${data["current"].snowfall}cm</h2>
     `
      

      
  
  
    })

    fetch(a)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분


     document.getElementById("time").innerHTML = `
     <p>다음 모델에 최종 업데이트 시간:</p>
     <h2>${data["current"].time}</h2>
     `
      

      
  
  
    })














  // openweathermap api 이용
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분
      const forecast1 = document.getElementById("forecast1");
      const forecast2 = document.getElementById("forecast2");
      const forecast3 = document.getElementById("forecast3");
      const forecast4 = document.getElementById("forecast4");
      const forecast0 = document.getElementById("forecast0");
      const forecast03 = document.getElementById("forecast03")
       
      // 멘트를 js 에 포함
      forecast1.innerHTML = `
        <p> ${data.list[10].dt_txt}</p>
        <h2>${data.list[10].weather[0].description}</h2>
        <p>${data.list[10].weather[0].main}</p>
        <h3> ${data.list[10].main.feels_like}°C</h3>
      `;

      // 두 번째 예보 (3시간 후 예보)
      forecast2.innerHTML = `
        <p> ${data.list[24].dt_txt}</p>
        <h2>${data.list[24].weather[0].description}</h2>
        <p>${data.list[24].weather[0].main}</p>
        <h3> ${data.list[24].main.feels_like}°C</h3>
      `;

     
      forecast3.innerHTML = `
        <p> ${data.list[30].dt_txt}</p>
        <h2>${data.list[30].weather[0].description}</h2>
        <p>${data.list[30].weather[0].main}</p>
        <h3> ${data.list[30].main.feels_like}°C</h3>
      `;

   
      forecast4.innerHTML = `
        <p>${data.list[38].dt_txt}</p>
        <h2>${data.list[38].weather[0].description}</h2>
        <p>${data.list[38].weather[0].main}</p>
        <h3> ${data.list[38].main.feels_like}°C</h3>
      `;

      forecast0.innerHTML = `
      <p>${data.list[5].dt_txt}</p>
      <h2>${data.list[5].weather[0].description}</h2>
      <p>${data.list[5].weather[0].main}</p>
      <h3> ${data.list[5].main.feels_like}°C</h3>
    `;

    forecast03.innerHTML = `
    <p>${data.list[8].dt_txt}</p>
    <h2>${data.list[8].weather[0].description}</h2>
    <p>${data.list[8].weather[0].main}</p>
    <h3> ${data.list[8].main.feels_like}°C</h3>
  `;
    });
    //기타기능들
    document.querySelector("progress").value = "100"
    document.querySelector("body").style.display = "block"
    
}

// 위치 정보를 가져오는 함수
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(success);
  }
}

// 위치 정보 오류 처리


getUserLocation();



//검색기능구현

function search() {
  const va = document.getElementById("searchvalue").value;
  const apiKey = "76a1b16b1ed8357b2830f5684250eaa4";
  const u = `https://api.openweathermap.org/data/2.5/weather?q=${va}&appid=${apiKey}&units=metric`; // Using units=metric to get temperature in Celsius
  document.getElementById("a").style.display = "none";
  document.getElementById("att").style.display = "block";

  fetch(u)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) { 
        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;

        // Displaying weather data
        document.getElementById("searchresult").innerHTML = `
          <p>${va}의 날씨</p>
          <h1>${temperature}°C</h1>
          <p>풍속: ${windSpeed} m/s</p>
          <p>설명: ${description}</p>
        `;
        document.getElementById("pp").innerText = "지역: " + va;

        // Background color based on temperature
        if (temperature < 0) {
          document.getElementById("searchresult").style.backgroundColor = "blue";
        } else if (temperature > 0 && temperature <= 10) {
          document.getElementById("searchresult").style.backgroundColor = "purple";
        } else if (temperature > 10 && temperature <= 19) {
          document.getElementById("searchresult").style.backgroundColor = "green";
        } else if (temperature > 19 && temperature <= 30) {
          document.getElementById("searchresult").style.backgroundColor = "orange";
        } else {
          document.getElementById("searchresult").style.backgroundColor = "red";
        }

      } else {
        document.getElementById("searchresult").innerHTML = `
          <p>다음 오류로 이용할 수 없습니다: ${data.message}</p>
        `;
      }
    })
    .catch(error => {
      document.getElementById("searchresult").innerHTML = `
        <p>에러가 발생했습니다. 다시 시도해주세요.</p>
      `;
      console.error(error);
    });
}

//see current location
function scl() {
  document.getElementById("a").style.display="block";
 // document.getElementById("searchresult").style.display = "none";
}




addEventListener("click",()=>{
  document.querySelector("body").style.backgroundColor = "gray"
  document.querySelector("body").style.color = "white"
})