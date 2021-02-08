import React, {useState, useContext} from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import AuthContext from '../contexts/auth/AuthContext'

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
<div className="register-container">

     <div className="form-wrap">
     
      <h1>welcome to you.dev</h1>
          <p>it's free and only takes a minute</p>
  
      <div className="form-group">
          <label htmlFor="text">username</label>
        <input 
            type="text"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          /></div>
      <div className="form-group">
          <label htmlFor="text"> email address</label>
        <input 
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        /></div>
      <div className="form-group">
          <label htmlFor="text">enter password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        /></div>
      

      <button
        className="btn"
        type="submit"
        onClick={(e) => {handleSubmit(e)}}>sign up </button>

       <p> By clicking the Sign Up button, you agree to our Terms and Conditions and Privacy Policy</p>
    </div>
      
      <div className="about">
        <h1>About youdev</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto suscipit reprehenderit! Quasi incidunt, accusamus doloribus aliquam laborum repudiandae doloremque earum nemo pariatur adipisci eos laboriosam animi aliquid modi libero harum illum ipsum maiores ipsam necessitatibus at quas. Placeat, magnam! Deserunt repudiandae suscipit ad veritatis neque debitis, architecto harum itaque, sunt nemo commodi cum vel! Necessitatibus quos iure cupiditate reprehenderit voluptas praesentium repudiandae velit, inventore nesciunt porro accusamus omnis hic consequatur, sunt vitae doloribus autem, labore nam aspernatur! Reiciendis deleniti corporis numquam repudiandae nobis recusandae perspiciatis voluptatibus nisi! Maxime iste eum at hic eius necessitatibus dicta inventore laboriosam tenetur sapiente.</p>
      </div>
    </div>
    </Layout>
  )
}



export default Register