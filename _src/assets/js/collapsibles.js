//COLLAPIBLE FORM
//Declarar variables para cada parte clickable del formulario.
const tabDesign = document.querySelector('.trigger__design');
const tabFill = document.querySelector('.trigger__fill');
const tabShare = document.querySelector('.trigger__share');

//función para cerrar todos los trozos de formulario.
//cojo la parte clickable, .nexElementSibling selecciona el siguiente hermano (el <div> de abajo que contiene todo el contenido). y lo escondo añadiendo la clase 'hide' que hace 'display: none' para que no quede el hueco en blanco.
function closeAllTabs() {
  tabDesign.nextElementSibling.classList.add('hide');
  tabFill.nextElementSibling.classList.add('hide');
  tabShare.nextElementSibling.classList.add('hide');
}

//Función que abre el trozo de formulario en el que se ha hecho click.
//event.currentTarget para seleccionar donde hemos hecho click, su .nextElementSibling para ir al <div> de abajo con el form, y le quitamos la claes 'hide' para que vuelva a mostrarse.
function openCurrentTab() {
  event.currentTarget.nextElementSibling.classList.remove('hide');
}

//He añadido esto para comprobar si donde hemos hecho click está abierto o cerrado y recoja el valor.
function isOpen() {
  return !event.currentTarget.nextElementSibling.classList.contains('hide');
}

//Funcion que incluye las otra dos.
//Si está abierto lo cerramos (he añadido esta parte para poder cerrar todos los trozos a la vez, se me hacía raro no poder hacerlo. Que al hacer click en algo abierto no se cerrara).
//Si no (está cerrado), cerramos todos y abrimos el que hemos clickado.

function openThisTab(event) {
  if (isOpen(event)) {
    event.currentTarget.nextElementSibling.classList.add('hide');
  } else {
    closeAllTabs(event);
    openCurrentTab(event);
  }
}

//Listeners para todos!
tabDesign.addEventListener('click', openThisTab);
tabFill.addEventListener('click', openThisTab);
tabShare.addEventListener('click', openThisTab);