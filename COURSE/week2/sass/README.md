<h1>SASS</h1>

Para trabajar SASS con KOALA
1. Creamos el archivo css en carpeta de css.
2. creamos el archivo scss en la carpeta sass (darle el mismo nombre que al de css).
3. Abrimos Koala. Seleccionamos el archivo scss. Se pondrá de color verde. 
4. clickar en compilar
5. Ahora escribir el código en el archivo scss y se irá escribiendo en el css.

1- Necesitamos instalar [`Koala`](http://koala-app.com/)

2- Necesitamos [`GULP`](http://ryanchristiani.com/getting-started-with-gulp-and-sass/) o [`WEBPACK`](http://eng.localytics.com/faster-sass-builds-with-webpack/)

3- Tools:

1. [`Recomendaciones`](http://noeticforce.com/best-sass-tools-for-modern-web-design)

2.[`SASSMEISTER`](https://www.sassmeister.com/)
3.[`Sass.js`](http://sass.js.org/)
4.[`code open`](https://codepen.io/pen)

<h3>Code Comments</h3>

Usaremos //

<h3>Anidar selectores</h3>

En CSS

```css
.foo {
  background: orange; }
  .foo p {
    color: blue;
    font-size: 14px;
    font-weight: bold; }
```

en SCSS

```css
.foo {
  background: orange;
  p {
    color: blue;
    font-size: 14px;
    font-weight: bold;
  }
}
```

<h3>Propiedades anidadas</h3>

ejemplo

En CSS:

```css
a {
  color: blue;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }
```

en SCSS

```css
a {
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
```

<h3>Usando variables</h3>

Es muy util para cosas como colores por ejemplo

ej:

SCSS

```css
$border-color: #ccc;

.box {
  border: 1px solid $border-color;
}
```

CSS

```
.box {
  border: 1px solid #cccccc; }
```







