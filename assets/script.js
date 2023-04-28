//Setting global Variables for fetch
var myApiKey = "a034c363e29b7ec6ac1cc12e21685483"
var cityName= ""
var cityInput = document.querySelector("#userInput")
console.log(cityInput.value)
//&units=imperial turns to imperial measurments


//Getting element where todays forecast will be displayed
var forecastEL = document.getElementById("todaysForecast")


// Fetch to get and display the current conditions(temperature, wind speed,humidity)  from Open Weather Maps
function weatherFetch(cityName) { 
	var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}&units=imperial`

fetch(url)          
.then(response => response.json())
.then(function (data){
// console.log(data, "hey!")
	var heading =document.createElement ('h2')
	heading.textContent=` ${data.name} ${dayjs().format("M/D/YYYY")}` 
	forecastEL.appendChild(heading)
	var temp = document.createElement("ul")
	temp.textContent = "Temp: " + data.main.temp + " ° F"
	forecastEL.appendChild(temp)
	var wind = document.createElement("ul")
	wind.textContent = "Wind: " + data.wind.speed + " MPH"
	forecastEL.appendChild(wind)
	var humidity =document.createElement("ul")
	humidity.textContent = "Humidity: " + data.main.humidity + " %"
	forecastEL.appendChild(humidity)
	addToHistory(data.name)
	
});
}


var searched = [];
var searchBtn = document.querySelector('#searchBtn');
var searchResults = document.querySelector('#history');
// var cityInput = document.querySelector("#userInput")

function displayHistory (){
searchResults.innerHTML= "";
for (var i = searched.length-1; i>=0 ; i--){
	var button =document.createElement('button')
	button.setAttribute("type", "button");
	button.setAttribute('class', "history-btn");
	button.setAttribute('data-search', searched[i]);
	button.textContent=searched[i];
	searchResults.append(button);
}
}

function addToHistory (search){
if (searched.indexOf(searched) !== -1) {
	return
}
searched.push (search);
localStorage.setItem ("cities", JSON.stringify(searched))
displayHistory();
}

function loadHistory () {
	var history = localStorage.getItem('cities');
	if (history){
		searched=JSON.parse(history)
	}
	displayHistory();
}
// Makes history appear
loadHistory();

// ***Trigger button on click get value from city and add to fetch
searchBtn.addEventListener('click' , function(event){
	event.preventDefault();
	var city = cityInput.value
	console.log (city)
	weatherFetch(city);
  // save to localstorage
});		
 
var lat= 41.85;
var lon= -87.65;
var fiveDayApi = "e007908c4d4214ff602037dcfe521a1e"
var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${fiveDayApi}&units=imperial`


// var fiveDayBox =document.getElementById('fiveDay')
// function weatherFetch() { 

	fetch(fiveDayUrl)          
	.then(response => response.json())
	.then(function (data){
	console.log(data, "hey!")
		// todayEl.textContent = "Temperature " + data.main.temp
		// var wind = document.createElement("li")
		// wind.textContent = "Wind " + data.wind.speed
		// todayEl.appendChild(wind)
		// var humidity =document.createElement("li")
		// humidity.textContent = "Humidity " + data.main.humidity
		// todayEl.appendChild(humidity)
	 //fiveDay(data)	
	});
	



