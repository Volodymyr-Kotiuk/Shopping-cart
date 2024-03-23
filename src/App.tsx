import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./assets/styles/App.css";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
