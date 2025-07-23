import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  // Use the correct latest supported version or omit it entirely
  apiVersion: '2025-06-30.basil' as any, // Type override to avoid type conflict
});

export { stripe };
