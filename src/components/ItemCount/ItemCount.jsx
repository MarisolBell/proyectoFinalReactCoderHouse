import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ItemCount.css";

const ItemCount = ({ numero, handleRestar, handleSumar, handleAgregar }) => {
  
 
  const handleAgregarConNotificacion = () => {
    handleAgregar();
    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 4000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  };

  return (
    <div>
      <div className="itemCount-container">
        <button className="btn" onClick={handleRestar}>
          -
        </button>
        <p className="numero-cart">{numero}</p>
        <button className="btn" onClick={handleSumar}>
          +
        </button>
       
        <button className="agregar-carrito" onClick={handleAgregarConNotificacion}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
