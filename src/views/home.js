import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Optimization Supervisor</title>
        <meta property="og:title" content="Dynamic Optimization Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
