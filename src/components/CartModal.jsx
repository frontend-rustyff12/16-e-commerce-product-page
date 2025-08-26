export default function CartModal({
  total,
  isCartShowing,
  numToAdd,
  deleteCart,
}) {
  return (
    <article
      className={`w-[97vw] bg-cust-White aspect-video rounded-lg font-kumbh-sans lg:w-84 lg:shadow-[0px_11px_12px_5px_rgba(0,_0,_0,_0.1)] ${
        isCartShowing ? "" : "hidden"
      }`}
    >
      <div className="border-b-1 border-b-cust-Grayish-blue px-4 pt-5 pb-6">
        <h3 className="text-lg font-bold">Cart</h3>
      </div>

      <div className="h-full p-8 lg:px-6 rounded-b-lg  flex justify-center items-center ">
        {total > 0 ? (
          <div className="w-full h-full grid grid-cols-1 grid-rows-2 gap-8 ">
            <div className="flex gap-3 justify-between items-center">
              <img
                className="h-full rounded"
                src="/image-product-1-thumbnail.jpg"
                alt=""
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
              <button onClick={deleteCart}>
                <img
                  className="w-4 h-4 self-center"
                  src="/icon-delete.svg"
                  alt=""
                />
              </button>
            </div>
            <button className="flex justify-center items-center bg-cust-Orange p-4 rounded-lg font-bold text-cust-Very-dark-blue  cursor-pointer hover:bg-cust-Pale-orange w-full">
              Checkout
            </button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </article>
  );
}
