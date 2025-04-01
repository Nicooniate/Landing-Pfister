import { Router } from "express"; // Importo Router de express
import { createSessionComet } from "../controllers/payment.controllers.js";
import { createSessionComets2 } from "../controllers/payment.controllers.js";
import { createSessionComets2C } from "../controllers/payment.controllers.js";
import { createSessionAstron } from "../controllers/payment.controllers.js";
import { createSessionNeon } from "../controllers/payment.controllers.js";
import { createSessionCometSR } from "../controllers/payment.controllers.js";

const router = Router(); // Activo Router

// Defino las rutas (Con tipo GET) //

router.post("/create-checkout-session-comet", createSessionComet); // Se crea el check de pago, la funcion envia una respuesta
router.post("/create-checkout-session-s2", createSessionComets2); // Se crea el check de pago, la funcion envia una respuesta
router.post("/create-checkout-session-s2C", createSessionComets2C); // Se crea el check de pago, la funcion envia una respuesta
router.post("/create-checkout-session-astron", createSessionAstron); // Se crea el check de pago, la funcion envia una respuesta
router.post("/create-checkout-session-neon", createSessionNeon); // Se crea el check de pago, la funcion envia una respuesta
router.post("/create-checkout-session-cometSr", createSessionCometSR); // Se crea el check de pago, la funcion envia una respuesta

router.get("/succes", (req, res) => res.redirect('/succes')); // Se completa el pago

router.get("/cancel", (req, res) => res.redirect('/')); // Se cancela el pago

export default router; // Importo Router
