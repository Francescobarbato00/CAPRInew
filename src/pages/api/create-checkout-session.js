const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { amount, iban } = req.body; // L'importo e il numero di IBAN vengono inviati dal frontend

  try {
    // Creare una sessione di checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['sepa_debit'], // Metodo di pagamento SEPA
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Pagamento Cena Evento',
            },
            unit_amount: amount * 100, // In centesimi, quindi €50 diventa 5000
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
