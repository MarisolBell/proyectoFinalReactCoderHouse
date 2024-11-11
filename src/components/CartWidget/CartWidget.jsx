import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./CartWidget.css";

const CartWidget = ({ menuOpen }) => {
  const { cantidadEnCarrito } = useContext(CartContext);

  
  const totalItems = cantidadEnCarrito();

  return (
    <div>
      <Link className="cart" to="/carrito">
       
        <i className={`bi bi-cart-fill ${totalItems > 0 ? "icon-cart-filled" : "icon-cart-empty"}`}></i>
        {!menuOpen && totalItems > 0 && (
          <span className="numerito"> {totalItems}</span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
