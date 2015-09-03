/**
 * BiciMAD API 
 *
 * Jesús Botella
 */

var ajax = require('ajax');

function getNearestStations(pos, successCallback, errorCallback) {
  ajax(
    {url: 'http://bicimad-api.herokuapp.com/api-v1/locations/nearest?lat=' + pos.coords.latitude + '&long=' + pos.coords.longitude + '&distance=1000', type: 'json'},
    successCallback,
    errorCallback
  );
}

this.exports = getNearestStations;