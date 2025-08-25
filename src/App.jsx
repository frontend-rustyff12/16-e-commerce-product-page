import { useState } from "react";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <main className="bg-blue-500 min-h-screen">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <ProductImage />
      <ProductInfo />
    </main>
  );
}

export default App;
