import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos,nombre }) => {
 
  return (
    <div>
      <h4 className="title">{nombre}</h4>
      <ul className="items">
        {productos.map((producto) => (
          <li key={producto.id}>
            <Item producto={producto}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
