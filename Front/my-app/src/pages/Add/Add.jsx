import React, { useContext } from 'react'
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import MainContext from '../../context/context';
import axios from "axios"
import "./Add.scss"
import {Helmet} from "react-helmet";
const Add = () => {
    const {filter,setFilter,deleteHandler}=useContext(MainContext)
    const formik = useFormik({
        initialValues: {
          image: '',
          name: '',
          price: '',
        },
        onSubmit:( values,{resetForm })=> {
         if(!values.image || !values.name || !values.price){
            toast.error("Zəhmət olmasa formu doldurun")
         } else{
            axios.post("http://localhost:4001/products",{...values}).then(res=>{
            resetForm()
            setFilter([...filter,res.data])

         })
         }
         
        },
      });
      return (
        <div className='add'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <label htmlFor="lastName"> Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="email">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button className='btn btn-success' type="submit">Submit</button>
        </form>

        <table class="table">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
    { filter.map((item,index)=>{
        return(
            <tr key={index}>
           <td>{item._id.slice(0,5)}</td>     
      <td><img src={item.image} alt="" /></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>{
        deleteHandler(item._id)
      }} className='btn btn-danger'>Delete</button></td>
    </tr>
        )
    })}
    
   
  </tbody>
</table>
        </div>

        
      );
}

export default Add