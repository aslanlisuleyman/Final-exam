import React from 'react'
import Swip from '../../components/Swip/Swip'
import Cards from '../../components/Cards/Cards'
import Static from '../../components/Static/Static'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Swip/>
        <Cards/>
        <Static/>
    </div>
  )
}

export default Home