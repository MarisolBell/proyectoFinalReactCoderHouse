import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Informacion.css"

const Informacion = () => {
  return (
    <div className="informacion-container">
      <h3 className="informacion-title">
        <i className="bi bi-truck informacion-icon"></i> 
        Qué métodos de envío hay?
      </h3>
      <p className="informacion-text">Podés optar por:</p>
      <ul className="informacion-list">
        <li className="informacion-list-item">Epick (lo llevan a tu casa si estás en el rango de cobertura)</li>
        <li className="informacion-list-item">Correo Argentino (entrega a domicilio o en sucursal)</li>
        <li className="informacion-list-item">OCA</li>
        <li className="informacion-list-item">Pickup point en San Miguel, Belgrano, San Isidro, Barrio Norte y Recoleta.</li>
      </ul>

      <h3 className="informacion-title">
        <i className="bi bi-credit-card informacion-icon"></i> 
        Qué métodos de pago hay?
      </h3>
      <p className="informacion-text">
        Podés pagar con tarjeta de crédito o débito, efectivo o transferencia o envío de dinero a través de Mercadopago. Si elegís esta opción, te va a llegar un mail con todos los datos para concretar el pago.
      </p>
      <p className="informacion-text">
        Importante: si elegiste abonar por transferencia o envío de dinero, tené en cuenta que pasadas las 24 hs, si no se registró el pago, el pedido se cancela.
      </p>

      <h3 className="informacion-title">
        <i className="bi bi-info-circle informacion-icon"></i> 
        Qué es Epick?
      </h3>
      <p className="informacion-text">
        E-PICK es un servicio de logística PUERTA a PUERTA low cost que está disponible para ciertas localidades y zonas de Argentina con un tiempo de entrega dentro de los 5 días hábiles desde que es abonado el envío y generada la etiqueta. Para poder utilizar este servicio tenés que estar dentro de su zona de cobertura. Los precios son económicos, dependen del tamaño del paquete y comienzan desde los $1250.
      </p>

      <h3 className="informacion-title">
        <i className="bi bi-arrow-repeat informacion-icon"></i> 
        ¿LOS PRODUCTOS TIENEN CAMBIO?
      </h3>
      <p className="informacion-text">
        Sí, todos los productos tienen cambio. Para cualquier cambio, tenés 15 días desde el momento de recibido/retirado el producto.
      </p>
      <p className="informacion-text">
        Sol Haus no acepta cambios de productos que no estén en las mismas condiciones que fueron entregados. (Todos tienen que conservar su envoltorio original). Para gestionar el cambio, podés acercarte a nuestro pick up Point, previa coordinación por WhatsApp o enviarlo por correo. En ese caso deberás abonar el envío del producto que deseás cambiar y del que deseás en su reemplazo.
      </p>

      <h3 className="informacion-title">
        <i className="bi bi-arrow-counterclockwise informacion-icon"></i> 
        ¿PUEDO DEVOLVER MI PRODUCTO Y RECIBIR UN REINTEGRO DE MI DINERO?
      </h3>
      <p className="informacion-text">
        Sí, una vez que recibimos el mismo realizamos el reembolso al medio de pago con el cual hayas abonado. Siempre y cuando esté dentro de los 15 días de cambio y en las mismas condiciones que fue recibido.
      </p>

      <p className="informacion-text">
        Si tenés alguna duda o comentario, escribinos! Podés enviarnos un mensaje a través del formulario de contacto o enviarnos un mail a sol.haus@gmail.com
      </p>
    </div>
  );
};

export default Informacion;
