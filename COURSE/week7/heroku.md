Creamos en mlab una nueva database y user. De user poner admin, admin, admin

En el proyecto, ha de haber carpeta "public" y hemos de crear un json vacío (npm init -y).

Asegurarnos que en el JSON hay creado un punto de start. Seria la linea de start dentro del script. Siempre ha de ser la primera orden dentro de "scripts"

  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

1º hemos de tener el repositorio con el archivo creado
2º hacer git init

3- heroku login  ---> para acceder
4- hacemos el demon de mongo ---> mongod --dbpath ~/ruta
5- heroku create
6- git push heroku master
heroku local web
heroku config:set NODE_ENV=production
Poner en el archivo de app.js la const  port y la const URI
heroku config:set DB_URI=url que te da mlab (hay que cambiar lo que pone db_pasword y db_user por el user y pasword que hayas creado en el mlab)

Si heroku falla, escribir heroku logs para saber dónde

En el app.js poner cualquier puerto menos el 3001


