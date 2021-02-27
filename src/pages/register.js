import React, {useState, useContext} from 'react'
import Layout from '../components/layout'
import AuthContext from '../contexts/auth/AuthContext'
import youDevLogo from '../../assets/you-dev-logo.png'
import SEO from "../components/seo"

const Register = () => {

  const authContext = useContext(AuthContext);

  const { registerUser } = authContext;

  console.log("authContext?:", authContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    registerUser({username, email, password});
    /*
    axios.post('http://localhost:7890/auth/register', {
      username,
      email,
      password
     })
     .then(res => {
       console.log(res.data)
      //  props.setCurrentUser(res.data[0]);
      //  props.setLoggedIn(true);
     })
     .catch(err => console.log(err))
     */
   }

  return (
    <Layout>
      <SEO title="Register"/>
<div className="register-container">

  <div className="register">
     
      <img src={youDevLogo} alt="logo"/>
          <p>it's free and only takes a minute</p>
          <h2 class="divider line one-line" contenteditable>&lt; / &gt;</h2>
  
      <div className="inputWithIcon">
        <input 
            type="text"
            name="userName"
            placeholder="Enter valid username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <i class="fa fa-user" aria-hidden="true"></i>
          </div>
      <div className="inputWithIcon">
        <input 
          type="text"
          name="email"
          placeholder="Enter valid email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
      <div className="inputWithIcon">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fa fa-key" aria-hidden="true"></i>
        </div>
      

      <button
        className="signin-btn"
        type="submit"
        onClick={(e) => {handleSubmit(e)}}>sign up </button>

       <p> By clicking the Sign Up button, you agree to our Terms and Conditions and Privacy Policy</p>
    </div>


      </div>
    </Layout>
  )
}



export default Register
