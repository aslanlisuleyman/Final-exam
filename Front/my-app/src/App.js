import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Detail from "./pages/Detail/Detail";
import Basket from "./pages/Basket/Basket";
import Wishlist from "./pages/Wishlist/Wishlist";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
function App() {

  const[data,setData]=useState([])
  const[filter,setFilter]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState({})
  const[wishlist,setWishlist]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  const[basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  const[counter,setCounter]=useState(localStorage.getItem("counter")?Math.max(0,parseInt(localStorage.getItem("counter"))):0)

  useEffect(()=>{
  axios.get("http://localhost:4001/products").then(res=>{
    setData(res.data)
    setFilter(res.data)
    setLoading(false)
  }).catch(error=>{
    setLoading(false)
    setError(error)
  })
  },[])

  const searchHandler=(searchValue)=>{
    if(searchValue){
      setFilter([...data.filter(item=>item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
    }else{
      setFilter([...data])
    }
  }

  const sortprice=()=>{
    setFilter([...data.sort((a,b)=>b.price-a.price)])
  }
  const sortAz=()=>{
    setFilter([...data.sort((a,b)=>a.name.localeCompare(b.name))])
  }

const sortZa=()=>{
    setFilter([...data.sort((a,b)=>b.name.localeCompare(a.name))])
  }

  const handleDelete=()=>{
    setWishlist([])
    localStorage.removeItem("wislist")
  }

  const deleteHandler=(id)=>{
    axios.delete(`http://localhost:4001/products/${id}`).then(res=>{
      setData([...res.data])
      setFilter([...res.data])
    })
  }

  const addWishlist=(item)=>{
    const target=wishlist.find(items=>items._id==item._id)
    if(target){
      toast.error("Wishlistdə mövcuddur")
    }else{
      setWishlist([...wishlist,item])
      localStorage.setItem("wishlist",JSON.stringify([...wishlist,item]))
      toast.success("Əlavə olundu")
    }

  }

  const deleteWishlist=(id)=>{
    const target=wishlist.find(items=>items._id==id)
    wishlist.splice(wishlist.indexOf(target),1)
    setWishlist([...wishlist])
    localStorage.setItem("wishlist",JSON.stringify([...wishlist]))
  }
  const deleteBasket=(id)=>{
    const target=basket.find(items=>items._id==id)
    basket.splice(basket.indexOf(target),1)
    setWishlist([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))
  }

  const addBasket=(item)=>{
    const target=basket.find(pro=>pro._id==item._id)
    if(!target){
      const newItem={...item,count:1,totalPrice:item.price}
      setBasket([...basket,newItem])
      localStorage.setItem("basket",JSON.stringify([...basket,newItem]))
      toast.success("Əlavə olundu")
    } else{
      const newData={...item,count:target.count+1,totalPrice:item.price*(target.count+1)}
      setBasket([...basket.filter(pro=>pro._id != item._id),newData])
      localStorage.setItem("basket",JSON.stringify([...basket.filter(pro=>pro._id != item._id),newData]))
      toast.success("Əlavə olundu")

    }
  }
  const handleInc=(item)=>{
    const target=basket.find(pro=>pro._id==item._id)
    target.count += 1
    target.totalPrice=item.price*target.count
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))


  }

  const handleDec=(item)=>{
    const target=basket.find(pro=>pro._id==item._id)
    let updatedata=[...basket.filter(pro=>pro._id==item._id)]
    if(target.count>1){
      target.count -= 1
      target.totalPrice=item.price*target.count
      setBasket([...basket])
      localStorage.setItem("basket",JSON.stringify([...basket]))
    }
    
  }

  const datas={
    data,setData,filter,setFilter,wishlist,setWishlist,basket,setBasket,counter,setCounter,loading,setLoading,error,setError,
    searchHandler,sortprice,sortAz,sortZa,handleDelete,deleteHandler,addBasket,deleteWishlist,handleDec,handleInc,addWishlist,deleteBasket

  }
  return (
    <MainContext.Provider value={datas}>

      <BrowserRouter>
      <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route  path="/add" element={<Add/>}/>
    <Route  path="/:id" element={<Detail/>}/>
    <Route  path="/basket" element={<Basket/>}/>
    <Route  path="/wishlist" element={<Wishlist/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </MainContext.Provider>
   
  );
}

export default App;
