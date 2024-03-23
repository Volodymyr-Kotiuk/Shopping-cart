import React from "react";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import "../assets/styles/Store.css";

export function Store() {
  return (
    <div className="store-container">
      <div className="store-items">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
