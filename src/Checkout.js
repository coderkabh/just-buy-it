import React from 'react'

function Checkout() {
    return (
        <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src={imgPath} />
            <div>
                <h3>{`Hello, ${user?.email}`}</h3>
                <h2 className="checkout__title">Your Shopping Cart</h2>
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
            <h2>The sbt will go here</h2>
        </div>

    </div>

    )
}

export default Checkout
