  
export const initialState = {
    basket: [],
    user: null
} 

export const getCartTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);
  