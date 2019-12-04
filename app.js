// Web app's Firebase configuration 
var firebaseConfig = {
  apiKey: "AIzaSyCh8JY_njUtjC7bS2jMRPeUncurKX4RP9c",
  authDomain: "project1-a73fb.firebaseapp.com",
  databaseURL: "https://project1-a73fb.firebaseio.com",
  projectId: "project1-a73fb",
  storageBucket: "project1-a73fb.appspot.com",
  messagingSenderId: "812455069447",
  appId: "1:812455069447:web:a1321d67e3413975d327a2"
};
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

// Variables
//==============================================================

// Below is a hardcoded url for testing puposes.

//var exampleURL = "https://developers.zomato.com/api/v2.1/search?q=mcdonalds&apikey=a582a844aec19f715b35eb3bf2d2580a&count=10";

// Zomato Button Listener, when the zomatoButton is pressed, run the following code.
$("#zomatoButton").on("click", function () {

  // Build the zomato URL.
  var zomatoApiKey = "apikey=a582a844aec19f715b35eb3bf2d2580a";
  var baseURL = "https://developers.zomato.com/api/v2.1/search?=";
  var zomatoSearch = $("#zomatoSearch").val();
  var zomatoCount = "&count=10";
  var zomatoUrl = baseURL + zomatoSearch + zomatoApiKey + zomatoCount;

  //log out the zomatoUrl.
  console.log(zomatoUrl);

  // Zomato API Call
  // ajax call to the zomato API
  $.ajax({
    url: zomatoUrl,
    // Below is used to test the hardcoded exampleURL.
    //url: exampleURL,
    url: zomatoUrl,
    method: "GET"
  }).then(function (response) {
    // Log out the response from zomato
    console.log(response);
  });

});
// API for open brewery db
// Constructing a queryURL variable we will use instead of the literal string inside of the ajax method
var title = 'open+brewery';
var queryURL = 'https://api.openbrewerydb.org/breweries?by_city=salt_lake_city';

// ajax call to the open brewery API
$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function (response) {
  console.log(response);
});
// Main Processes
//==============================================================