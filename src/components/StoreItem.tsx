import React, { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import "../assets/styles/StoreItem.css";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="store-item" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={isHovered ? imgUrl.replace('.png', '_hover.png') : imgUrl} alt={name} className="store-item-image" />
      <div className="store-item-details">
        <div className="store-item-title">
          <span className="store-item-name">{name}</span>
          <span className="store-item-price">{formatCurrency(price)}</span>
        </div>
        <div className="store-item-actions">
          {quantity === 0 ? (
            <button className="add-to-cart-button" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div className="cart-quantity-actions">
              <div className="quantity-controls">
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div className="cart-quantity">{quantity}</div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(id)} className="remove-button">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}