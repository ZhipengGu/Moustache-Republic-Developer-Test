import { useContext, useState } from "react";
import { AppContext } from "./AppContextProvider";
import Product from "./Product";
import styles from "./ShopPage.module.css";
import ShoppingCart from "./ShoppingCart";

export default function ShopPage() {
  const { products } = useContext(AppContext);

  return (
    <>
      <div>
        <ShoppingCart />
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.productContainer}>
          {products.map((product, index) => (
            <Product key={index} item={product} />
          ))}
        </div>
     
      </div>
    </>
  );
}
