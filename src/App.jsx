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
    <main className="min-h-screen">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <section>
        <ProductImage />
        <ProductInfo />
      </section>
    </main>
  );
}

export default App;
