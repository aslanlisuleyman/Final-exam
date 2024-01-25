import React, { useContext } from 'react'
import MainContext from '../../context/context'
import "./Basket.scss"
import {Helmet} from "react-helmet";
const Basket = () => {
    const {handleInc,handleDec,basket,deleteBasket}=useContext(MainContext)
    
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Basket</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
      <th scope="col">Count</th>
      <th scope="col"></th>
      <th scope="col">totalPrice</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    {basket.map((item,index)=>{
       
        return(
            <tr key={index}>
      <td> <img src={item.image} alt="" /></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>{
        handleDec(item)
      }} className='btn btn-warning'>-</button></td>
      <td>{item.count}</td>
      <td><button  onClick={()=>{
        handleInc(item)
      }} className='btn btn-success'>+</button></td>
      <td>{item.totalPrice}</td>
      <td ><button className='btn btn-danger' onClick={()=>{
deleteBasket(item._id)
      }}>Delete</button></td>
    </tr>
        )
    })}
    
   
  </tbody>
</table>
 
    </div>
  )
}

export default Basket