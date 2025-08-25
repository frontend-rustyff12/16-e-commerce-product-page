export default function Header() {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <header className="bg-cust-White flex justify-between items-center p-6">
      <div className="flex justify-center items-center gap-4 md:gap-8">
        <button className="absolute left-6 md:hidden">
          <img className="h-full" src="/icon-menu.svg" alt="" />
        </button>
        <img
          className="absolute left-14 md:static mb-1 "
          src="/logo.svg"
          alt=""
        />
        <ul className="hidden md:flex md:gap-8">
          {navItems.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-6">
        <button>
          <img className="" src="/icon-cart.svg" alt="" />
        </button>
        <button>
          <img className="h-6" src="/image-avatar.png" alt="" />
        </button>
      </div>
    </header>
  );
}

["Collections", "Men", "Women", "About", "Contact"];
