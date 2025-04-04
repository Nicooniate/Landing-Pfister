const loader = document.getElementById("loader");

const showLoader = () => loader.classList.remove("hidden");
const hideLoader = () => loader.classList.add("hidden");

const Pcomet = document.getElementById("checkout-Pcomet");
const comets2 = document.getElementById("checkout-comets2");
const comets2C = document.getElementById("checkout-comets2C");
const Pastron = document.getElementById("checkout-Pastron");
const Pneon = document.getElementById("checkout-Pneon");
const PcometSr = document.getElementById("checkout-PcometSr");

async function handleCheckout(endpoint) {
    try {
        showLoader();
        const res = await fetch(`https://landing-pfister.onrender.com/${endpoint}`, {
            method: "POST",
        });
        const data = await res.json();
        window.location.href = data.url;
    } catch (err) {
        console.error("Error al crear sesión de pago:", err);
        alert("Ocurrió un error. Intenta nuevamente.");
    } finally {
        hideLoader();
    }
}

Pcomet.addEventListener("click", () => handleCheckout("create-checkout-session-comet"));
comets2.addEventListener("click", () => handleCheckout("create-checkout-session-s2"));
comets2C.addEventListener("click", () => handleCheckout("create-checkout-session-s2C"));
Pastron.addEventListener("click", () => handleCheckout("create-checkout-session-astron"));
Pneon.addEventListener("click", () => handleCheckout("create-checkout-session-neon"));
PcometSr.addEventListener("click", () => handleCheckout("create-checkout-session-cometSr"));




// const BASE_URL = "https://landing-pfister.onrender.com";

// const Pcomet = document.getElementById("checkout-Pcomet");
// const comets2 = document.getElementById("checkout-comets2");
// const comets2C = document.getElementById("checkout-comets2C");
// const Pastron = document.getElementById("checkout-Pastron");
// const Pneon = document.getElementById("checkout-Pneon");
// const PcometSr = document.getElementById("checkout-PcometSr");

// Pcomet.addEventListener("click", async () => {
//     const res = await fetch(`${BASE_URL}/create-checkout-session-comet`, {
//         method: "POST",
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// comets2.addEventListener("click", async () => {
//     const res = await fetch(`${BASE_URL}/create-checkout-session-s2`, {
//         method: "POST",
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// comets2C.addEventListener("click", async () => {
//     const res = await fetch(`${BASE_URL}/create-checkout-session-s2C`, {
//         method: "POST",
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// Pastron.addEventListener("click", async () => {
//     const res = await fetch(`${BASE_URL}/create-checkout-session-astron`, {
//         method: "POST",
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// Pneon.addEventListener("click", async () => {
//     const res = await fetch(`${BASE_URL}/create-checkout-session-neon`, {
//         method: "POST",
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// PcometSr.addEventListener("click", async () => {
//     const res = await fetch(`${BASE_URL}/create-checkout-session-cometSr`, {
//         method: "POST",
//     });
//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });



// const Pcomet = document.getElementById("checkout-Pcomet");
// const comets2 = document.getElementById("checkout-comets2");
// const comets2C = document.getElementById("checkout-comets2C");
// const Pastron = document.getElementById("checkout-Pastron");
// const Pneon = document.getElementById("checkout-Pneon");
// const PcometSr = document.getElementById("checkout-PcometSr");

// Pcomet.addEventListener("click", async () => {
//     const res = await fetch("/create-checkout-session-comet", {
//         method: "POST",
//     });

//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// comets2.addEventListener("click", async () => {
//     const res = await fetch("/create-checkout-session-s2", {
//         method: "POST",
//     });

//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// comets2C.addEventListener("click", async () => {
//     const res = await fetch("/create-checkout-session-s2C", {
//         method: "POST",
//     });

//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// Pastron.addEventListener("click", async () => {
//     const res = await fetch("/create-checkout-session-astron", {
//         method: "POST",
//     });

//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// Pneon.addEventListener("click", async () => {
//     const res = await fetch("/create-checkout-session-neon", {
//         method: "POST",
//     });

//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

// PcometSr.addEventListener("click", async () => {
//     const res = await fetch("/create-checkout-session-cometSr", {
//         method: "POST",
//     });

//     const data = await res.json();
//     console.log(data);
//     window.location.href = data.url;
// });

