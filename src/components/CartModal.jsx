export default function CartModal({
  total,
  isCartShowing,
  numToAdd,
  deleteCart,
}) {
  return (
    <article
      className={`absolute top-20 left-1/2 -translate-x-1/2 lg:right-34 lg:left-auto lg:translate-x-0 w-[97vw] bg-cust-White aspect-video rounded-lg font-kumbh-sans lg:w-84 lg:shadow-[0px_11px_12px_5px_rgba(0,_0,_0,_0.1)] ${
        isCartShowing ? "" : "hidden"
      }`}
      role="dialog"
      aria-labelledby="cart-title"
      aria-modal="true"
    >
      <div className="border-b-1 border-b-cust-Grayish-blue px-4 pt-5 pb-6">
        <h3 id="cart-title" className="text-lg font-bold">
          Cart
        </h3>
      </div>

      <div className="h-full p-8 lg:px-6 rounded-b-lg  flex justify-center items-center ">
        {total > 0 ? (
          <div className="w-full h-full grid grid-cols-1 grid-rows-2 gap-8 ">
            <div className="flex gap-3 justify-between items-center">
              <img
                className="h-full rounded"
                src="/image-product-1-thumbnail.jpg"
                alt=""
                aria-hidden="true"
              />
              <div>
                <p className="text-cust-Dark-grayish-blue lg:text-sm">
                  Fall Limited Edition Sneakers
                </p>
                <div>
                  <span className="text-cust-Dark-grayish-blue lg:text-sm">
                    $125.00{" "}
                  </span>
                  <span className="text-cust-Dark-grayish-blue lg:text-sm">
                    x {numToAdd}
                  </span>
                  <span className="font-bold lg:text-sm"> ${total}</span>
                </div>
              </div>
              <button
                onClick={deleteCart}
                className="cursor-pointer"
                aria-label="Remove item from cart"
              >
                <img
                  className="w-4 h-4 self-center"
                  src="/icon-delete.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            </div>
            <button
              className="flex justify-center items-center bg-cust-Orange p-4 rounded-lg font-bold text-cust-Very-dark-blue  cursor-pointer hover:bg-cust-Pale-orange w-full"
              aria-label="Proceed to checkout"
            >
              Checkout
            </button>
          </div>
        ) : (
          <p aria-live="polite">Your cart is empty.</p>
        )}
      </div>
    </article>
  );
}
