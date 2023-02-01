function getweather(){

    let citynam=id_city.value;
    console.log(citynam);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citynam}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
    then(res=>res.json()).then(data=>displayWeather(data))
}

function displayWeather(data){

    let temprature=data.main.temp;
    let mintemp=data.main.temp_min;
    let maxtemp=data.main.temp_max;
    let humidity=data.main.humidity;
    let winddegree=data.wind.deg;
    let feelslike=data.main.feels_like;
    let windinfo=data.wind.speed;
    sunrisetime=data.sys.sunrise;
    sunsettime=data.sys.sunset;
    id_location.innerHTML=`<h1 class= text-center>Weather in ${data.name}</h1>`

    let htmldata=`

    <div class="card text-center">
  <div class="card-header">
    Temprature
  </div>
  <div class="card-body">
    <h5 class="card-title">${temprature} celcius</h5>
    <p class="card-text">Min Temp ${mintemp}</p>
    <p class="card-text">Max Temp ${maxtemp}</p>
  </div>
  <div class="card-footer text-muted">
    Today
  </div>
</div>
    
    `

    id_temp.innerHTML=htmldata


    let humiditydata=`

        <div class="card text-center">
        <div class="card-header">
            Humidity
        </div>
        <div class="card-body">
            <h5 class="card-title">${humidity}</h5>
            <p class="card-text">Wind Degree ${winddegree}</p>
            <p class="card-text">Feels Like ${feelslike}</p>
        </div>
        <div class="card-footer text-muted">
            Today
        </div>
        </div>


`

id_humidity.innerHTML=humiditydata

    let winddata=`
    <div class="card text-center">
        <div class="card-header">
            Wind Info
        </div>
        <div class="card-body">
            <h5 class="card-title"> Wind Speed ${windinfo}</h5>
            <p class="card-text">Sunrise ${sunrisetime}</p>
            <p class="card-text">Sunset  ${sunsettime}</p>
        </div>
        <div class="card-footer text-muted">
            Today
        </div>
        </div>
    `

    id_wind.innerHTML=winddata



}

function getlocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((pos)=>{

            let lat=pos.coords.latitude;
            let long=pos.coords.longitude;

            console.log(lat,long);

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ae29da81c95f7df18ec364ddb8fc0e73`).
            then(res=>res.json()).then(data=>displayWeather(data))

        })
    }




    
}
