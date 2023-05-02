//Setting global Variables for fetch
var myApiKey = "a034c363e29b7ec6ac1cc12e21685483"
var cityName= ""
var cityInput = document.querySelector("#userInput")
console.log(cityInput.value)
//&units=imperial turns to imperial measurments


//Getting element where todays forecast will be displayed
var forecastEL = document.getElementById("todaysForecast")
var tempOutputEl = document.getElementById("tempOutput")

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

// List elements for output

	var temp = document.createElement("ul")
	temp.textContent = "Temp: " + data.main.temp + " ° F"
	tempOutputEl.appendChild(temp)
	var wind = document.createElement("ul")
	wind.textContent = "Wind: " + data.wind.speed + " MPH"
	tempOutputEl.appendChild(wind)
	var humidity =document.createElement("ul")
	humidity.textContent = "Humidity: " + data.main.humidity + " %"
	tempOutputEl.appendChild(humidity)
	
	addToHistory(data.name)
console.log(data.coord)	
var lon = data.coord.lon;
var lat = data.coord.lat;
fiveDayFetch(lat, lon);
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
 
// var lat= 41.85;
// var lon= -87.65;
// var fiveDayApi = "e007908c4d4214ff602037dcfe521a1e"
// var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${fiveDayApi}&units=imperial`


// var fiveDayBox =document.getElementById('fiveDay')
function fiveDayFetch(lat,lon) { 
	var fiveDayApi = "e007908c4d4214ff602037dcfe521a1e"
	var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${fiveDayApi}&units=imperial`

	fetch(fiveDayUrl)          
	.then(response => response.json())
	.then(function (data){
	// console.log(data, "hey!")

	var  fiveDayContainer = document.querySelector('#fiveDay')
	// create a for loop we use 8 because the date changes every 3 hours thus 8 intervals
	// dt equals data 
	for (var i=0; i<data.list.length;i+=8) {
		console.log(data.list[i])
		var date = data.list[i].dt_txt.split(" ")[0] ;

	// to find the information look in the console log after a search for city is performed
		fiveDayContainer.innerHTML+=`
		<div> 
        	<h4 id="dateTwo">${date}</h4>
        	<ul>
            Temp: ${data.list[i].main.temp}
            Wind: ${data.list[i].wind.speed}
            Humidity: ${data.list[i].main.humidity}

        	</ul>
    	</div>
		`
	}
	
	});
}
	



