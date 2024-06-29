
const express = require('express');
const path = require('path');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PWs0t2MVRnUbw5KDQDdptLi4GLa1JHg32WTKUm9qklGmJrtLISNgGnvwtKAZsMSpGx6qfoCzgXSa3sKBMkE5XB800zgUMYUGQ');

const app = express();
const PORT = 4000;

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
  }
];

app.use(express.json());
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

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
                    unit_amount: product.price * 100, // Stripe expects amount in cents
                },
                quantity: 1, // Assuming quantity of 1 for each product
            })),
            mode: 'payment',
            success_url: 'http://localhost:3000/success.html',
            cancel_url: 'http://localhost:3000/cancel.html',
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
