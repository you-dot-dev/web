import React, {useContext} from 'react'
import { Link } from 'gatsby'
import youDevLogo from '../../assets/you-dev-logo-white.png';
import AuthContext from '../contexts/auth/AuthContext';

const Account = () => {

  const authContext = useContext(AuthContext);

  const { user } = authContext;


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
        <h3><Link to="/account/info">Account Information</Link></h3>
        </div>
        <hr/>
        <div className="icons">
        <i class="fa fa-recycle" aria-hidden="true"></i>
        <h3><Link to="/account/manage">Manage Subscription</Link></h3>
        </div>
        <hr/>
        <div className="icons">
        <i class="fa fa-credit-card" aria-hidden="true"></i> 
        <h3><Link to="/account/payment">Payment Information</Link></h3>
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
        <h3>From your My Account Dashboard, you have the ability to edit your profile, change your subscription, and view frequently asked questions.</h3>
        <h4>Need extra help? <a href="mailto:paul@you.dev">Contact us here. We will get back to you as soon as we can.</a></h4>
        
          </div>

      </div>

    </div>
  )
}


export default Account
