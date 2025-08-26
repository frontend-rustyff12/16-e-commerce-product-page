export default function ImageModal({ curImageIndex, cycleImage }) {
  const buttonClass =
    "bg-cust-White absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full flex items-center justify-center w-14 h-14 ";

  return (
    <section className="lg:hidden lg:absolute lg:top-0 lg:h-full lg:w-full lg:bg-cust-Black/75 lg:flex lg:justify-center lg:items-center">
      <div className="w-[550px] h-[700px] grid grid-rows-7 ">
        <div className="row-start-1 row-end-7 ">
          <div
            className={`bg-[url('/public/image-product-${curImageIndex}.jpg')] bg-cover h-[550px] relative  rounded-2xl`}
          >
            <button
              onClick={() => cycleImage("left")}
              className={`${buttonClass} left-0 -translate-x-7`}
            >
              <img
                src="/icon-previous.svg"
                alt="Previous"
                className="w-5 h-5"
              />
            </button>
            <button
              onClick={() => cycleImage("right")}
              className={`${buttonClass} right-0 translate-6`}
            >
              <img src="/icon-next.svg" alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className=" row-start-7 flex justify-between px-8">
          {["1", "2", "3", "4"].map((num) => (
            <div
              className={`bg-white rounded-2xl w-26 h-26   ${
                curImageIndex === parseInt(num)
                  ? "border-4 border-cust-Orange "
                  : ""
              }`}
              key={num}
            >
              <img
                className={` object-cover rounded-xl  ${
                  curImageIndex === parseInt(num)
                    ? " opacity-70 "
                    : "cursor-pointer"
                }`}
                src={`/image-product-${num}-thumbnail.jpg`}
                alt={`Thumbnail ${num}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2
