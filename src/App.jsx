import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import CartModal from "./components/CartModal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [numToAdd, setNumToAdd] = useState(1);
  const [isCartShowing, setIsCartShowing] = useState(true);
  const [total, setTotal] = useState("");
  const [addPressed, setAddPressed] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleClick(symbol) {
    if (symbol === "-" && numToAdd === 0) {
      return;
    } else if (symbol === "-") {
      setNumToAdd(numToAdd - 1);
    } else {
      setNumToAdd(numToAdd + 1);
    }
  }

  function toggleCart() {
    setIsCartShowing(!isCartShowing);
  }

  function handleAddPressed() {
    setAddPressed(true);
  }

  useEffect(() => {
    if (addPressed) {
      setTotal((125.0 * numToAdd).toFixed(2));
    }
    setAddPressed(false);
  }, [addPressed, numToAdd]);

  return (
    <main className="min-h-screen md:px-40 relative">
      <Header
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        numToAdd={numToAdd}
        toggleCart={toggleCart}
      />
      <div className="  md:flex md:justify-center md:items-center md:p-10">
        <Product
          handleClick={handleClick}
          numToAdd={numToAdd}
          handleAddPressed={handleAddPressed}
        />
      </div>
      <section className="absolute top-20 left-1/2 -translate-x-1/2">
        <CartModal
          numToAdd={numToAdd}
          isCartShowing={isCartShowing}
          total={total}
        />
      </section>
    </main>
  );
}

export default App;
