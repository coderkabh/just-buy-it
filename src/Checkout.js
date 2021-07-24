import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const imgPath = "https://raw.githubusercontent.com/coderkabh/just-buy-it/master/cartPoster.png";

function Checkout() {
    const [{basket, user}, dispath] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={imgPath} />
                <div>
                    <h3>{`Hello User`}</h3>
                    <h2 className="checkout__title">Your Cart</h2>
                    {basket.map(item =>(
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>

    )
}

export default Checkout
