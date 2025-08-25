export default function ProductInfo() {
  return (
    <section>
      <h1 className="">Sneaker Company</h1>

      <h2 className="">Fall Limited Edition Sneakers</h2>

      <p className="">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="">$125.00 50% $250.00</div>
      <div className="">
        <div className="">
          <button>
            <img src="/icon-minus.svg" alt="" />
          </button>
          0
          <button>
            <img src="/icon-plus.svg" alt="" />
          </button>
        </div>
        <button className="flex">
          {" "}
          <img src="/icon-cart.svg" alt="" />
          Add to cart
        </button>
      </div>
    </section>
  );
}
