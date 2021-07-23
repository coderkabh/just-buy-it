import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispath] = useStateValue();
    const removeFromCart = () => {
        dispath({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div>
            
        </div>
    )
}

export default CheckoutProduct
