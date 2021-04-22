import React, {useState, useContext} from 'react'
import Layout from '../components/layout';
import AuthContext from '../contexts/auth/AuthContext';
import { navigate, Link} from 'gatsby';
import Spinner from '../components/spinner';
import PageTransition from 'gatsby-plugin-page-transitions';
import SEO from "../components/seo";
import axios from "axios";

const SignIn = (props) => {

  const authContext = useContext(AuthContext);

  const { signInUser, loading } = authContext;
  const [ password, setPassword] = useState('');
  const [ email, setEmail] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    signInUser({ email, password});
    navigate('/skillmap')
  }

  function signinGoogle(e) {
    axios.get(`${process.env.YOUDEV_API_URL}/auth/google`, { withCredentials: true })
      .then( ({data}) => {
        navigate(data.authorizationUrl);
      })
      .catch( (err) => {
        console.log("signinGoogle err:", err)
      });
  }

  function signinGithub(e) {
    axios.get(`${process.env.YOUDEV_API_URL}/auth/github`, { withCredentials: true })
      .then( ({ data }) => {
        navigate( data.authorizationUrl );
      })
      .catch( (err) => {
        console.log("signinGithub err:", err)
      });
  }

  return (
    <Layout>
      <SEO title="Signin"/>
      <PageTransition>
  <div className="signin-container">
     
      <h1>welcome back to you.dev</h1>
          <p>ready to make some progress?</p>
  
      { loading ? <Spinner/> : null}
      <div className='inputWithIcon'>
        <input 
          type="text"
          name="email"
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className="fa fa-user fa-lg fa-fw"></i>
        </div>
      
      <div className="inputWithIcon">
          
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fa fa-key"></i>
        </div>
      
        
      <button
        className="signin-btn"
        type="submit"
        onClick={(e) => {handleSubmit(e)}}>sign in</button>
        <br/>
      </div>  

      <div className="outside-signin">
        <div className="button">
        <button onClick={ (e) => {signinGoogle(e)}} >sign in with google <i class="fab fa-google"></i></button><br/>
       
        </div>
        <div className="button">
        <button onClick={ (e) => {signinGithub(e)}}>sign in with github <i class="fab fa-github"></i></button>
        </div>
      </div>
        <p className="signin-container register-container">don't have an account? <Link to="/register">register here</Link></p>
    

    </PageTransition>
    </Layout>
  )
}



export default SignIn
