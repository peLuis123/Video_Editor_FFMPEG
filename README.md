Automatizador de Video con FFMPEG y YouTube-DL
Este proyecto es un automatizador de edición de video desarrollado en TypeScript. Permite a los usuarios realizar diversas operaciones de edición, como cortar, unir y aplicar filtros a clips de video. Además, incluye una funcionalidad de scrapping que recopila enlaces de videos desde una página web específica para posteriormente descargarlos utilizando YouTube-DL.

Instalación
Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu sistema. Luego, sigue estos pasos para instalar el proyecto:

Clona este repositorio en tu máquina local.

Instala las dependencias ejecutando el siguiente comando:


npm install
Asegúrate de tener FFMPEG instalado en tu sistema. Puedes descargarlo e instalarlo desde el sitio web oficial: https://ffmpeg.org/

Además, necesitarás tener YouTube-DL instalado de manera global en tu sistema. Puedes instalarlo ejecutando el siguiente comando:


npm install -g youtube-dl

Uso
Una vez completada la instalación, puedes utilizar los siguientes comandos para ejecutar el automatizador de video:

Para ejecutar el backend y poder utilizar las rutas de edición de video:

npm run dev
Para realizar el scrapping de enlaces de video desde una página web:

npm run scrapp
Nota: El comando npm run scrapp utilizará Puppeteer para acceder a la página web "https://www.reddit.com/r/TikTokCringe/" y recopilar los enlaces de los videos. A continuación, utilizará YouTube-DL para descargar los videos encontrados. Ten en cuenta que este proceso puede llevar algún tiempo, dependiendo de la cantidad de videos que se encuentren en la página.

Una vez que hayas realizado el scrapping y descargado los videos, podrás utilizar las rutas proporcionadas por el backend para realizar las siguientes operaciones de edición de video:

Ruta para cortar un video:
Envía una solicitud POST a la ruta /cutvideo con los siguientes parámetros en el cuerpo de la solicitud:


{
  "nameVideo": "nombre_del_video.mp4",
  "startTime": "00:00:10", // Hora de inicio del corte en formato HH:mm:ss
  "endTime": "00:00:30", // Hora de finalización del corte en formato HH:mm:ss
  "numberCpusAvailables": 4 // (Opcional) Número de CPUs disponibles para acelerar el proceso de corte
}
Ruta para unir varios videos en uno solo:
Envía una solicitud POST a la ruta /joinVideo con el siguiente parámetro en el cuerpo de la solicitud:


{
  "nameTxt": "lista_de_videos.txt" // Archivo de texto que contiene la lista de videos a unir
}
El archivo de texto debe contener una lista de nombres de archivos de video, cada uno en una línea separada. Por ejemplo:


video1.mp4
video2.mp4
video3.mp4
Ruta para agregar filtros a un video:
Envía una solicitud POST a la ruta /addFilterVideos con el siguiente parámetro en el cuerpo de la solicitud:


{
  "nameVideo": "nombre_del_video.mp4"
}
Recomendaciones
Antes de utilizar el automatizador, asegúrate de tener una comprensión básica de FFMPEG y YouTube-DL, así como de los formatos de video y codecs compatibles.

Ten en cuenta que algunas operaciones de edición de video pueden requerir una cantidad considerable de recursos del sistema, especialmente al procesar videos largos o en alta resolución.

Considera agregar opciones de configuración y validaciones adicionales al código para mejorar la seguridad y la usabilidad del automatizador.
