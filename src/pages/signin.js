import React, {useState, useContext} from 'react'
import Layout from '../components/layout'
import AuthContext from '../contexts/auth/AuthContext'
import {navigate} from '@reach/router';

const SignIn = (props) => {

  const authContext = useContext(AuthContext);

  const { signInUser } = authContext;
;
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    signInUser({ email, password});
    navigate('/skillmap')
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
<div className="container">

     <div className="form-wrap">
     
      <h1>login page</h1>
          <p>welcome back, ready to make some progress?</p>
  
      <div className="form-group">
          <label htmlFor="text"> email address</label>
        <input 
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        /></div>
      <div className="form-group">
          <label htmlFor="text">password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        /></div>
      

      <button
        className="btn"
        type="submit"
        onClick={(e) => {handleSubmit(e)}}>sign in</button>

    </div>
      
    
    </div>
    </Layout>
  )
}



export default SignIn