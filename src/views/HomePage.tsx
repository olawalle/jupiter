import React, { useEffect, useState } from "react";
import checklist from "../assets/checklist.svg";
import Navbar from "../components/navbar/Navbar";
import ShopItem from "../components/shopping-item/ShopItem";
import { ShopItemInterface } from "../interfaces";
import { useAppContext } from "../store/appcontext";

import "./HomePage.scss";

function HomePage() {
  const { cartItems, saveCartItems, categories, shopItems } = useAppContext();
  const [pickedCategories, setPickedCategories] = useState<string[]>([]);
  const [currentItems, setCurrentItems] =
    useState<ShopItemInterface[]>(shopItems);

  const pickIt = (value: string) => {
    pickedCategories.includes(value)
      ? setPickedCategories(pickedCategories.filter((v) => v != value))
      : setPickedCategories([...pickedCategories, value.toLowerCase()]);
  };

  useEffect(() => {
    pickedCategories.length
      ? setCurrentItems(
          shopItems.filter((itm) =>
            pickedCategories.includes(itm.category.toLowerCase())
          )
        )
      : setCurrentItems(shopItems);
  }, [pickedCategories]);

  const findInCart = (id: string) => {
    let isPresent = cartItems.find((item) => item.id === id);
    return isPresent ? true : false;
  };

  return (
    <>
      <Navbar />
      <div className="home-page">
        <h3 className="page-heading">Shop by category</h3>
        <div className="categories">
          {categories.map((category, i) => (
            <div
              onClick={() => pickIt(category.toLowerCase())}
              className={`category ${
                pickedCategories.includes(category.toLowerCase()) && "picked"
              }`}
              key={i}
            >
              {category}
            </div>
          ))}

          <div className="circle">
            <img src={checklist} alt="" />
          </div>
        </div>

        <div className="shopping-items">
          {currentItems.length ? (
            currentItems.map((itm: ShopItemInterface, i: number) => (
              <ShopItem
                inCart={findInCart(itm.productId.value)}
                itemDetails={itm}
                key={i}
              />
            ))
          ) : (
            <p>No Items match your filter criteria</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
