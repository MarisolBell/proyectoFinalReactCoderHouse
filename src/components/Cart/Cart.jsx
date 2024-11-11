import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito, removeItem } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
    toast.success("Carrito vaciado exitosamente", { 
      position: "top-right", 
      autoClose: 2000 
    });
  };

  const handleEliminarProducto = (id) => {
    removeItem(id);
    toast.success("Producto eliminado del carrito", { 
      position: "top-right", 
      autoClose: 2000 
    });
  };

  return (
    <div className="cart-container">
      <h3 className="cart-title">Mi carrito</h3>

      {carrito.length === 0 ? (
        <div className="empty-cart">
          <h3 className="empty-cart-title">El carrito está vacío</h3>
          <Link to="/productos" className="btn-seguir-comprando">
            <i className="bi bi-arrow-return-left"></i> Seguir Comprando
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-products">
            {carrito.map((prod) => (
              <div key={prod.id} className="cart-product">
                <div className="cart-product-header">
                  <h2>{prod.nombre}</h2>
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="cart-product-img-small"
                  />
                </div>
                <p>Precio Unitario: $ {prod.precio}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Total: $ {prod.precio * prod.cantidad}</p>
                <button onClick={() => handleEliminarProducto(prod.id)}>
                  <i className="bi bi-trash3"></i> Eliminar
                </button>
              </div>
            ))}
          </div>

          <h2 className="cart-total">Precio total: ${precioTotal()}</h2>
          <div className="cart-actions">
            <button onClick={handleVaciar} className="vaciar-carrito">
              <i className="bi bi-trash3-fill"></i> Vaciar
            </button>

            <Link to="/productos">
              <button className="seguir-comprando">
                <i className="bi bi-arrow-return-left"></i> Seguir Comprando
              </button>
            </Link>

            <Link to="/checkout">
              <button className="checkout">
                <i className="bi bi-credit-card"></i> Finalizar compra
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
