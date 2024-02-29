/* eslint-disable react/prop-types */
import Product from "./Product"
import {clothingProducts} from "../config"
import { useEffect, useState } from "react";
import { getFilteredProducts } from "../utils/helper";
function Body({searchText}){

    const [allproducts,setallproducts]=useState(clothingProducts)
    const [filteredproducts,setfilteredproducts]=useState(clothingProducts)
    
    useEffect(()=>{
       const filteredData=getFilteredProducts(searchText,allproducts);
       setfilteredproducts(filteredData);
    },[searchText]);
    
     
    return(
        <div className="parent-body-container flex justify-center items-center">
            <div className="child-body-container md:grid grid-cols-4 grid-rows-2">
            {
                filteredproducts.map((prod)=>{
                    return  <Product {...prod} key={prod.id}/>;
               })
            }
            </div>
        </div>    
    )
}
export default Body