import React, { useContext } from 'react'
import MainContext from '../../context/context'
import Card from '../Card/Card'
import "./Cards.scss"
const Cards = () => {
    const {filter,searchHandler,sortAz,sortZa,sortprice}=useContext(MainContext)
  return (
    <div className='umumi'>
        <div className='umumi__left'>
            <h1>New Arrivals</h1>
            <div className='umumi__right'>
                <div className='umi'>
                <input onChange={(e)=>{
                    searchHandler(e.target.value)
                }} placeholder='Search...' type="text" />

                <button onClick={(e)=>{
                    sortprice(e.target.value)
                }} className='btn btn-danger'>Sort Price</button>
            <button onClick={(e)=>{
                    sortAz(e.target.value)
                }} className='btn btn-warning'>Sort A-Z</button>
            <button onClick={(e)=>{
                    sortZa(e.target.value)
                }} className='btn btn-primary'>Sort Z-A</button>
            </div>
            
            </div>
            
        </div>
        
        

        <div className='karts'>
            { filter.map((item,index)=>(
                <Card key={index} item={item}/>
            ))}

        </div>
    </div>
  )
}

export default Cards
