//Setting global Variables for fetch
var myApiKey = "a034c363e29b7ec6ac1cc12e21685483"
var cityName= "Philadelphia"
//&units=imperial turns to imperial measurments
var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}&units=imperial`

var todayEl = document.getElementById("today")
//me
var forecastEL = document.getElementById("forecast")

// Fetch to get and display the current conditions(temperature, wind speed,humidity)  from Open Weather Maps

function weatherFetch() { 

fetch(url)          
.then(response => response.json())
.then(function (data){
// console.log(data, "hey!")
	todayEl.textContent = "Temperature " + data.main.temp
	var wind = document.createElement("li")
	wind.textContent = "Wind " + data.wind.speed
	todayEl.appendChild(wind)
	var humidity =document.createElement("li")
	humidity.textContent = "Humidity " + data.main.humidity
	todayEl.appendChild(humidity)
 //fiveDay(data)	
});
}
weatherFetch()

//TO DO call function 
// get data from api for each day 
// create an element that includes date temp etc, and icon

//me

var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${myApiKey}&units=imperial`



//Trigger button on click
// var input = document.getElementById("userInput").value;
// input.addEventListener("keypress", function(event) {

// 	if (cityName.key === "Enter") {
// 	  event.preventDefault(cityName);
// 	  document.getElementById("searchBtn").click();
// 	}
//   });


// //Function to Show history after a user has searched for a city
// var searchHistory = [];
// var searchHistoryContainer = document.querySelector("#history")

// // Function to update history in local storage then updates displayed history.
// function appendToHistory(search) {

// // If there is no search term return the function
// 	if (searchHistory.indexOf(search) !== -1) {
// 	  return;
// 	}
// 	searchHistory.push(search);
  
// 	localStorage.setItem('search-history', JSON.stringify(searchHistory));
// 	showHistory();
//   }
  
//   // Function to get search history from local storage
//   function initSearchHistory() {
// 	var storedHistory = localStorage.getItem('search-history');
// 	if (storedHistory) {
// 	  searchHistory = JSON.parse(storedHistory);
// 	}
// 	showHistory();
//   }
  
// // Function to Show the history as a button
// function showHistory () {
// 	searchHistoryContainer.innerHTML="";
// 	for (var i =searchHistory.length-1; i>=0; i--){
// 		var btn = document.createElement("button");
// 		btn.setAttribute("type", "button");
// 		btn.classList.add("history-btn", "btn-history");
// 		btn.setAttribute("data-search", searchHistory[i]);
// 		btn.textContent=searchHistory[i];
// 		searchHistoryContainer.append(btn)
// 	}
// }


// $ document.getElementById("searchBtn"), ".searchHistory", function(e) {
//     e.preventDefault();
//     var search = $(this).text();
//     doSearch(search);



	//fetch('https://api.openweathermap.org/data/2.5/weather?q='+userInput.value+'&appid=a034c363e29b7ec6ac1cc12e21685483&contentType=json')          
	//.then(response => response.json())
	//.then(data => console.log(data));
   
