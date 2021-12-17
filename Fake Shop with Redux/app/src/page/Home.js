import React, { useEffect } from 'react'
import ProductCom from "../components/ProductCom"
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {allProducts} from '../redux/action'


function Home() {

    const products = useSelector(state => state.allproduct.products);
    

    const dispatch = useDispatch();

    const fetchData = async ()=>{
        const res = await axios.get('https://fakestoreapi.com/products')
        .catch((erro)=> {console.log(erro)});

        dispatch(allProducts(res?.data))
    }

    console.log(products)

    useEffect(()=>{
        fetchData();
    },[])

    
    

    return (
        <div className="home">
            
               <div className="allproduct">
               {products?.map(({id,title,image,price,category})=>(
                   <ProductCom id={id} title={title} image={image} price={price} category={category}/>
               ))}
               </div>
        </div>
    )
}

export default Home
