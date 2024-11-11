import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="suport-info">
          <div className="medios-pagos-container">
            <h3 className="medios-tittle">Medios de Pago</h3>
            <div className="medios-pagos-image">
              <img src="/img/mercadopago.png" alt="Mercado Pago" />
              <img src="/img/mastercard.png" alt="Mastercard" />
              <img src="/img/visa.png" alt="Visa" />
              <img src="/img/american-express.png" alt="American Express" />
              <img src="/img/cabal.png" alt="Cabal" />
              <img src="/img/maestro.png" alt="Maestro" />
              <img src="/img/diners-club.png" alt="Diners Club" />
              <img src="/img/nativa.png" alt="Nativa" />
              <img src="/img/argencard.png" alt="Argencard" />
              <img src="/img/naranja.png" alt="Naranja" />
              <img src="/img/pagofacil.png" alt="Pago Fácil" />
              <img src="/img/rapipago.png" alt="Rapipago" />
              <img src="/img/deposito.png" alt="Depósito" />
              <img src="/img/acordar.png" alt="Acordar con el vendedor" />
              <img src="/img/efectivo.png" alt="Efectivo" />
            </div>
          </div>
          <div className="medios-envios">
            <h3 className="medios-tittle">Medios de Envío</h3>
            <div className="medios-envios-image">
              <img src="/img/correo-argentino.png" alt="Correo Argentino" />
              <img src="/img/e-pick.png" alt="e-Pick" />
              <img src="/img/oca.png" alt="Oca" />
              <img src="/img/retiro-local.png" alt="Retiro en tienda" />
            </div>
          </div>
          <div className="redes-sociales">
            <h3 className="medios-tittle">Nuestras Redes Sociales</h3>
            <div>
              <ul className="redes-sociales-items">
                <li className="redes-sociales-icon">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="redes-sociales-icon">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="redes-sociales-icon">
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contacto">
            <h3 className="medios-tittle">Contacto</h3>
            <ul className="contacto-items">
              <li className="contacto-item">
                <i className="bi bi-envelope-at-fill"></i>SolHaus@gmail.com
              </li>
              <li className="contacto-item">
                <i className="bi bi-phone-vibrate-fill"></i>1132884567
              </li>
              <li className="contacto-item">
                <i className="bi bi-shop"></i> Av.Presidente Perón 2333, San
                Miguel, Bs.As
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="page-creator-container">
        <p className="page-creator">
          Creado por SolCoder CoderHouse 2024
          <i className="bi bi-c-circle"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
