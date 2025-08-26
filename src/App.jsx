import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import CartModal from "./components/CartModal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [numToAdd, setNumToAdd] = useState(0);
  const [isCartShowing, setIsCartShowing] = useState(false);
  const [curImageIndex, setCurImageIndex] = useState(1);

  const [addPressed, setAddPressed] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const [cartState, setCartState] = useState({
    itemNum: 0,
    total: "0.00",
  });

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

  function deleteCart() {
    setCartState({
      itemNum: 0,
      total: "0.00",
    });
  }

  function cycleImage(direction) {
    setCurImageIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 1 ? 4 : prevIndex - 1;
      } else {
        return prevIndex === 4 ? 1 : prevIndex + 1;
      }
    });
  }

  useEffect(() => {}, [curImageIndex]);

  useEffect(() => {
    if (addPressed) {
      setCartState({
        itemNum: (cartState.itemNum += numToAdd),
        total: (125.0 * cartState.itemNum).toFixed(2),
      });
      setNumToAdd(0);
    }
    setAddPressed(false);
  }, [addPressed, numToAdd, cartState]);

  return (
    <main className="min-h-screen md:px-40 relative bg-red-400">
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
          cycleImage={cycleImage}
          curImageIndex={curImageIndex}
        />
      </div>
      <section className="absolute top-20 left-1/2 -translate-x-1/2 lg:right-34 lg:left-auto lg:translate-x-0">
        <CartModal
          numToAdd={cartState.itemNum}
          isCartShowing={isCartShowing}
          total={cartState.total}
          deleteCart={deleteCart}
        />
      </section>
    </main>
  );
}

export default App;
