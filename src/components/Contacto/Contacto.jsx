import React, { useState } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc } from "firebase/firestore";
import "./Contacto.css";
import validateContactForm from "../../utils/validateContactForm";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Limpiar mensajes anteriores
    toast.dismiss(); 

    // Validar el formulario usando Yup
    validateContactForm(formData)
      .then((validationResult) => {
        if (validationResult.status === "success") {
          // Intentar guardar en Firestore si la validación es exitosa
          return addDoc(collection(db, "comentarios"), formData);
        } else {
          // Lanzar error para que sea capturado en catch
          throw new Error(validationResult.message);
        }
      })
      .then(() => {
        // Limpiar el formulario después de un envío exitoso
        setFormData({
          nombre: '',
          email: '',
          mensaje: ''
        });

        // Mostrar un mensaje de éxito usando toastify
        toast.success(`Hola ${formData.nombre}, gracias por tus comentarios. ¡Te responderemos a la brevedad!`, {
          position: "top-right",
          autoClose: 5000, // El toast se cierra automáticamente después de 5 segundos
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error('Error:', error);

        // Mostrar un mensaje de error usando toastify
        toast.error(error.message || 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.', {
          position: "top-right",
          autoClose: 5000, 
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="modal-contenido">

      <form onSubmit={handleSubmit} className="contact-form">
        <h2 id="modal-title">Contacto</h2>
        
        <label htmlFor="nombre">Nombre Completo:</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          placeholder="Ingrese su nombre y apellido..." 
          value={formData.nombre} 
          onChange={handleChange}
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Ingrese su dirección de correo electrónico..." 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea 
          id="mensaje" 
          name="mensaje" 
          rows="5" 
          placeholder="Comentarios..." 
          value={formData.mensaje} 
          onChange={handleChange} 
          required
        />

        <button type="submit" className="boton">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
