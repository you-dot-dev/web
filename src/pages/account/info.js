import React, { useEffect, useContext, useState } from 'react'
import { Link, navigate } from 'gatsby'
import youDevLogo from '../../../assets/you-dev-logo-white.png';
import AuthContext from '../../contexts/auth/AuthContext';

import axios from 'axios';



const {
  YOUDEV_API_URL
} = process.env;

const Account = () => {

  const authContext = useContext(AuthContext);
  const { user, getCurrentUser } = authContext;

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
        <h3> Manage Subscription</h3>
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
          <h1>Welcome back, {user.username}</h1>
          <form className="account-info-update" onSubmit={(e) => {handleSubmit(e);}}>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" placeholder={username} value={username} onInput={(e) => {setUsername(e.target.value)}}/>

            <label for="email">Email</label>
            <input id="email" name="email" type="text" placeholder={email} value={email} onInput={(e) => {setEmail(e.target.value)}}/>
            { user.email ? null : null}
            <button type="submit" >Update</button>
            { updated ?
            <i class="fa fa-check update-success" aria-hidden="true"></i>
              :
              null
            }
          </form>
          <h3>From your My Account Dashboard, you have the ability to edit your profile, change your subscription, and view frequently asked questions.</h3>
          <h4>Need extra help? <a href="mailto:paul@you.dev">Contact us here. We will get back to you as soon as we can.</a></h4>
        </div>

      </div>

    </div>
  )
}


export default Account
