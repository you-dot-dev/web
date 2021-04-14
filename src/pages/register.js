import React, {useState, useContext} from 'react'
import { navigate } from 'gatsby';
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

  const [criteriaHeight, setCriteriaHeight] = useState("0em");
  const [hasCapital, setHasCapital] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasMinimumChars, setHasMinimumChars] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);


  function handleSubmit(e){
    e.preventDefault();
    try {
      registerUser({username, email, password});
      navigate("/skillmap");
    } catch (err) {
      console.log("err from registerUser", err);
    }
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

  function showPasswordDropdown(e) {
    setCriteriaHeight("10em")
  }
  function hidePasswordDropdown(e) {
    setCriteriaHeight("0px")
  }
  function checkPassword(password) {
    console.log("checking password...");
    const capitalRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex= /[!@#$%^&*()~]/;
    const minLength = password.length > 8;
    setHasCapital( capitalRegex.test(password) );
    setHasNumber( numberRegex.test(password) );
    setHasSymbol( symbolRegex.test(password) );
    setHasMinimumChars( minLength );
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
          onChange={(e) => { setPassword(e.target.value); checkPassword(e.target.value) }}
          onFocus={(e) => showPasswordDropdown(e)}
          onBlur={(e) => hidePasswordDropdown(e)}
        />
        <i className="fa fa-key" aria-hidden="true"></i>
      </div>

      <div className="password-criteria" style={{ height: criteriaHeight, overflow: "hidden" }}>
        <ul>
          <li>{ hasNumber ? "✅":"❗️"} One number</li>
          <li>{ hasSymbol ? "✅":"❗️"} One symbol</li>
          <li>{ hasCapital ? "✅":"❗️"} One capital letter</li>
          <li>{ hasMinimumChars ? "✅":"❗️"} Minimum 8 characters</li>
        </ul>
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
