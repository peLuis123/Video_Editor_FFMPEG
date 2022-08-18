
// APLICACION ->

tiktok->

10 videos de tiktok ->

1 -> 3minutos
2 -> 2minutos

cada video -> 30 segundos

1reel -> video que tiene los 10 videos en 1 solo

Javascript
FFMPEG
NodeJs

// FFMPEG
// Asincronia
// 

// con que contamos ? 

// varios videos
// reel video
// add like
// add user request

// APRENDAN LINUX

// terminal
// comandos
// configuraciones -> sistema
// configuraciones -> red
// configuraciones -> disco
// configuraciones -> binarios
// configuraciones -> referencias de archivos


ffmpeg -y -i video_1.mp4 -threads 4 -ss 00:00:00 -to 00:00:20 -async 1 video_1_cut.mp4

//unir video
ffmpeg -f concat -i a.txt -c copy Funny_join.mpeg