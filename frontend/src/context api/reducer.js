// import { useEffect } from "react";

import { useEffect } from "react";

export const initialState = {
  cart: [],
  medicalCart: [],
  doctorCart:[],
  user: null,
};
export const getCartTotal = (cart) => {
  cart?.reduce((quantity, item) => item.price + quantity, 0);
};

function reducer(state, action) {
  console.log(action);
  //add data in local storage
  // useEffect(()=>{
  //   localStorage.setItem('items',JSON.stringify(state.cart))
  // },[state.cart])
  switch (action.type) {
    case "ADD_TO_CART":
      //logic for adding item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;
    case "Add_Medicine_To_Cart":
      //logic for adding item to cart
      return {
        ...state,
        medicalCart: [...state.medicalCart, action.item],
      };
    case "REMOVE_FROM_CART":
      //logic for removing item from basket
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`cant remove (id:${action.id} as its no longer exist)`);
      }
      return {
        ...state,
        cart: newCart,
      };
      break;
    default:
      return state;
  }
}
export default reducer;
