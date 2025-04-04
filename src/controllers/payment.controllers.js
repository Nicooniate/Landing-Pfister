import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "../JS/config.js";

const stripe = new Stripe(STRIPE_PRIVATE_KEY);
console.log('Api Key =', STRIPE_PRIVATE_KEY);

export const createSessionComet = async (req, res) => {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // Solo tarjetas de crédito/débito
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Comet',
                            description: 'Vehículo deportivo compacto con excelente manejo y gran velocidad en carreteras y curvas.',
                        },
                        unit_amount: 17750000, // $177.500,00 USD
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://nicooniate.github.io/Landing-Pfister/',
            cancel_url: 'http://localhost:3000/cancel',
        });
        return res.json(session)
}

export const createSessionComets2 = async (req, res) => {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // Solo tarjetas de crédito/débito
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'CometS2',
                            description: 'Deportivo de alto rendimiento, con aceleración rápida y una conducción precisa y dinámica.',
                        },
                        unit_amount: 45930000, // $459.300,00 USD
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://nicooniate.github.io/Landing-Pfister/',
            cancel_url: 'http://localhost:3000/cancel',
        });
        return res.json(session)
}

export const createSessionComets2C = async (req, res) => {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // Solo tarjetas de crédito/débito
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'CometS2 Cabriolet',
                            description: 'Variante descapotable del Comet S2, una experiencia de conducción al aire libre sin sacrificar rendimiento.',
                        },
                        unit_amount: 64980000, // $649.800,00 USD
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://nicooniate.github.io/Landing-Pfister/',
            cancel_url: 'http://localhost:3000/cancel',
        });
        return res.json(session)
}

export const createSessionAstron = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'], // Solo tarjetas de crédito/débito
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Astron',
                        description: 'SUV de lujo con una combinación ideal de confort, velocidad y capacidad en terrenos difíciles.',
                    },
                    unit_amount: 18440000, // $184.400,00 USD
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://nicooniate.github.io/Landing-Pfister/',
        cancel_url: 'http://localhost:3000/cancel',
    });
    return res.json(session)
}

export const createSessionNeon = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'], // Solo tarjetas de crédito/débito
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Neon',
                        description: 'Sedán eléctrico con gran aceleración, tecnología avanzada y un diseño futurista.',
                    },
                    unit_amount: 28240000, // $282.400,00 USD
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://nicooniate.github.io/Landing-Pfister/',
        cancel_url: 'http://localhost:3000/cancel',
    });
    return res.json(session)
}

export const createSessionCometSR = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'], // Solo tarjetas de crédito/débito
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Comet SR',
                        description: 'Variante más aerodinámica y ligera del Comet, con gran velocidad y estabilidad en curvas.',
                    },
                    unit_amount: 30940000, // $309.400,00 USD
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://nicooniate.github.io/Landing-Pfister/',
        cancel_url: 'http://localhost:3000/cancel',
    });
    return res.json(session)
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implementacion para pasar los limites de STRIPE de USD $1.000.000 en total de precios de productos.

// export const createSession = async (req, res) => {
//     try {
//         // Precios corregidos (en centavos correctos)
//         const products = [
//             { name: 'Comet', description: 'Pfister Comet', price: 117500 },
//             { name: 'Comet S2', description: 'Pfister Comet S2', price: 459300 },
//             { name: 'Comet S2 Cabrio', description: 'Pfister Comet S2 Cabrio', price: 649800 },
//             { name: 'Astron', description: 'Pfister Astron', price: 184400 },
//             { name: 'Neon', description: 'Pfister Neon', price: 282400 },
//             { name: 'Comet SR', description: 'Pfister Comet SR', price: 309400 }
//         ];

//         let totalAmount = 0;
//         const maxAmount = 99999999; // Máximo permitido por Stripe (en centavos)

//         // Filtrar productos hasta que el total no supere el límite de Stripe
//         const selectedProducts = [];
//         for (const product of products) {
//             if (totalAmount + product.price <= maxAmount) {
//                 selectedProducts.push(product);
//                 totalAmount += product.price;
//             } else {
//                 break; // Detener cuando se alcance el límite
//             }
//         }

//         if (selectedProducts.length === 0) {
//             return res.status(400).json({ error: "Los precios superan el límite permitido." });
//         }

//         // Crear la sesión de pago
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: selectedProducts.map(product => ({
//                 price_data: {
//                     currency: 'usd',
//                     unit_amount: product.price,
//                     product_data: {
//                         name: product.name,
//                         description: product.description
//                     }
//                 },
//                 quantity: 1
//             })),
//             mode: 'payment',
//             success_url: 'http://localhost:3000/success',
//             cancel_url: 'http://localhost:3000/cancel'
//         });

//         return res.json(session);
//     } catch (error) {
//         console.error("Error creando la sesión de Checkout:", error);
//         return res.status(500).json({ error: error.message });
//     }
// };

