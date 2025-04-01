import {config} from 'dotenv' // se importa dotenv para el archivo pueda ller variables de entorno  
config()

export const PORT = 3000;

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY // Variable de entorno de la Api Key