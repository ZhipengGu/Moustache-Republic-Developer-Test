import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContextProvider";
import styles from "./ShoppingCart.module.css";
import groupItems from "./groupItems";

export default function ShoppingCart() {
  const { cart } = useContext(AppContext);

  const totalCost = cart.reduce((prev, item) => prev + item.cost, 0);
  const groups = groupItems(cart);

  return (
    <div className={styles.cart}>
      <h3>My cart</h3>
      {groups.map((group, index) => (
        <ShoppingCartItem key={index} group={group} />
      ))}
      <p style={{ alignSelf: "flex-end" }}>
        <strong>Total cost:</strong> ${totalCost.toLocaleString("en-NZ")}
      </p>
      <Link to="/checkout" style={{ alignSelf: "flex-end" }}>
        Checkout
      </Link>
    </div>
  );
}

function ShoppingCartItem({ group }) {
  const { item, count } = group;
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <span style={{ flexGrow: 1 }}>
        <strong>{item.title}</strong> ({item.size}) x {count}
      </span>
    </div>
  );
}
