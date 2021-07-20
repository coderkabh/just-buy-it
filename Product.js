import React from 'react'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=> (
                        <p>⭐</p>
                     ))}

                   
                </div>
            </div>
            
            <img src={image} />

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
