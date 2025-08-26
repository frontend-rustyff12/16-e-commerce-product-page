export default function Header({ cartTotal, toggleCart }) {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <header className="bg-cust-White flex justify-between items-center p-6 lg:p-10 lg:border-b-1 lg:border-b-cust-Grayish-blue lg:w-6xl">
      <div className="flex justify-center items-center gap-4 lg:gap-8">
        <button className="absolute left-6 lg:hidden">
          <img className="h-full" src="/icon-menu.svg" alt="" />
        </button>
        <img
          className="absolute left-14 lg:static mb-1 "
          src="/logo.svg"
          alt=""
        />
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
      <div className="flex justify-center items-center absolute right-6 gap-6 lg:gap-12 ">
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

["Collections", "Men", "Women", "About", "Contact"];
