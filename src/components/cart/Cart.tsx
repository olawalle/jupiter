import React, { MouseEventHandler, useState } from "react";
import arrow from "../../assets/arrow.svg";
import cart from "../../assets/cart.svg";
import { useAppContext } from "../../store/appcontext";
import CartItem from "../cart-item/CartItem";

import "./Cart.scss";

function Cart() {
  const { cartItems, saveCartItems, categories, shopItems } = useAppContext();

  return (
    <div className="cart">
      <div className="cart-header">
        <img src={arrow} alt="" />
        <p>Your Cart</p>
        <img src={cart} alt="" />
      </div>

      <div className="cart-inner">
        {cartItems.map((cartItm) => (
          <CartItem itemData={cartItm} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
