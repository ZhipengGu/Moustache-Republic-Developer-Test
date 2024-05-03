import React, { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import { useNavigate } from "react-router-dom";
import groupItems from "./groupItems";

export default function CheckoutPage() {
  const { cart, clearCart } = useContext(AppContext);
  const navigate = useNavigate();

  const groups = groupItems(cart);
  const totalCost = groups.reduce((acc, group) => acc + group.item.cost * group.count, 0);

  function handlePay() {
    clearCart();
    alert("Thank you for your purchase!");
    navigate("/shop", { replace: true });
  }

  return (
    <>
      <h1>Checkout</h1>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            Number: {group.count} {group.item.title}, Unit Cost: ${group.item.cost.toLocaleString("en-NZ")}ea
          </li>
        ))}
      </ul>
      <p>
        <strong>Total cost</strong> ${totalCost.toLocaleString("en-NZ")}
      </p>
      <button onClick={handlePay}>Pay now</button>
    </>
  );
}
