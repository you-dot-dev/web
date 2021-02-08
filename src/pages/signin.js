import React, {useState, useContext} from 'react'
import Layout from '../components/layout'
import AuthContext from '../contexts/auth/AuthContext'
import {Link} from 'gatsby'
import {navigate} from 'gatsby'
import Spinner from '../components/spinner';

const SignIn = (props) => {

  const authContext = useContext(AuthContext);

  const { signInUser, loading } = authContext;
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
  <div className="signin-container">
     
      <h1>welcome back</h1>
          <p> ready to make some progress?</p>
  
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


    </Layout>
  )
}



export default SignIn