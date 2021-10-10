import React from "react";
import { ShopItemInterface } from "../../interfaces";
import add from "../../assets/add.svg";

import "./ShopItem.scss";
import { useAppContext } from "../../store/appcontext";

const ShopItem = ({
  itemDetails,
  inCart,
}: {
  itemDetails: ShopItemInterface;
  inCart: boolean;
}) => {
  const { cartItems, saveCartItems } = useAppContext();

  const addToCart = (itemId: string) => {
    cartItems.find((itm) => itm.id === itemId)
      ? saveCartItems(cartItems.filter((item) => item.id != itemId))
      : saveCartItems([...cartItems, { id: itemId, qty: 1 }]);
  };

  return (
    <div className="shopping-item">
      <div
        className="img"
        style={{ backgroundImage: `url(${itemDetails.imageUrl})` }}
      ></div>
      <div className="item-info">
        <p className="item-name">{itemDetails.name}</p>
        <p className="item-maker">{itemDetails.subtitle}</p>
        <p className="price">
          {" "}
          {/* {itemDetails?.old_price && <span>${itemDetails.old_price}</span>}  */}
          ${itemDetails.price / 100}
        </p>
      </div>
      <button
        className={inCart ? "pri-btn" : "sec-btn"}
        onClick={() => addToCart(itemDetails.productId.value)}
      >
        {!inCart && <img src={add} alt="" />}{" "}
        {!inCart ? "Add to" : "Remove from"} cart
      </button>
    </div>
  );
};

export default ShopItem;
