# BiciMAD para Pebble

Aplicación para Pebble Watch donde puedes encontrar las estaciones a menos de 1KM de tu posición actual. La aplicación obtiene tu posición actual a través del GPS del teléfono al que tu Pebble esté conectado, y gracias a la [API no Oficial de Bicimad](https://github.com/cicloon/bicimad-api) se muestran las estaciones ordenadas por tu cercanía a ellas.

**La [API no Oficial de Bicimad](https://github.com/cicloon/bicimad-api) refresca los datos cada 15 minutos, así que ese es el intervalo máximo de tiempo que los datos pueden estar desactualizados. Si es necesario, pedidlo e intentaré utilizar la API oficial con los datos en tiempo real, pero quería hacer algo sencillo y rápido y esta fue la mejor opción.**

Programada en Javascript, utilizando la librería Pebble.JS y CloudPebble

**Capturas de Pantalla**
--------------------
![Screenshot #1](https://raw.githubusercontent.com/jesusbotella/PebbleBiciMAD/master/screenshots/pebble_main.png?token=AEHp8L1lSvRjQ1kdOQE7IrJuNGAcFb1Oks5V8WUKwA%3D%3D) ![Screenshot #2](https://github.com/jesusbotella/PebbleBiciMAD/blob/master/screenshots/pebble_detail.png?raw=true) ![Screenshot #3](https://github.com/jesusbotella/PebbleBiciMAD/blob/master/screenshots/pebble_detail2.png?raw=true) ![Screenshot #4](https://github.com/jesusbotella/PebbleBiciMAD/blob/master/screenshots/pebble_address.png?raw=true)

**Próximas Mejoras**
--------------------

- Opciones configurables (Distancia máxima entre posición actual y estación)
- Marcar estaciones como favoritas para que sean encontradas fácilmente

¡Propón tu las nuevas mejoras que se te ocurran!

**Desarrollado por**
--------------------
Jesús Botella · jesus.botella@gmail.com

[![Twitter][2]][1] [![LinkedIn][4]][3]

  [1]: http://twitter.com/sn00b
  [2]: https://github.com/jesusbotella/PebbleBiciMAD/blob/master/social_icons/twitter.png?raw=true
  [3]: https://linkedin.com/in/jesusbotella
  [4]: https://github.com/jesusbotella/PebbleBiciMAD/blob/master/social_icons/linkedin.png?raw=true
  
----------

¿Te ha resultado útil la aplicación y quieres donar algo? [paypal.me/jesusbotella](https://paypal.me/jesusbotella)
