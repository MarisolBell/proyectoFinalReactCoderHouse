import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState(" ");
  const [loading,setLoading]=useState(true);
  const { categoria } = useParams(); // obtener la categoría de los parámetros de la ruta

  useEffect(() => {
    setLoading(true); 
    // Crear referencia a la colección "productos"
    const productosRef = collection(db, "productos");

    // Si hay una categoría, filtramos por ella, si no, traemos todos los productos
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    // Actualizamos el nombre de la categoría (título) cuando la categoría cambia
    setNombre(categoria ? categoria.charAt(0).toUpperCase() + categoria.slice(1) : "Productos");

    // Obtener documentos desde Firebase
    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      })
      .catch((error) => {
        console.error("Error al obtener productos: ", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [categoria]);

  return (
    <div>
     {loading ? (
        <Loading /> 
      ) : (
        <ItemList productos = {productos} nombre={nombre}/> 
      )}
      
  </div>
    
  );
};

export default ItemListContainer;
