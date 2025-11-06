import React from "react";
import { Products } from "../../data/products";
import Product from "./product.js";
const Shop = ()=>{
    return(
        <React.Fragment>
             <h1>Shopping Page</h1>
             <div className="row">
                {
                    Products.map((productData)=>{
                        return(
                            <Product data={productData} key={productData.id} />
                        )
                    })
                }

             </div>

        </React.Fragment>
      
    )
}
export default Shop;