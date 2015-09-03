var UI = require('ui');

function showDetails(station) {
  var station_data = [
    { title: 'Dirección', subtitle: station.direccion },
    { title: 'Activo', subtitle: boolToSpanish(station.activo) },
    { title: 'Bicicletas Libres', subtitle: station.libres },
    { title: 'Luz', subtitle: boolToSpanish(station.luz) },
    { title: 'Latitud', subtitle: station.latitud },
    { title: 'Longitud', subtitle: station.longitud }
  ];
  
  var details_menu = new UI.Menu({
    sections: [{
      title: station.nombre,
      items: station_data
    }]
  });
  
  details_menu.show();
  
  details_menu.on('select', function(e) {
    if (e.itemIndex !== 0) return;
    
    showCard('Dirección', station.direccion);
  });
}

function showCard(title, subtitle) {
  var card = new UI.Card({ title: title, body: subtitle });
  card.show();
}
    
function boolToSpanish(bool) {
  if (bool) return 'Sí';
  else return 'No';
}
    
this.exports = {
  showDetails: showDetails
};