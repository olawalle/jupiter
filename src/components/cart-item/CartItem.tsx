import React, { useState } from "react";
import { ShopItemInterface } from "../../interfaces";
import { cartData, useAppContext } from "../../store/appcontext";

import "./CartItem.scss";

function CartItem({ itemData }: { itemData: cartData }) {
  const { cartItems, saveCartItems, categories, shopItems } = useAppContext();
  const [itemPayload, setItemPayload] = useState<ShopItemInterface>(
    shopItems.filter((itm) => itm.productId.value === itemData.id)[0]
  );

  const updateQty = (qty: number) => {
    saveCartItems(
      cartItems.map((item) => {
        return item.id === itemData.id ? { ...item, qty } : item;
      })
    );
  };

  return (
    <div className="cart-item">
      <div className="img">
        <img src={itemPayload.imageUrl} alt="" />
      </div>
      <div className="cart-info">
        <p className="name">{itemPayload.name}</p>
        <p className="price">${itemPayload.price / 100}</p>
        <div className="qty">
          <span>Quantity:</span>{" "}
          <input
            value={itemData.qty}
            type="text"
            onChange={(e: any) => updateQty(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
