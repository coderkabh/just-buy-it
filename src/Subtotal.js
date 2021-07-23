import React from 'react'

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong> {value} </strong>
                        </p>
                        
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value= { getCartTotal(basket) }
                displayType = {"text"}
                thousandSeperator={true}
                prefix={"₹"}
            />
           
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
