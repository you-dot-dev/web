import React, { useEffect, useContext, useState } from 'react'
import { Link, navigate } from 'gatsby'
import youDevLogo from '../../../assets/you-dev-logo-white.png';
import AuthContext from '../../contexts/auth/AuthContext';

import "../../components/payment.scss";

import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const {
  YOUDEV_API_URL
} = process.env;

const Account = () => {

  const authContext = useContext(AuthContext);
  const { user, getCurrentUser } = authContext;

  const stripe = useStripe();
  const elements = useElements();

  useEffect( () => {

    const init = async () => {
      console.log("about to getCurrentUser() ....");
      await getCurrentUser();
      console.log("got CurrentUser?...");
      console.log("authContext from Account useEffect?", authContext);

      if (!user.isAuthenticated) {
        navigate("/signin");
      }

    }

    init();

    return () => {
      console.log("cleaning up...");
    }
  }, []);

  const [ username, setUsername ] = useState(user.username);
  const [ email, setEmail ] = useState("");
  const [ updated, setUpdated ] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    console.log("any data in here? cardElement:", cardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod.id);
      const attachedCard = await axios({
        method: "POST",
        url: `${YOUDEV_API_URL}/user/add-card`,
        withCredentials: true,
        data: {
          paymentMethodId: paymentMethod.id
        }
      });

      console.log("attached card?:", attachedCard);
    }
  };

  return (
    <div className="account">
      <div className="dashboard brder">
        <h1>{user.username}</h1>
        <hr/>
        <div className="icons">
        <i className="fa fa-user fa-lg fa-fw"></i>
        <Link>Dashboard</Link>
        </div>
        <hr/>
        <div className="icons">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <h3>Account Information</h3>
        </div>
        <hr/>
        <div className="icons">
        <i class="fa fa-recycle" aria-hidden="true"></i>
        <h3>Manage Subscription</h3>
        </div>
        <hr/>
        <div className="icons">
        <i class="fa fa-credit-card" aria-hidden="true"></i> 
        <h3>Payment Information</h3>
        </div>
        <hr/>
        <div className="icons">
        <i class="fa fa-question-circle" aria-hidden="true"></i>
        <h3>FAQ's</h3>
        </div>
        <hr/>
      </div>
      <div className="dashboard-edit brder">
        <div className="welcome">
          <h1>Payment Information</h1>
          <form className="account-info-update" onSubmit={(e) => {handleSubmit(e);}}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    backgroundColor: '#fff',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
            <button type="submit" disabled={!stripe}>
              Add Card
            </button>
          </form>
        </div>

      </div>

    </div>
  )
}


export default Account
