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

var database = firebase.database();

// Zomato Button Listener, when the zomatoButton is pressed, run the following code.
$("#foodSearch").on("click", function () {

  // Build the zomato URL.
  var zomatoApiKey = "&apikey=a582a844aec19f715b35eb3bf2d2580a";
  var baseURL = "https://developers.zomato.com/api/v2.1/search?=";
  var zomatoSearch = $("#typeFood").val();
  var zomatoCount = "&count=10";
  var zomatoUrl = baseURL + zomatoSearch + zomatoApiKey + zomatoCount;

  var exampleURL = "https://developers.zomato.com/api/v2.1/search?q=pizza" + zomatoApiKey + zomatoCount;

  //log out the zomatoUrl.
  console.log(zomatoUrl);

  // ajax call to the zomato API
  $.ajax({
    url: zomatoUrl,

    // Below is used to test the hardcoded exampleURL.
    url: exampleURL,
    // url: zomatoUrl,
    method: "GET"
  }).then(function (response) {

    // Log out the response from zomato
    console.log(response);

    for (var i = 0; i < response.restaurants.length; i++) {
      console.log(response.restaurants[i].restaurant.name);
      var restaurant = response.restaurants[i].restaurant;
      var restaurantName = restaurant.name;
      var restaurantLink = restaurant.url;

      //TODO: need to update line below

      var physicalAddress = restaurant.user_rating.aggregate_rating;
      console.log(restaurantName, restaurantLink, physicalAddress)

      // create a card an append it to the page.

      addToPage(restaurantName, restaurantLink, physicalAddress);

    }
  });
});

function addToPage(name, link, address) {

  // create variables
  var divToAppendTo = $("#emptyDiv");

  var newDiv = $("<div>");
  newDiv.attr({
    class: "card horizontal"
  })
  var newDiv1 = $("<div>");
  newDiv1.attr({
    class: "card-stacked"
  });
  var newDiv2 = $("<div>");
  newDiv2.attr({
    class: "card-content"
  });

  var pPlace = $("<p>").text("Restaurant: " + name);
  var pLink = $("<p>").text("Link: ");
  var aLink = $("<a>").attr({href: link});
  aLink.text(link);
  pLink.append(aLink);
  var pAddress = $("<p>").text("Address: " + address);
  var button = $("<button>");
  button.attr({
    class: "btn waves-effect waves-light right",
    type: "submit",
    name: "action"
  });
  button.text("Add to list");

  newDiv2.append(pPlace, pLink, pAddress, button);
  newDiv1.append(newDiv2)
  newDiv.append(newDiv1);
  divToAppendTo.append(newDiv);


}

// Button for searching the open brewery API
$('#beerSearch').on('click', function () {
  // Build the Open Brewery URL
  var bURL = 'https://api.openbrewerydb.org/breweries?';
  var typeBeer = $('#typeBeer').val().trim();
  var brewURL = bURL + typeBeer;

  // Log out the queryURL
  console.log(brewURL);

  // ajax call to the open brewery API
  $.ajax({
    url: brewURL,
    method: 'GET'
  }).then(function (results) {

    // Log out the response from Open Brewery
    console.log(results);
  });

});