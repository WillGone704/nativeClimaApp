const appid = "e360dd8d358384a112f93ffce1622817";

const getWeatherButton = document.getElementById('getWeatherButton');       
const place = document.getElementById('place');
const warningNotification = document.getElementById('warningNotification');
const cityTemperature = document.getElementById('cityTemperature');
const cityMaxTemperature = document.getElementById('cityMaxTemperature');
const cityMinTemperature = document.getElementById('cityMinTemperature');
const cityTempDescription = document.getElementById('cityTempDescription');
const tempIcon = document.getElementById('tempIcon');
const tempAverage = document.getElementById('tempAverage');

const githubIcon = document.getElementById('github-icon');
const devIcon = document.getElementById('dev-icon');
const portafolioIcon = document.getElementById('portafolio-icon');
const linkedinIcon = document.getElementById('linkedin-icon');

const inputDataBox = document.getElementById('inputData');
const outputDataBox = document.getElementById('outputData');


var cityInput = document.getElementById('cityInput');
var countryInput = document.getElementById('countryInput');

    
cityInput.addEventListener('keydown',(e) =>{
    if(e.code === "Enter"){
        fetchWeatherData();
        animationForward();
    }
});

countryInput.addEventListener('keydown',(e) =>{
    if(e.code === "Enter"){
        fetchWeatherData();
        animationForward();
    }
});

getWeatherButton.addEventListener('click',() => {
    fetchWeatherData();
    animationForward();
})
githubIcon.addEventListener('mouseover',() =>{
    githubIcon.src = './assets/github_hover_icon.png'
});
githubIcon.addEventListener('mouseleave',() =>{
    githubIcon.src = './assets/github_default_icon.png'
});
githubIcon.addEventListener('click',() =>{
    githubIcon.src = './assets/github_active_icon.png'
    githubIcon.src = './assets/github_default_icon.png'
});

devIcon.addEventListener('mouseover',() =>{
    devIcon.src = './assets/dev_hover_icon.png'
});
devIcon.addEventListener('mouseleave',() =>{
    devIcon.src = './assets/dev_default_icon.png'
});
devIcon.addEventListener('click',() =>{
    devIcon.src = './assets/dev_active_icon.png'
    devIcon.src = './assets/dev_default_icon.png'
});

linkedinIcon.addEventListener('mouseover',() =>{
    linkedinIcon.src = './assets/linkedin_hover_icon.png'
});
linkedinIcon.addEventListener('mouseleave',() =>{
    linkedinIcon.src = './assets/linkedin_default_icon.png'
});
linkedinIcon.addEventListener('click',() =>{
    linkedinIcon.src = './assets/linkedin_active_icon.png'
    linkedinIcon.src = './assets/linkedin_default_icon.png'
});

portafolioIcon.addEventListener('mouseover',() =>{
    portafolioIcon.src = './assets/portafolio_hover_icon.png'
});
portafolioIcon.addEventListener('mouseleave',() =>{
    portafolioIcon.src = './assets/portafolio_default_icon.png'
});
portafolioIcon.addEventListener('click',() =>{
    portafolioIcon.src = './assets/portafolio_active_icon.png'
    portafolioIcon.src = './assets/portafolio_default_icon.png'
})

function fetchWeatherData() {
    console.log(cityInput.value);
    var weatherRequest = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value},${countryInput.value}&appid=${appid}`,{
        method:'GET'
    })

    fetch(weatherRequest)
    .then((response) => response.json())
    .then((data) => {
        place.textContent = data.name + ", " + data.sys.country;
        cityTemperature.textContent = data.main.temp + " F";
        cityMaxTemperature.textContent = data.main.temp_max + " F";
        cityMinTemperature.textContent = data.main.temp_min + " F";
        cityTempDescription.textContent =data.weather[0].description;
        tempIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }).catch((error) => warningNotification.textContent = error);
}

function animationForward(){
    console.log('Animation forward called');
    outputDataBox.animate([
        {opacity: 0},
        {transfrom: 'translateY(-70px)',opacity: 1}
    ],{
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards',
    })
    tempAverage.style.color = '#2b2b2b'
}

function animationBackward() {
    outputDataBox.style.animationFillMode = "backwards";
}