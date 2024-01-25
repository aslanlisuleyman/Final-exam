import React, { useContext } from 'react'
import MainContext from '../../context/context'
import "./Wishlist.scss"
import {Helmet} from "react-helmet";
const Wishlist = () => {
    const {wishlist,handleDelete,deleteWishlist}=useContext(MainContext)
  return (
    <div className='ww'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <button style={{width:'100px'}} className='btn btn-danger' onClick={handleDelete}>Delete All</button>
<div className='wish'>
        {wishlist.map((item)=>{
            return(
<div class="cardd" style={{width: "18rem"}}>
    <img src={item.image} class="card-img-top" alt="..."/>
    <div class="cardd-body">
      <h5 class="cardd-title">{item.name}</h5>
      <p class="cardd-text">{item.price}</p>
      <a onClick={()=>{
        deleteWishlist(item._id)
      }} href="#" class="btn btn-danger">Go somewhere</a>
    </div>
  </div>


            )
        })}
    </div>
    </div>
    
    
  )
}

export default Wishlist