import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getCartTotal } from './reducer';
import { useHistory } from 'react-router';

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
