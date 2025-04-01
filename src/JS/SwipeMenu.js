// let enlaces = document.getElementById('enlaces');
// let boton = document.getElementById('icono');
// let contador = true;

// boton.addEventListener('click',swipe)

// function swipe(){
//     if(contador === true){
//         alert("si me llega")
//         enlaces.classList.remove('enlaces uno')
//         enlaces.classList.add('enlaces dos')
//         contador = false;
//     } else {
//         alert("me llega en 2")
//         enlaces.classList.remove('dos')
//         enlaces.classList.add('enlaces uno')
//         contador = true;
//     }
// }

let enlaces = document.getElementById("enlaces");
let boton = document.getElementById("icono");
let contador = true;

boton.addEventListener("click", swipe);

function swipe() {
  if (contador === true) {
    // Corregido: ahora compara en lugar de asignar
    enlaces.classList.remove("uno"); // Solo remover 'uno'
    enlaces.classList.add("dos"); // Agregar 'dos'
    icono.innerHTML = "Cerrar";
    contador = false;
  } else {
    enlaces.classList.remove("dos");
    enlaces.classList.add("uno"); // Agregar 'uno'
    icono.innerHTML = "Menú";
    contador = true;
  }
}
