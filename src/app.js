/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var getLocation = require('location.js');
var getNearestStations = require('bicimad.js');

//Create and Show Loading SplashCard
var splashCard = new UI.Card({
  title: "BiciMAD",
  body: "Obteniendo estaciones más cercanas..."
});

splashCard.show();

// Get nearest stations and show them
getLocation(
  function (pos) { getNearestStations(pos, showStations, errorCallback); },
  errorCallback
);

function showStations(json) {
  var menuData = [];
  var locations = json.locations;

  for (var i = 0; i < locations.length; i++) {
    menuData.push({title: locations[i].nombre, subtitle: Math.round(locations[i].dis) + 'm · ' + locations[i].libres +' libres'});
  }

  var locationsMenu = new UI.Menu({
    sections: [{
      title: 'Estaciones Cercanas',
      items: menuData
    }]
  });

  locationsMenu.show();
  splashCard.hide();

  locationsMenu.on('select', function(event) {
    // Show a card with clicked item details
    var detailCard = new UI.Card({
      title: locations[event.itemIndex].nombre,
      body: locations[event.itemIndex].direccion + '. ' + locations[event.itemIndex].libres +' bicis libres.'
    });

    // Show the new Card
    detailCard.show();
  });
}

function errorCallback (error) {
  var errorMessage;
  
  if (error.message) errorMessage = error.message;
  else errorMessage = error;
  
  var detailCard = new UI.Card({
    title: 'Error',
    body: errorMessage
  });

  // Show the new Card
  detailCard.show();
}
