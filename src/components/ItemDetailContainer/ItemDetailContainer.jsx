import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/config";
import Loading from "../Loading/Loading";



const ItemDetailContainer = () => {
    
    const [item, setItem]= useState(null);
    //useParams siempre devuelve el valor como string
    const [loading, setLoading] = useState(true);
    const id = useParams().id;

    useEffect(() => {
        setLoading(true);
        const docRef= doc(db, "productos",id)
        getDoc(docRef)
          .then((resp)=>{
            setItem(
              {...resp.data(), id: resp.id}
            )
          })
          .catch((error) => console.error(error))
          .finally(() => {
            setLoading(false);
          });
    }, [id]); 
    

  return (
    <div>{loading ? <Loading /> : item && <ItemDetail item={item} />}</div>
  )
}

export default ItemDetailContainer