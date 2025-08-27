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
  const [curModalImageIndex, setCurModalImageIndex] = useState(1);
  const [addPressed, setAddPressed] = useState(false);
  const [cartState, setCartState] = useState({
    itemNum: 0,
    total: "0.00",
  });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  function toggleMenu() {
    console.log(menuOpen);
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

  function cycleModalImage(direction) {
    setCurModalImageIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 1 ? 4 : prevIndex - 1;
      } else {
        return prevIndex === 4 ? 1 : prevIndex + 1;
      }
    });
  }

  function clickImage(num) {
    setCurImageIndex(parseInt(num));
    setCurModalImageIndex(parseInt(num));
  }

  function openImageModal() {
    setIsImageModalOpen(true);
  }

  function closeImageModal() {
    setIsImageModalOpen(false);
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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="flex flex-col items-center">
      <Header
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        cartTotal={cartState.itemNum}
        toggleCart={toggleCart}
      />
      <Product
        handleClick={handleClick}
        numToAdd={numToAdd}
        handleAddPressed={handleAddPressed}
        cycleImage={cycleImage}
        curImageIndex={curImageIndex}
        clickImage={clickImage}
        openImageModal={openImageModal}
      />
      <CartModal
        numToAdd={cartState.itemNum}
        isCartShowing={isCartShowing}
        total={cartState.total}
        deleteCart={deleteCart}
      />
      <ImageModal
        curModalImageIndex={curModalImageIndex}
        cycleModalImage={cycleModalImage}
        closeImageModal={closeImageModal}
        isImageModalOpen={isImageModalOpen}
      />
    </main>
  );
}

export default App;
