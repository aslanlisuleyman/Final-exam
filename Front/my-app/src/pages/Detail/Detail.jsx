import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import "./Detail.scss"
import {Helmet} from "react-helmet";
const Detail = () => {
    const[data,setdata]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4001/products/${id}`).then(res=>{
            setdata(res.data)
        })
    })
  return (
    <div>
 <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div class="card" style={{width: "18rem"}}>
  <img src={data.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{data.name}</p>
    <p>${data.price}.00</p>
  </div>
</div>
    </div>
    
  )
}

export default Detail
