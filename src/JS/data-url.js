const Pcomet = document.getElementById("checkout-Pcomet");
const comets2 = document.getElementById("checkout-comets2");
const comets2C = document.getElementById("checkout-comets2C");
const Pastron = document.getElementById("checkout-Pastron");
const Pneon = document.getElementById("checkout-Pneon");
const PcometSr = document.getElementById("checkout-PcometSr");

Pcomet.addEventListener("click", async () => {
    const res = await fetch("/create-checkout-session-comet", {
        method: "POST",
    });

    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
});

comets2.addEventListener("click", async () => {
    const res = await fetch("/create-checkout-session-s2", {
        method: "POST",
    });

    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
});

comets2C.addEventListener("click", async () => {
    const res = await fetch("/create-checkout-session-s2C", {
        method: "POST",
    });

    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
});

Pastron.addEventListener("click", async () => {
    const res = await fetch("/create-checkout-session-astron", {
        method: "POST",
    });

    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
});

Pneon.addEventListener("click", async () => {
    const res = await fetch("/create-checkout-session-neon", {
        method: "POST",
    });

    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
});

PcometSr.addEventListener("click", async () => {
    const res = await fetch("/create-checkout-session-cometSr", {
        method: "POST",
    });

    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
});

