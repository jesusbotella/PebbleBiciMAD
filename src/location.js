/**
 * Location Helper for Pebble.JS 
 *
 * Jesús Botella
 */

function getLocation(successCallback, errorCallback) {
  var locationOptions = {
    enableHighAccuracy: true, 
    maximumAge: 10000, 
    timeout: 5000
  };
  
  // Make an asynchronous request
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, locationOptions);

}

this.exports = getLocation;