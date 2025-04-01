import express from "express"; //importo express
import paymentRoutes from "../routes/payments.routes.js"; // Importo la las rutas de pago desde mi archivo payments.router.js
import { PORT } from "./config.js";
import path from 'path'

const app = express(); // inicio express

app.use(express.json()); // La app por defecto lee Json

app.use(paymentRoutes); // La app por defecto lee las rutas de pago

app.use(express.static(path.resolve(''))) // path.resolve hace q al querer colocar una ruta de algun archivo busque desde el incio del proyecto y no dentro de la misma carpeta

app.listen(PORT); // incio mi app en el port 3000
console.log("Server on port", PORT);
