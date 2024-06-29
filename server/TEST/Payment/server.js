



const express = require('express');
const mongoose = require('mongoose');
const stripe = require('stripe')('sk_test_51PWs0t2MVRnUbw5KDQDdptLi4GLa1JHg32WTKUm9qklGmJrtLISNgGnvwtKAZsMSpGx6qfoCzgXSa3sKBMkE5XB800zgUMYUGQ');
const cors = require('cors'); // Import the cors package
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/payments', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define a schema for payment details
const paymentSchema = new mongoose.Schema({
    sessionId: String,
    paymentIntentId: String,
    amountTotal: Number,
    currency: String,
    status: String,
    createdAt: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

// Define products (for example purposes)
const products = [
    { name: 'Product 1', price: 1000 },
    { name: 'Product 2', price: 2000 }
];

// Create a Stripe Checkout session and store details in MongoDB
app.post('/api/products', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: products.map(product => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price * 100,
                },
                quantity: 1,
            })),
            mode: 'payment',
            success_url: 'http://localhost:3000/success.html?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3000/cancel.html',
        });

        // Save session details to MongoDB
        console.log(session)
        const payment = new Payment({
            sessionId: session.id,
            paymentIntentId: session.payment_intent,
            amountTotal: session.amount_total,
            currency: session.currency,
            status: session.status
        });
        await payment.save();

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(4000, () => console.log('Server is running on port 4000'));
