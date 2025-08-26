import { useState } from "react";
export default function ProductInfo() {
  const [numToAdd, setNumToAdd] = useState(0);
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
    <section className="flex flex-col p-6 gap-2 bg-cust-White font-kumbh-sans">
      <h1 className="uppercase text-cust-Dark-grayish-blue font-semibold text-sm">
        Sneaker Company
      </h1>

      <h2 className="font-bold text-3xl">Fall Limited Edition Sneakers</h2>

      <p className="text-cust-Dark-grayish-blue text-base mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      {/* Prices */}
      <div
        className="flex md:flex-col justify-between"
        role="region"
        aria-label="Price information"
      >
        <div className=" flex gap-4 items-center">
          <span className="font-bold text-2xl">$125.00</span>
          <span className="bg-cust-Very-dark-blue text-cust-White px-2 py-0.5 font-bold rounded-lg mt-1">
            50%
          </span>
        </div>
        <span className="text-cust-Dark-grayish-blue font-semibold">
          <del>$250.00</del>
        </span>
      </div>
      {/* Cart buttons */}
      <div className="flex flex-col  md:flex-row md:items-center">
        <div
          className="flex justify-between items-center my-4 p-4 bg-cust-Light-grayish-blue rounded-lg"
          role="group"
          aria-label="Quantity selector"
        >
          <button
            className="cursor-pointer"
            onClick={() => handleClick("-")}
            aria-label="Decrease quantity"
          >
            <span className="text-3xl text-cust-Orange font-bold">-</span>
          </button>
          <span className="font-bold text-lg" role="status" aria-live="polite">
            {numToAdd}
          </span>
          <button
            className="cursor-pointer"
            onClick={() => handleClick("+")}
            aria-label="Increase quantity"
          >
            <span className="text-3xl text-cust-Orange font-bold">+</span>
          </button>
        </div>
        <button className="flex justify-center items-center gap-3 bg-cust-Orange p-4 rounded-lg font-bold text-cust-Very-dark-blue mb-14 cursor-pointer hover:bg-cust-Pale-orange">
          <svg
            className=" fill-cust-Very-dark-blue"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
          </svg>
          Add to cart
        </button>
      </div>
    </section>
  );
}
