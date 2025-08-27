export default function Header({
  cartTotal,
  menuOpen,
  toggleMenu,
  toggleCart,
}) {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <header className="bg-cust-White flex  items-center p-9 lg:p-10 lg:border-b-1 lg:border-b-cust-Grayish-blue lg:w-6xl">
      <button
        onClick={toggleMenu}
        className="absolute left-6 z-12 lg:hidden"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <img
          className="h-full"
          src={`${menuOpen ? "/icon-close.svg" : "/icon-menu.svg"}`}
          alt={`${menuOpen ? "Close menu icon" : "Hamburger menu icon"}`}
        />
      </button>

      <img
        className="absolute left-14 lg:static mb-1 "
        src="/logo.svg"
        alt="Sneakers company logo"
      />

      {/* Mobile */}
      <nav>
        <div
          className={`${
            !menuOpen
              ? "hidden"
              : "absolute left-0 top-0 h-full w-full flex flex-col bg-cust-Off-white bg-cust-Black/75 z-10  md:hidden "
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className=" flex flex-col gap-5 w-64 py-24 absolute left-0 top-0 h-screen px-6  bg-cust-White">
            {navItems.map((items, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="cursor-pointer text-cust-Very-dark-blue font-bold text-xl"
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Desktop */}

      <nav>
        <div className=" ml-8 lg:flex lg:justify-center lg:items-center lg:gap-8">
          <ul className="hidden lg:flex lg:gap-8">
            {navItems.map((items, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="nav-item hover:border-b-0 cursor-pointer text-cust-Dark-grayish-blue hover:text-cust-Very-dark-blue"
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex justify-center items-center absolute right-6 gap-6 lg:gap-12 lg:right-53">
        {/* Cart */}
        <button
          onClick={toggleCart}
          className="cursor-pointer"
          aria-label={`View cart with ${cartTotal} items`}
        >
          <img className="" src="/icon-cart.svg" alt="Cart icon" />
          {cartTotal > 0 ? (
            <span className="absolute top-0 -translate-y-2 lg:top-2 bg-cust-Orange rounded-full px-1.5 lg:px-2 text-[10px] lg:text-xs  text-cust-White font-bold">
              {cartTotal}
            </span>
          ) : (
            ""
          )}
        </button>
        {/* Avatar */}
        <button>
          <img
            className="h-6 lg:h-10 hover:border-2 hover:border-cust-Orange rounded-full cursor-pointer"
            src="/image-avatar.png"
            alt="Avatar image of current user"
            aria-label="View user profile"
          />
        </button>
      </div>
    </header>
  );
}
