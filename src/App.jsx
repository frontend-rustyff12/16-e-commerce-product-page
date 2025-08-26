import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import CartModal from "./components/CartModal";
import ImageModal from "./components/ImageModal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [numToAdd, setNumToAdd] = useState(0);
  const [isCartShowing, setIsCartShowing] = useState(false);
  const [curImageIndex, setCurImageIndex] = useState(1);
  const [addPressed, setAddPressed] = useState(false);
  const [cartState, setCartState] = useState({
    itemNum: 0,
    total: "0.00",
  });

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleClick(symbol) {
    if (symbol === "-" && numToAdd === 0) return;
    setNumToAdd((prev) => (symbol === "-" ? prev - 1 : prev + 1));
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

  function clickImage(num) {
    console.log("Clicked thumbnail:", num, "Parsed:", parseInt(num));
    setCurImageIndex(parseInt(num));
  }

  useEffect(() => {
    if (addPressed) {
      setCartState((prev) => ({
        itemNum: prev.itemNum + numToAdd,
        total: (125.0 * (prev.itemNum + numToAdd)).toFixed(2),
      }));
      setNumToAdd(0);
      setAddPressed(false);
    }
  }, [addPressed, numToAdd]);

  useEffect(() => {
    console.log("curImageIndex updated:", curImageIndex);
  }, [curImageIndex]);

  return (
    <main className="flex flex-col items-center">
      <Header
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        cartTotal={cartState.itemNum}
        toggleCart={toggleCart}
      />
      <div className="  md:flex md:justify-center md:items-center md:p-10">
        <Product
          handleClick={handleClick}
          numToAdd={numToAdd}
          handleAddPressed={handleAddPressed}
          cycleImage={cycleImage}
          curImageIndex={curImageIndex}
          clickImage={clickImage}
        />
      </div>
      <section className="">
        <CartModal
          numToAdd={cartState.itemNum}
          isCartShowing={isCartShowing}
          total={cartState.total}
          deleteCart={deleteCart}
        />
      </section>
      <ImageModal curImageIndex={curImageIndex} cycleImage={cycleImage} />
    </main>
  );
}

export default App;
