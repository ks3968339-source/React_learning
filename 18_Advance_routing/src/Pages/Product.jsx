import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className="flex justify-center">
            <Link to="/product/mens" className=" pr-5  rounded ">Mens</Link>
            <Link to="/product/womens" className="pr-5 rounded ">Womens</Link>
             <Link to="/product/kids" className=" rounded ">Kids</Link>
            
        </div>
        <Outlet />
     
    </div>
  )
}

export default Product
