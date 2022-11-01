// function addResult(){

//     inputCity = document.getElementById("myInput").value;  
//     historyList = getInfo();
//     var searchCity =$("<div>") 
//     searchCity.attr('id',inputCity) 
//     searchCity.text(inputCity) 
//     searchCity.addClass("h4")

    
//     if (historyList.includes(inputCity) === false){
//         $(".history").append(searchCity)
//     }
//     $(".subtitle").attr("style","display:inline")
//     addInfo(inputCity);
    
// }; 

// Variables for Primary Search Input and Button
var primaryBtn= document.querySelector('.btn btn-primary')
var inputValue = document.querySelector('.inputUser')

//Variables for  Current Weather forecast Output
var cityNameAndDate = document.querySelector('City Name','Current Date');
var temp = document.querySelector('temp');
var wind = document.querySelector('wind');
var humidity = document.querySelector('humidity');

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q= appid=a034c363e29b7ec6ac1cc12e21685483';
  
    //fetch(requestUrl)
    //  .then(function (response) {
    //    return response.json();
    //  })
    //  .then(function (data) {
    //    console.log(data)

//     primaryBtn.addEventListener('click', function(){
//             fetch ('https://api.openweathermap.org/data/2.5/weather?q= appid=a034c363e29b7ec6ac1cc12e21685483'+inputValue.value)
  
//             //('https://api.openweathermap.org/data/2.5/weather?q='+inputUser.value+'&
//            // appid=a034c363e29b7ec6ac1cc12e21685483')  
//             .then(function (response) {
//                 return response.json();
//               })
//             .then(function (data) {
//                 console.log(data)
//         }
//primaryBtn.addEventListener('click', getApi);

        // Code from Fetch tutorial Video       

//fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputUser.value+'&
//appid=a034c363e29b7ec6ac1cc12e21685483')
//    .then(response=> response.json())
//    .then(data => console.log(data))
// fetch(('https://api.openweathermap.org/data/2.5/weather?q='+userInput.value+'&appid=a034c363e29b7ec6ac1cc12e21685483&contentType=json"{

// .then(response => response.json()){
//   console.log(response);
// });
// .catch(err => alert("Wrong City Name!")){
//   console.error(err);
// });

// //Variables for  Current Weather forecast Output
// var currentCity = $(`
//   <h4 id="City, Date">
//    ${cityWeatherResponse.name} ${today} <img src="${iconURL}" alt="${cityWeatherResponse.weather[0].description}" />
//   </h4>
//  <p id="temp">${cityWeatherResponse.main.temp} °F </p>
//  <p id ="wind">${cityWeatherResponse.wind.speed} MPH</p>
//  <p id ="humidity">${cityWeatherResponse.main.humidity}\%</p>
function showCity() {
	var input = document.getElementById("userInput").value;
	historyList = getInfo();
	var searchCity =$("<h4>") 
	 

	if (historyList.includes(input) === false){
        $(".history").append(searchCity)
		addInfo(input);
    
} 
//  `);
 //api for the fetch request
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+userInput.value+'&appid=a034c363e29b7ec6ac1cc12e21685483&contentType=json')          
 .then(response => response.json())
 .then(data => console.log(data));
}
getApi()

// wHAT i HAVE DONE SO FAR
/Setting global Variables for fetch
var myApiKey = "a034c363e29b7ec6ac1cc12e21685483"
var cityName= "Philadelphia"
var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}`


// Fetch to get and display the current conditions on Open Weather Maps

fetch(url)          
.then(response => response.json())
.then(data => console.log(data));

//Trigger button on click
var input = document.getElementById("userInput").value;
input.addEventListener("keypress", function(event) {
	if (cityName.key === "Enter") {
	  event.preventDefault(cityName);
	  document.getElementById("searchBtn").click();
	}
  });


// Function to display Current City Weather (temperature, the wind speed, and the humidity)
function getCity() {
	$.ajax({
		dataType: "jsonp",
		url: url,
		jsonCallback: 'jsonp',
		data: { q: cityName },
		cache: false,
		success: function (data) {
		  callback(data.main.temp);
		}
	  });
	}

//Function to Show history after a user has searched for a city
var searchHistory = [];
var searchHistoryContainer = document.querySelector("#history")

// Function to update history in local storage then updates displayed history.
function appendToHistory(search) {
	// If there is no search term return the function
	if (searchHistory.indexOf(search) !== -1) {
	  return;
	}
	searchHistory.push(search);
  
	localStorage.setItem('search-history', JSON.stringify(searchHistory));
	showHistory();
  }
  
  // Function to get search history from local storage
  function initSearchHistory() {
	var storedHistory = localStorage.getItem('search-history');
	if (storedHistory) {
	  searchHistory = JSON.parse(storedHistory);
	}
	showHistory();
  }
  

function showHistory () {
	searchHistoryContainer.innerHTML="";
	for (var i =searchHistory.length-1; i>=0; i--){
		var btn = document.createElement("button");
		btn.setAttribute("type", "button");
		btn.classList.add("history-btn", "btn-history");
		btn.setAttribute("data-search", searchHistory[i]);
		btn.textContent=searchHistory[i];
		searchHistoryContainer.append(btn)
	}
}

// $ document.getElementById("searchBtn"), ".searchHistory", function(e) {
//     e.preventDefault();
//     var search = $(this).text();
//     doSearch(search);

}

	//fetch('https://api.openweathermap.org/data/2.5/weather?q='+userInput.value+'&appid=a034c363e29b7ec6ac1cc12e21685483&contentType=json')          
	//.then(response => response.json())
	//.then(data => console.log(data));
   