import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [numToAdd, setNumToAdd] = useState(0);
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

  return (
    <main className="min-h-screen md:px-40">
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} numToAdd={numToAdd} />
      <div className="  md:flex md:justify-center md:items-center md:p-10">
        <Product handleClick={handleClick} numToAdd={numToAdd} />
      </div>
    </main>
  );
}

export default App;
