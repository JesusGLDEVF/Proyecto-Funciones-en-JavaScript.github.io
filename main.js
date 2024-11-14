/* Actividad:
Proyecto Funciones en JavaScript
En este proyecto, practicarás los conceptos básicos de funciones, que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
Entregables
Para este proyecto, debes compartir la URL del archivo en el repositorio creado con la solución del problema descrito. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

Crea un nuevo archivo a tu repositorio en tu equipo local para solucionar el problema planteado.
Crea un 'commit' en tu repositorio con este archivo para guardar los cambios crear una nueva versión de tu repositorio.
Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
Comparte la liga de Github del archivo agregado a tu repositorio con la solución. También puede ser la liga de tu commit.
*/

// Declarar un array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
  librosLeidos.push(titulo);
  console.log(`El libro "${titulo}" ha sido agregado a la lista.`);
}

// Función para mostrar todos los libros que se han leído
function mostrarLibrosLeidos() {
  if (librosLeidos.length === 0) {
    console.log("No has leído ningún libro todavía.");
  } else {
    console.log("Lista de libros leídos:");
    librosLeidos.forEach((libro, index) => {
      console.log(`${index + 1}. ${libro}`);
    });
  }
}

// Libros que he leido
agregarLibro("El juego de Ender");
agregarLibro("La biblioteca de la media noche");
agregarLibro("El problema de los 3 cuerpos");
agregarLibro("La guerra de los mundos");
agregarLibro("El libro de Enok");
agregarLibro("El libro negro de las horas");
agregarLibro("Los cien mil reinos");

// Muestro los libros que leí
mostrarLibrosLeidos();


