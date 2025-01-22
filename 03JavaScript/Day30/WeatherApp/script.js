const submitBtn = document.querySelector('#submit-city');
const cityName = document.querySelector('.city-name');
const weatherIcon = document.querySelector('.weather-icon img');
const temperature = document.querySelector('.temperature');
const input = document.querySelector('#city-name-input');
const conditionText = document.querySelector(".weather-description");
const humidity  = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

function weather(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=f839152b154048d9aab131614251401&q=${input.value}&aqi=yes`)
    .then(Response=>Response.json())
    .then((data)=>{
        cityName.textContent = data.location.name;
        conditionText.textContent = data.current.condition.text;
        weatherIcon.src = data.current.condition.icon;
        temperature.textContent =`${Math.floor(data.current.temp_c)}℃`;
        humidity.textContent = `${data.current.humidity}%`;
        wind.textContent = `${data.current.wind_kph} kph`;
    })
}

function showTime(){
    const now = new Date();
    const time = document.querySelector('.time');
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let timeZone = hour >= 12 ?'PM':'AM' ;
    time.textContent=`${Math.abs(hour-12)}:${min}:${sec} ${timeZone}`;
}

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const city = input.value;
    if(city)
        weather(city);
    else
    alert("Please Enter a City Name!");
});
weather(kolkata);

setInterval(()=>{
    showTime();
},1000)