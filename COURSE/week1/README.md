<h1>SKYLAB CODERS BOOTCAMP - SUMMER 2017</h1>

<a href="https://skylabcoders.github.io/bootcamp-julio2017/">SLIDES PARA EL BOOTCAMP</a>





<h2>HEMOS VISTO</h2>

<ol>
<li> Herramientas de trabajo</li>
<li> Sublime Text. cómo instalar plugins (command + shift + p. Package control)</li>
<li> Command line</li>
<li> Markdown</li>
</ol>
<br>


<h3>COMANDOS CONSOLA</h3> 

Para acceder al terminal:
```
    
    1. cmd + space
    2. Escribir "terminal"
    
```

<br>

##PARA PANTALLA PARTIDA EN SUBLIME
```
command + alt + 1 (o 2, 3...depende del num de ventanas)
```


<h3>GIT</h3>


```
    1. Ir a la ruta
    2. git init
    3. git add --all
    4. git commit -m "primer commit"
    5. git push -u
```
<br>
<br>
<br>




## <h3>EN EL TERMINAL</h3>


**pwd    ➡** nos dice donde está la carpeta ("print working directory")

**ls     ➡** usarlo después de pwd, para saber en l

**ls -l  ➡** te lista todos los archivos y directorios como una tabla 

**cd ➡ cd ..** »changue directory. 
<ol>
    <li>primero pondríamos la nueva ruta que quisiésemos
ej: cd jan/memory</li>
    <li>Luego para ver el working directory 
cd ..
Ponemos cd .. porque lo que hace es subir un directorio </li>
</ol> 
<br>

**man ls ➡** es como un «help». Te dice todo lo que puedes hacer

**quit ➡** para salir del man

**mkdir ➡** Crea una nueva dirección en la working directory.(«make directory»)

**touch ➡** Crea un nuevo archivo en el working directory

**cd/ ➡** (al poner la barra, es la raíz, con lo que iriamos a la raíz del directorio)

**echo ➡<** permite que se muestre un valor en la pantalla

**less ➡** es un comando que te permite visualizar de forma encadenada un fichero

**subl ➡**

**rm ➡**(remove) para borrar un fichero

**clear ➡**para limpiar la consola
**echo➡** Hola > readme  (para grabar el readme usamos el simbolo > y ponemos el nombre del archivo que queremos crear)

<br>

<h2>MARKDOWN EN GITHUB</h2>
<a href="https://guides.github.com/features/mastering-markdown/">Tutorial1</a>

<a href="https://guides.github.com/features/mastering-markdown/">Tutorial2</a>
<table><td>Hola mundo</td></table>
**Para tachar algo ➡** ejemplo: 
~~Hola que tal~~




**Para poner iconos de mac ➡**
```
CMD + ALT + SPACE 
```

**para poner cosas con estilos ➡** 
```
podemos usar tags de html. Para poner un link, también podemos usar a href

```

**Para pantalla partida** 
```
command + alt + 1 (o 2, 3...depende del num de ventanas)
```

Cuando trabajemos en git, para cualquier comando hay que poner adelante siempre git.
<br>

<h2> REPOSITORIOS Y TRABAJAR CON GIT LOCAL</h2>
Hay tres estados.
```
1. * Working directory (directorio de trabajo)
2. * Stage area (previous directory, before to do commit)
3. * Repo "git commit -m "mensaje descriptivo" (Para añadir al repositorio)
```
<br>

<ul>
    <li><strong>git add</strong> ➡ lo que modifiques, se añade en local. Cuando hagamos un git add, el nombre del archivo a modificar lo pondremos en mayúscula. 
    Ej: git add NOMBRE ARCHIVO.extension</li>
    <li><strong>git commit -m</strong>  "comentario" ➡ para guardar. Siempre será Git add y despueés git commit -m ""
    </li>
    <li><strong>git status</strong> ➡ para ver el estado</li>
    <li><strong>git rm --cached README</strong> para guardar el archivo modificado</li>
</ul>


**GIT REMOTO**
```
git push ➡ para subirlo
git pull ➡ para bajar
```


<strong>working copy</strong> ➡ nuestros ficheros en los que trabajamos.
<strong>git init</strong> ➡ ha creado la carpeta donde va a almacenar todos los cambios que quieras que controle
<strong>git config</strong> ➡ --list
<strong>git log</strong> ➡ para ver el historial de todas las acciones que hemos hecho
##

ESTADOS: 
<strong>modificado➡ </strong>
<strong>untracked➡</strong>

<strong>stage</strong> ➡ Es una etapa previa a consolidar datos
<br>

##

**LINKS EXTERNOS**
<ul>
    <li><a href="http://files.zeroturnaround.com/pdf/zt_git_cheat_sheet.pdf">Git Cheat Sheet</a></li>
    <li><a href="https://docs.emmet.io/cheat-sheet/">Emmet Documentation</a></li>
    <li><a href="https://www.git-tower.com/blog/git-cheat-sheet/">Git Cheat Sheet 2</a></li>
    <li><a href="https://www.kernel.org/pub/software/scm/git/docs/giteveryday.html">giteveryday(7) Manual Page</a></li>
    <li><a href="https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html">Basic Git commands</a></li>
<ul>

