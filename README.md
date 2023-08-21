# Muestra en el otro HTML!

Escribe el código necesario en _js/index.js_ y en _js/data.js_ para que en _index.html_ se pueda ingresar un dato al localStorage y el mismo se pueda visualizar al abrir _data.html_ (el mismo debe verse en la página, sin usar alerts).

A continuación tienes un fragmento de código con ejemplos de cómo usar el localStorage, aunque puedes hallar más info en [Mozila](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage):

// Accedemos al valor asociado a "example"
// que devolverá null (nulo) ya que no hay nada cargado
console.log(localStorage.getItem("example"));

// Guardamos un valor cualquiera asociado a la clave "example"
// (notar que siempre debe almacenarse en String)
localStorage.setItem("example", "example value");

// Mostramos que ahora sí hay un valor asociado
console.log(localStorage.getItem("example"));

// Eliminamos el elemento asociado a "example"
localStorage.removeItem("example");

// Vemos que nuevamente es null
console.log(localStorage.getItem("example"));
