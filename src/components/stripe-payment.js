import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentInfo = () => {

  const stripe = useStripe();
  const elements = useElements();

  return (
    <form>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );

}

export default PaymentInfo;
