import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const AppContext = React.createContext({});

const products = [
  {
    title: "Classic Tee",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cost: 75,
    image: "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
    sizeOptions: [
      { id: 1, label: "S" },
      { id: 2, label: "M" },
      { id: 3, label: "L" }
    ]
  }
]


export function AppContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);
 

  const addToCart = (item) => setCart([...cart, item]);
  const clearCart = () => setCart([]);

  const context = {
    products,
    cart,
    addToCart,
    clearCart
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}


// import React, { useState, useEffect } from "react";
// import { useLocalStorage } from "./useLocalStorage";

// export const AppContext = React.createContext({});

// export function AppContextProvider({ children }) {
//   const [cart, setCart] = useLocalStorage("cart", []);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product")
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error("Error fetching products:", error));
//   }, []);

//   const addToCart = (item) => setCart([...cart, item]);
//   const clearCart = () => setCart([]);

//   const context = {
//     products,
//     cart,
//     addToCart,
//     clearCart
//   };

//   return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
// }
