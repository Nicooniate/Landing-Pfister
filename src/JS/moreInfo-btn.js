//Variables para llamar al button.

let comet = document.getElementById("comet");
let cometS2 = document.getElementById("cometS2");
let cometS2Cabrio = document.getElementById("cometS2Cabrio");
let astron = document.getElementById("astron");
let neon = document.getElementById("neon");
let cometSr = document.getElementById("cometSr");

//Variables para llamar al modal.

let closeModal = document.getElementById("closeModal");
let closeModal2 = document.getElementById("closeModal2");
let closeModal3 = document.getElementById("closeModal3");
let closeModal4 = document.getElementById("closeModal4");
let closeModal5 = document.getElementById("closeModal5");
let closeModal6 = document.getElementById("closeModal6");

let modalComet = document.getElementById("cometModal");
let modalS2Comet = document.getElementById("cometS2Modal");
let modalS2CabrioComet = document.getElementById("cometS2CabrioModal");
let modalAstron = document.getElementById("astronModal");
let modalNeon = document.getElementById("neonModal");
let modalCometSR = document.getElementById("cometSRModal");

//Funciones que escuchan el evento CLICK y envian el modal

comet.addEventListener("click", (e) => {
  e.preventDefault();
  modalComet.classList.add("modal--show");
});

cometS2.addEventListener("click", (e) => {
  e.preventDefault();
  modalS2Comet.classList.add("modal--show");
});

cometS2Cabrio.addEventListener("click", (e) => {
  e.preventDefault();
  modalS2CabrioComet.classList.add("modal--show");
});

astron.addEventListener("click", (e) => {
  e.preventDefault();
  modalAstron.classList.add("modal--show");
});

neon.addEventListener("click", (e) => {
  e.preventDefault();
  modalNeon.classList.add("modal--show");
});

cometSr.addEventListener("click", (e) => {
  e.preventDefault();
  modalCometSR.classList.add("modal--show");
});

//Funciones que escuchan el evento CLICK para cerrar el modal

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modalComet.classList.remove("modal--show");
});

closeModal2.addEventListener("click", (e) => {
  e.preventDefault();
  modalS2Comet.classList.remove("modal--show");
});

closeModal3.addEventListener("click", (e) => {
  e.preventDefault();
  modalS2CabrioComet.classList.remove("modal--show");
});

closeModal4.addEventListener("click", (e) => {
  e.preventDefault();
  modalAstron.classList.remove("modal--show");
});

closeModal5.addEventListener("click", (e) => {
  e.preventDefault();
  modalNeon.classList.remove("modal--show");
});

closeModal6.addEventListener("click", (e) => {
  e.preventDefault();
  modalCometSR.classList.remove("modal--show");
});
