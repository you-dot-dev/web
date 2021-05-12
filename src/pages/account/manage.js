import React, { useEffect, useContext, useState } from 'react'
import { Link, navigate } from 'gatsby'
import youDevLogo from '../../../assets/you-dev-logo-white.png';
import AuthContext from '../../contexts/auth/AuthContext';

import "../../components/manage.scss";

import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const {
  YOUDEV_API_URL
} = process.env;

const Account = () => {

  const stripe = useStripe();
  const elements = useElements();

  const authContext = useContext(AuthContext);
  const { user, getCurrentUser } = authContext;

  const [ plans, setPlans ] = useState([]);

  useEffect( () => {

    console.log("stripe:", stripe);

    const init = async () => {
      console.log("stripe:", stripe);
      await getCurrentUser();

      if (!user.isAuthenticated) {
        navigate("/signin");
      }

      const { data }= await axios({
        url: `${YOUDEV_API_URL}/plans`,
        method: "GET"
      });

      setPlans(data.data);

      console.log("plans:", plans);

      const subscriptions = await axios({
        url:`${YOUDEV_API_URL}/user/subscriptions`,
        method: "GET",
        withCredentials: true
      });
      console.log("subscriptions:", subscriptions);
    }

    init();

    return () => {
      console.log("cleaning up...");
    }
  }, []);

  const [ username, setUsername ] = useState(user.username);
  const [ email, setEmail ] = useState("");
  const [ updated, setUpdated ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await axios({
        method: "PUT",
        url: `${YOUDEV_API_URL}/user/update`,
        withCredentials: true,
        data: {
          username,
          email
        }
      });
      setUpdated(true);
    } catch(err) {
      console.log("error while updating user info:", err);
    }
  }

  const plansList = plans.map( (plan) => {
    return (
      <figure className="product" id={plan.id}>
        <img src={"#"} width={"50"} height={"50"}/>
        <figcaption className="title">{plan.title}</figcaption>
        <figcaption className="price">{plan.price}</figcaption>
      </figure>
    );
  });

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
        <img src={youDevLogo} alt="logo"/>
        <div className="welcome">
          <h1>Manage Subscription</h1>
          <form className="account-info-update" onSubmit={(e) => {handleSubmit(e);}}>
            <div className="products">
              { plansList }
              <figure className="product">
                <img src={"#"} width={"50"} height={"50"}/>
                <figcaption>Good</figcaption>
              </figure>
              <figure className="product">
                <img src={"#"} width={"50"} height={"50"}/>
                <figcaption>Better</figcaption>
              </figure>
              <figure className="product">
                <img src={"#"} width={"50"} height={"50"}/>
                <figcaption>Best</figcaption>
              </figure>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}


export default Account
