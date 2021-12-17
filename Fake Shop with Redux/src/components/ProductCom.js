import React from 'react'
import {selectedProducts} from '../redux/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function ProductCom({id,title,image,price,category}) {

    const history = useHistory();

    const dispatch = useDispatch();


    const selectedProduct=(e)=>{
        e.preventDefault();
        history.push(`/product/${id}`)
    }

    return (
        <div className="productCom" onClick={selectedProduct}>
            <div className="card__top">
                {image && <img src={image} alt="" />}
            </div>

            <div className="card__info">
                <h3>{title}</h3>
                <h4>$ {price}</h4>
                <p>{category}</p>
            </div>
        </div>
    )
}

export default ProductCom
