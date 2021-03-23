/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import AuthState from './src/contexts/auth/AuthState';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY);

export const wrapRootElement = ({ element }) => {
  return (
    <Elements stripe={stripePromise}>
      <AuthState>{element}</AuthState>
    </Elements>
  );
}
