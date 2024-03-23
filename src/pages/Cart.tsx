import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "../components/CartItem";
import storeItems from "../data/items.json";
import "../assets/styles/Cart.css";

export function Cart() {
  const { cartItems } = useShoppingCart();

  return (
    <div className="cart-container">
      <div className="cart-total">
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      
    </div>
  );
}
