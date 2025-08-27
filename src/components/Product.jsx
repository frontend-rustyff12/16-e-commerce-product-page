export default function Product({
  handleClick,
  numToAdd,
  handleAddPressed,
  cycleImage,
  curImageIndex,
  clickImage,
  openImageModal,
}) {
  const buttonClass =
    "bg-cust-White absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full flex items-center justify-center w-10 h-10 lg:hidden";

  return (
    <div className="font-kumbh-sans sm:w-7/12 sm:pt-20 lg:flex lg:gap-28  lg:h-[500px] lg:mt-16 lg:mb-22 lg:w-6xl lg:px-8  lg:justify-center lg:items-center lg:p-10">
      {/* Product Images */}
      <section className="lg:w-full lg:h-full lg:grid lg:grid-rows-7 lg:gap-3">
        <div className="lg:row-start-1 lg:row-end-7">
          <div className="relative">
            <img
              onClick={openImageModal}
              className="w-full h-82 lg:h-96 lg:rounded-2xl pointer-events-none lg:pointer-events-auto lg:cursor-pointer"
              src={`/image-product-${curImageIndex}.jpg`}
              alt=""
            />
            <button
              onClick={() => cycleImage("left")}
              className={`${buttonClass} left-4`}
            >
              <img
                src="/icon-previous.svg"
                alt="Previous"
                className="w-3 h-3"
              />
            </button>
            <button
              onClick={() => cycleImage("right")}
              className={`${buttonClass} right-4`}
            >
              <img src="/icon-next.svg" alt="Next" className="w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="hidden lg:row-start-7 lg:flex lg:justify-between lg:pt-6">
          {["1", "2", "3", "4"].map((num) => (
            <div
              key={num}
              onClick={() => clickImage(num)}
              className={`bg-white rounded-2xl w-26 h-26 hover:opacity-70 hover:border-4 hover:border-cust-Orange ${
                curImageIndex === parseInt(num)
                  ? "border-4 border-cust-Orange"
                  : ""
              }`}
            >
              <img
                className={`object-cover rounded-xl ${
                  curImageIndex === parseInt(num)
                    ? "opacity-70"
                    : "cursor-pointer"
                }`}
                src={`/image-product-${num}-thumbnail.jpg`}
                alt={`Thumbnail ${num}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Product Info */}
      <section className="flex flex-col p-6 gap-2 bg-cust-White lg:w-full lg:h-full lg:justify-center lg:gap-6 lg:mt-4">
        <h1 className="uppercase text-cust-Dark-grayish-blue font-semibold text-sm">
          Sneaker Company
        </h1>

        <h2 className="font-bold text-3xl lg:text-4xl">
          Fall Limited Edition Sneakers
        </h2>

        <p className="text-cust-Dark-grayish-blue text-base mb-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
        {/* Prices */}
        <div
          className="flex lg:flex-col justify-between items-center lg:items-start lg:gap-4"
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 lg:justify-between">
          <div
            className="flex justify-between items-center my-4 p-4 bg-cust-Light-grayish-blue rounded-lg w-full"
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
            <span
              className="font-bold text-lg"
              role="status"
              aria-live="polite"
            >
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
          <button
            onClick={handleAddPressed}
            className="flex justify-center items-center gap-3 bg-cust-Orange p-4 rounded-lg font-bold text-cust-Very-dark-blue mb-14 lg:mb-0 cursor-pointer hover:bg-cust-Pale-orange w-full"
          >
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
    </div>
  );
}
