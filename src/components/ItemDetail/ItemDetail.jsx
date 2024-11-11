import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {

  const {carrito, addItem}= useContext(CartContext); 
  console.log(carrito);

  const [numero, setNumero] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleSumar = () => {
    if (numero < item.stock) {
      setNumero(numero + 1);
    }
  };

  const handleRestar = () => {
    if (numero > 1) {
      setNumero(numero - 1);
    }
  };

  const handleAgregar = () => {
    addItem(item, numero); 
    console.log({ ...item, cantidad: numero });
    setIsAdded(true);
  };

  return (
    <div className="producto-detalle">
      <div className="producto-imagen-descripcion">
        <img src={item.imagen} alt={item.nombre} />
        
      </div>

      <div className="card-detalle">
        <h3 className="title-producto-detalle">{item.nombre}</h3>
        <p className="precio-producto-detalle">${item.precio}</p>
        {item.precio > 10000 ? (
          <p className="descuento-item">{item.descuento}</p>
        ) : (
          <p className="descuento-item">10% de descuento por transferencia</p>
        )}
        <ItemCount
          numero={numero}
          handleRestar={handleRestar}
          handleSumar={handleSumar}
          handleAgregar={handleAgregar}
        />
        <p className="categoria">Categoría: {item.categoria}</p>
        <p className="descripcion">{item.descripcion}</p>
        
        {isAdded && (
          <div className="botones-compra">
            <Link to="/carrito">
              <button className="btn-terminar-compra">Terminar mi compra</button>
            </Link>
            <Link to="/productos">
              <button className="btn-seguir-comprando">Seguir comprando</button>
            </Link>
          </div>
        )}
        <div className="return">
          <Link to="/">
            <i className="bi bi-arrow-return-left"></i> Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
