import { Link } from "react-router-dom";
import "./item.css";
const Item = ({ producto }) => {
  return (
    <div className="item">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="item-detalle-producto">
        <h4 className="title-producto">{producto.nombre}</h4>
        <p className="precio-producto">${producto.precio}</p>
        {producto.precio > 10000 ? (
          <p className="descuento-producto">{producto.descuento}</p>
        ) : (
          <p>10% de descuento por transferencia</p>
        )}
      
        <Link className="detalles-producto" to={`/item/${producto.id}`}>Ver detalles</Link>
  
      </div>
    </div>
  );
};

export default Item;
