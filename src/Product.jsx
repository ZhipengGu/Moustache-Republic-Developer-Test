import React, { useContext, useState } from "react";
import { AppContext } from "./AppContextProvider";
import styles from "./Product.module.css";

export default function Product({ item }) {
  const { addToCart } = useContext(AppContext);
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({ ...item, size: selectedSize });
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className={styles.product}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.productInfo}>
        <h3>{item.title}</h3>
        <p>
          <strong>${item.cost.toLocaleString("en-NZ")}</strong>
        </p>
        <p>{item.description}</p>
        <div>
          <label htmlFor="size">Select Size:</label>
          <select
            id="size"
            value={selectedSize}
            onChange={handleSizeChange}
            className={styles.sizeSelect}
          >
            <option value="">Select Size</option>
            {item.sizeOptions.map((sizeOption) => (
              <option key={sizeOption.id} value={sizeOption.label}>
                {sizeOption.label}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
