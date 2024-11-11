import "./Checkout.css";

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmitForm}>
        <h2>Ingrese sus datos para generar la orden de compra:</h2>
        
        <label htmlFor="fullname">Nombre Completo:</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Ingrese su nombre completo"
          value={dataForm.fullname}
          onChange={handleChangeInput}
          className="checkout-input"
          required
        />
        
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Ingrese su teléfono"
          value={dataForm.phone}
          onChange={handleChangeInput}
          className="checkout-input"
          required
        />
        
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su e-mail"
          value={dataForm.email}
          onChange={handleChangeInput}
          className="checkout-input"
          required
        />
        
        <button type="submit" className="checkout-button">Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckout;
