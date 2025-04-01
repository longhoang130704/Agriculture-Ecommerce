import React, { useEffect } from 'react'
import { food_list } from '../assets/food_list'
import { createContext, useState } from 'react'
export const StoreContext = createContext(null)
import Cookies from "js-cookie";
import cart from '../pages/cart/cart';

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4006";
  const [token, setToken] = useState("");
  const userName = localStorage.getItem("userName");
  const cartCookieKey = `cart_${userName || "default"}`;
  // const addtoCart = (itemId) => {
  //   if (!cartItems[itemId]) {
  //     setCartItems((prev)=>({...prev, [itemId]: 1}));
  //   } else {
  //     setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
  //   }
  // }
  // const removeFromCart = (itemId) => {
  //   setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
  // }

  // Load giỏ hàng từ cookie khi component mount
  useEffect(() => {
    if (userName) {
      const savedCart = Cookies.get(cartCookieKey); 
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        setCartItems({});
      }
    }
  }, [userName]);

  // Lưu giỏ hàng vào cookie mỗi khi cartItems thay đổi
  useEffect(() => {
    if (userName) {
      Cookies.set(cartCookieKey, JSON.stringify(cartItems), { expires: 7 }); // Lưu 7 ngày
    }
  }, [cartItems, userName]);

  const addtoCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      Cookies.set(cartCookieKey, JSON.stringify(updatedCart), { expires: 7 });
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      Cookies.set(cartCookieKey, JSON.stringify(updatedCart), { expires: 7 });
      return updatedCart;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  const contextValue = {
    food_list,
    cartItems,
    addtoCart,
    token,
    setToken,
    removeFromCart,
    url
  }


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider