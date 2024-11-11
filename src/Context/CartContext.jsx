import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

//estado del carrito ->localstorage de carrito o carrito vacio
const carritoInicial= JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

  const [carrito, setCarrito] = useState(carritoInicial);

  const addItem = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    //Creo una copia del carrito original
    const nuevoCarrito = [...carrito];
    //guardamos el resultado de find() en una variable (devuelve un producto o nada)
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    //si ese mismo producto ya está en el carrito
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
      setCarrito(nuevoCarrito);
    } else {
      //Si el producto no  está en el carrito
      nuevoCarrito.push(itemAgregado);
      setCarrito(nuevoCarrito);
    }
  };

  // creo función que retorne cantidad de productos en el carrito

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  // creo función que retorne el precio total del carrito
  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  // función para vaciar carrito

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const removeItem = (id) => {
    // Filtrar el carrito para eliminar el producto por su id
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

   // cada vez que el estado de carrito cambia, se guarda en localStorage
   useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito)) 
  }, [carrito])

  return (
    <CartContext.Provider
      value={{
        carrito,
        addItem,
        removeItem,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito 
        }}>
         {children}
    </CartContext.Provider>
  );
};
