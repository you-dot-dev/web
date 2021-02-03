import React from 'react'
import Layout from '../components/layout';

const Account = () => {
  return (
    <Layout>
    <div className="account">
      <div className="account-info">
      <h1>username</h1>
      <h1>email</h1>
      <img src="" alt="profile-picture"/>
      <p>Date joined:</p>
      </div>
      <div className="edit-account">
        <button>Change Username</button>
        <button>Change Password</button>
        <button>View Progress</button>
        <button>Cancel subscription</button>
      </div>
    </div>
    </Layout>
  )
}


export default Account