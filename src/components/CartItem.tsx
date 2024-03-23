import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import "../assets/styles/CartItem.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="cart-item">
      <img
        src={item.imgUrl}
        className="cart-item-image"
        alt={item.name}
      />
      <div className="cart-item-details">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="item-quantity">
              x{quantity}
            </span>
          )}
        </div>
        <div className="item-price">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="item-total"> {formatCurrency(item.price * quantity)}</div>
      <button
        className="remove-button"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}
