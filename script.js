const cityInput = document.querySelector(".cityInput")
const cityDisplay = document.querySelector(".cityDisplay")
const descDisplay = document.querySelector(".descDisplay")
const tempDisplay = document.querySelector(".tempDisplay")
const weatherCard = document.querySelector(".weatherCard")

async function getWeather(){
    event.preventDefault() // Previne que o formulário de refresh
    try{
        const apiKey = "61ed86b33104e74a3ab86c084d742463"
        const city = cityInput.value
        
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
                                .then(response => response.json())
        
        displayCard(weather)
                            
    }
    catch{
        console.error('error')
    }
}

function displayCard(weather){
    weatherCard.style.display = 'flex'
    cityDisplay.textContent = weather.name
    tempDisplay.textContent = (weather.main.temp - 273).toFixed(2) + "ºC"
    descDisplay.textContent = weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.slice(1)
    emojiDisp()
}

function emojiDisp(){
    switch(true){
        case()
    }
}