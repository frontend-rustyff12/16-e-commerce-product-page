export default function ProductImage() {
  const buttonClass =
    "bg-cust-White absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full flex items-center justify-center w-10 h-10";

  return (
    <section>
      <div className="bg-[url('/image-product-1.jpg')] bg-cover h-74 relative">
        <button className={`${buttonClass} left-4`}>
          <img src="/icon-previous.svg" alt="Previous" className="w-3 h-3" />
        </button>
        <button className={`${buttonClass} right-4`}>
          <img src="/icon-next.svg" alt="Next" className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}
