import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import {selectedProducts,DeleteProduct} from '../redux/action'



function Product() {

    const selectedProduct = useSelector((state)=> state.allproduct.product);

    const dispatch = useDispatch();

    const {productId} = useParams();


    console.log(selectedProduct)

    const fetchProduct = async ()=>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((error) => console.log(error));
       
                dispatch(selectedProducts({
            id:res.data.id,
            title:res.data.title,
            image:res.data.image,
            price:res.data.price,
            description:res.data.description,
        }))

    }

    useEffect(()=>{
        fetchProduct()

        return ()=>{
            dispatch(DeleteProduct())
        }
    },[])

    return (
        <div className="productPage">
            {Object.keys(selectedProduct)?.length === 0 ?(
                <div className="loading">
                    <h2>Loading...</h2>
                </div>
            ):(
            <div className="product__left">
                <img src={selectedProduct?.image} alt="" />
                <h4>{selectedProduct?.title} <p>$ {selectedProduct?.price}</p></h4>
                <p>{selectedProduct?.description}</p>

            </div>
            )}

        </div>
    )
}

export default Product
