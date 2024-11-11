import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import { db } from '../../firebase/config';
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js" 
import { toast } from "react-toastify"
import "./Checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })
  const [idOrder, setIdOrder] = useState(null)
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: [...carrito],
      date: Timestamp.fromDate(new Date()),
      total: precioTotal()
    }

    // Validar el formulario antes de subir la orden
    validateForm(dataForm)
      .then((response) => {
        if (response.status === "error") {
          throw new Error(response.message)
        }
        toast.success("Validación exitosa, subiendo orden...")
        return uploadOrder(order)
      })
      .catch((error) => {
        toast.error(`Error en el formulario: ${error.message}`)
      })
  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id)
        toast.success("¡Orden subida exitosamente!")
      })
      .catch((error) => {
        toast.error("Error al subir la orden. Intente de nuevo.")
        console.log(error)
      })
      .finally(() => {
        vaciarCarrito()
      })
  }

  return (
    <div className="checkout-container">
      {idOrder === null ? (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div className="thank-you-message">
          <h2 className="thank-you-message-title">¡Muchas gracias por tu compra!</h2>
          <p className="thank-you-message-order">
            Por favor guarde su número de seguimiento: <strong>{idOrder}</strong>
          </p>
          <Link to="/" className="thank-you-message-link">Volver al inicio</Link>
        </div>
      )}
    </div>
  )
}

export default Checkout

