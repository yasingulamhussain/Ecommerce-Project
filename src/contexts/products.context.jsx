import { createContext, useState} from "react";

 import PRODUCTS from '../shopdata.json';


 export const ProductsContext = createContext({
    products:[],
});
 export const ProductsProvider = ({children})=>{
    const [products,setproducts]=useState(PRODUCTS);
    const value={products};
     return<ProductsContext.Provider value={value}>
     {children}
     </ProductsContext.Provider>
 }