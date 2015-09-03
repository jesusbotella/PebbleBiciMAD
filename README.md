# BiciMAD para Pebble

Aplicación para Pebble Watch donde puedes encontrar las estaciones a menos de 1KM de tu posición actual. La aplicación obtiene tu posición actual a través del GPS del teléfono al que tu Pebble esté conectado, y gracias a la [API no Oficial de Bicimad](https://github.com/cicloon/bicimad-api) se muestran las estaciones ordenadas por tu cercanía a ellas.

**La [API no Oficial de Bicimad](https://github.com/cicloon/bicimad-api) refresca los datos cada 15 minutos, así que ese es el intervalo máximo de tiempo que los datos pueden estar desactualizados. Si es necesario, pedirlo e intentaré utilizar la API oficial con los datos en tiempo real, pero quería hacer algo sencillo y rápido y esta fue la mejor opción.**

Programada en Javascript, utilizando la librería Pebble.JS y CloudPebble

**Capturas de Pantalla**
--------------------
![Screenshot #1](https://raw.githubusercontent.com/jesusbotella/PebbleBiciMAD/master/screenshots/pebble_main.png?token=AEHp8L1lSvRjQ1kdOQE7IrJuNGAcFb1Oks5V8WUKwA%3D%3D) ![Screenshot #2](https://github.com/jesusbotella/PebbleBiciMAD/blob/master/screenshots/pebble_detail.png?raw=true)

**Próximas Mejoras**
--------------------

- Incluir más información en el detalle de cada estación.
- Opciones configurables (Distancia máxima entre posición actual y estación)
- Marcar estaciones como favoritas para que sean encontradas fácilmente

¡Propón tu las nuevas mejoras que se te ocurran!
