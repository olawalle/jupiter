import { createContext, useContext } from "react";
import { ShopItemInterface } from "../interfaces";

let items = require("../mocks/products.json");

export interface cartData {
  id: string;
  qty: number;
}
export interface AppContextType {
  shopItems: ShopItemInterface[];
  cartItems: cartData[];
  saveCartItems: (items: cartData[]) => void;
  categories: string[];
}

export const AppContext = createContext<AppContextType>({
  shopItems: items,
  cartItems: [],
  saveCartItems: () => null,
  categories: [],
});

export const useAppContext = () => useContext(AppContext);
