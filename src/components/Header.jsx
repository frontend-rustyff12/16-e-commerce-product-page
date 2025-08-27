export default function Header({
  cartTotal,
  menuOpen,
  toggleMenu,
  toggleCart,
}) {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <header className="bg-cust-White flex  items-center p-9 lg:p-10 lg:border-b-1 lg:border-b-cust-Grayish-blue lg:w-6xl">
      <button onClick={toggleMenu} className="absolute left-6 z-12 lg:hidden">
        <img
          className="h-full"
          src={`${menuOpen ? "/icon-close.svg" : "/icon-menu.svg"}`}
          alt=""
        />
      </button>

      <img
        className="absolute left-14 lg:static mb-1 "
        src="/logo.svg"
        alt=""
      />

      {/* Mobile */}
      <div
        className={`${
          !menuOpen
            ? "hidden"
            : "absolute left-0 top-0 h-full w-full flex flex-col   bg-cust-Off-white bg-cust-Black/75 z-10  md:hidden "
        }`}
      >
        <ul className=" flex flex-col gap-5 w-64 py-24 absolute left-0 top-0 h-screen px-6  bg-cust-White">
          {navItems.map((items, index) => (
            <li
              className="nav-item hover:border-b-0 cursor-pointer  text-cust-Very-dark-blue font-bold text-xl"
              key={index}
            >
              {items}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop */}

      <div className=" ml-8 lg:flex lg:justify-center lg:items-center lg:gap-8">
        <ul className="hidden lg:flex lg:gap-8">
          {navItems.map((items, index) => (
            <li
              className="nav-item hover:border-b-0 cursor-pointer text-cust-Dark-grayish-blue hover:text-cust-Very-dark-blue"
              key={index}
            >
              {items}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center absolute right-6 gap-6 lg:gap-12 lg:right-53">
        <button onClick={toggleCart} className="cursor-pointer  ">
          <img className="" src="/icon-cart.svg" alt="" />
          {cartTotal > 0 ? (
            <span className="absolute top-4 lg:top-10 bg-cust-Orange rounded-full px-1.5 lg:px-2 text-[10px] lg:text-xs  text-cust-White font-bold">
              {cartTotal}
            </span>
          ) : (
            ""
          )}
        </button>
        <button>
          <img
            className="h-6 lg:h-10 hover:border-2 hover:border-cust-Orange rounded-full cursor-pointer"
            src="/image-avatar.png"
            alt=""
          />
        </button>
      </div>
    </header>
  );
}
