import HeroBanner from "./components/HeroBanner/HeroBanner";
import Informacion from "./components/Informacion/Informacion";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Contacto from "./components/Contacto/Contacto";
import PaginaNoEncontrada from "./components/PaginaNoEncontrada/PaginaNoEncontrada";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <HeroBanner />
          <NavBar />
          <ToastContainer
            theme="colored"
            position="top-right"
            autoClose={6000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PromoBanner />
                  <ItemListContainer />
                </>
              }
            />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PaginaNoEncontrada />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
