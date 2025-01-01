const apiKey = "76a1b16b1ed8357b2830f5684250eaa4"; 


function success({ coords }) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  document.getElementById("att").innerText = "현재 위치의(위도:"+lat+"경도"+lon+")날씨정보확인(클릭!)"
  // 현재날씨(openweathermap
  const urlx = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;
  //예보(openwathermap
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;
  //공기질(openweathermap
  const airurl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  //open meteo api
  const a = 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+lon+'&current=temperature_2m,relative_humidity_2m,rain,showers,snowfall,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,wind_speed_10m,wind_direction_10m,temperature_80m,soil_temperature_0cm,soil_temperature_6cm&wind_speed_unit=ms&timezone=Asia%2FTokyo&forecast_days=16'
//json 으로 받고 표시
    document.querySelector("body").style.display = "block"

  fetch(airurl)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분
      const air = document.getElementById("air")
       
      
        air.innerHTML = `
        <p>Airquality level</p>
        <h2>${data.list[0].main.aqi}</h2>

        <p>pm2.5</p>
        <h2>${data.list[0].components.pm2_5}</h2>
        <p>pm10</p>
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
        <p>current location</p>
        <h1>${data.main.feels_like} °C</h1>
        <p>temperature: ${data.main.temp}°C</p>
        <p>humidity: ${data.main.humidity} %</p>
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
        <p>windspeed</p>
        <h2>${data.wind.speed} m/s</h2>
        <p>winddirection</p>
        <h2>${data.wind.deg}°</h2>
        <p>humidity</p>
        <h2>${data.main.humidity}</h2>
        <p>pressure</p>
        <h2>${data.main.pressure}</h2>
      `;
    });


    fetch(a)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분


     document.getElementById("openmeteoc").innerHTML = `
     <p>Other model's temperature</p>
     <h2>${data["current"].temperature_2m}°C</h2>
     `
      
     document.getElementById("openmeteocr").innerHTML = `
     <p>rain/showers</p>
     <h2>${data["current"].rain}mm/</h2>
     <h2>${data["current"].showers}mm</h2>
     `
      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("snowfall").innerHTML = `
     <p>snowfall</p>
     <h2>${data["current"].snowfall}cm</h2>
     `
      

      
  
  
    })




   




      
  
  
    




    fetch(a)
    .then(response => response.json())
    .then(data => {
      // 3시간 간격으로 날씨 예보를 보여주는 부분


     document.getElementById("time").innerHTML = `
     <p>Updated time:</p>
     <h2>${data["current"].time}</h2>
     `
      

      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("7").innerHTML = `
     <h3>${data.hourly.time[7]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[7]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[7]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[7]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[7]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[7]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[7]}m/s</h2>

     `
      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("10").innerHTML = `
     <h3>${data.hourly.time[10]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[10]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[10]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[10]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[10]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[10]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[10]}m/s</h2>
     `
      

      
  
  
    })


    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("14").innerHTML = `
         <h3>${data.hourly.time[14]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[14]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[14]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[14]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[14]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[14]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[14]}m/s</h2>
     `
      

      
  
  
    })







    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("8").innerHTML = `
     <h3>${data.hourly.time[8]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[8]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[8]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[8]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[8]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[8]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[8]}m/s</h2>
     `
      

      
  
  
    })

    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("20").innerHTML = `
     <h3>${data.hourly.time[20]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[20]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[20]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[20]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[20]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[20]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[20]}m/s</h2>
     `
      

      
  
  
    })





    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("22").innerHTML = `
       <h3>${data.hourly.time[22]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[22]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[22]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[22]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[22]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[22]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[22]}m/s</h2>
     `
      

      
  
  
    })



    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("29").innerHTML = `
     <h3>${data.hourly.time[29]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[29]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[29]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[29]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[29]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[29]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[29]}m/s</h2>
     `
     

      
  
  
    })






    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("31").innerHTML = `
    



     <h3>${data.hourly.time[31]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[31]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[31]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[31]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[31]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[31]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[31]}m/s</h2>
     `
     

      
  
  
    })












    fetch(a)
    .then(response => response.json())
    .then(data => {
 


     document.getElementById("35").innerHTML = `
      <h3>${data.hourly.time[35]}</h3>
     <p>temperature</p>
     <h2>${data.hourly.temperature_2m[35]}°C</h2>
     <p>rain</p>
     <h2>${data.hourly.rain[35]}mm</h2>
     <p>rainfall</p>
     <h2>${data.hourly.showers[35]}mm</h2>
     <p>snowfall</p>
     <h2>${data.hourly.snowfall[35]}cm</h2>
     <p>snow depth</p>
     <h2>${data.hourly.snow_depth[35]}m</h2>
     <p>windspeed</p>
     <h2>${data.hourly.wind_speed_10m[35]}m/s</h2>
     `
     

      
  
  
    })

    





//일출시간 및 일몰 시간기능구현

fetch(urlx)
    .then(response => response.json())
    .then(data => {
        // 일출 시간 변환
        const oldsunrise = new Date(data.sys.sunrise * 1000);  // 유닉스 타임스탬프 -> Date 객체
        const newsunrise = oldsunrise.toLocaleString();  // 기본 로케일 형식으로 변환

        // 일몰 시간 변환
        const oldsunset = new Date(data.sys.sunset * 1000);  // 유닉스 타임스탬프 -> Date 객체
        const newsunset = oldsunset.toLocaleString();  // 기본 로케일 형식으로 변환

        // HTML에 출력
        document.getElementById("t").innerHTML = `
            <p>Sunrise / Sunset</p>
            <p>Sunrise</p>
            <h3>${newsunrise}</h3>
            <p>Sunset</p>
            <h3>${newsunset}</h3>
        `;
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
          <h1>${temperature}°C</h1>
          <p> ${windSpeed} m/s</p>
          <p> ${description}</p>
        `;
        document.getElementById("pp").innerText =va;

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
          <p>Please try agin..dokdox can find the reason: ${data.message}</p>
        `;
      }
    })
    .catch(error => {
      document.getElementById("searchresult").innerHTML = `
        <p>Try again...</p>
      `;
      console.error(error);
    });
}

//see current location
function scl() {
  document.getElementById("a").style.display="block";
 // document.getElementById("searchresult").style.display = "none";
}




document.getElementById("darkmodetoggle").addEventListener("click",()=>{
    const element = document.body;
    const buttontext = document.getElementById("darkmodetoggle")
    element.classList.toggle("dark-mode");
    buttontext.innerText = "start using Dark mode/light mode"
    
})