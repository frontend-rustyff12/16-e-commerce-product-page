export default function ImageModal({
  curModalImageIndex,
  cycleModalImage,
  closeImageModal,
  isImageModalOpen,
}) {
  const buttonClass =
    "bg-cust-White absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full flex items-center justify-center w-14 h-14 cursor-pointer";

  return (
    <section
      className={`${
        !isImageModalOpen
          ? "hidden"
          : "absolute top-0 h-full w-full bg-cust-Black/75 px-20 pt-40 grid grid-cols-3 grid-rows-[110px_110px_110px_110px_30px_110px]"
      } `}
    >
      <div className="col-start-2 col-end-3 row-start-1 row-end-5 relative">
        <p
          onClick={closeImageModal}
          className="absolute right-10 -translate-y-10 cursor-pointer font-bold text-xl text-cust-Dark-grayish-blue hover:text-cust-Orange transition delay-150 ease"
        >
          X
        </p>
        <img
          className=" h-full w-full rounded-2xl"
          src={`/image-product-${curModalImageIndex}.jpg`}
        />
        <button
          onClick={() => cycleModalImage("left")}
          className={`${buttonClass} left-0 -translate-x-7`}
        >
          <img src="/icon-previous.svg" alt="Previous" className="w-5 h-5" />
        </button>
        <button
          onClick={() => cycleModalImage("right")}
          className={`${buttonClass} right-0 translate-6`}
        >
          <img src="/icon-next.svg" alt="Next" className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-between col-start-2 col-end-3 row-start-6 row-end-7 px-8">
        {["1", "2", "3", "4"].map((num) => (
          <div
            className={`bg-white rounded-2xl w-20 h-20   ${
              curModalImageIndex === parseInt(num)
                ? "border-4 border-cust-Orange "
                : ""
            }`}
            key={num}
          >
            <img
              className={` object-cover rounded-xl  ${
                curModalImageIndex === parseInt(num)
                  ? " opacity-70 "
                  : "cursor-pointer"
              }`}
              src={`/image-product-${num}-thumbnail.jpg`}
              alt={`Thumbnail ${num}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2
