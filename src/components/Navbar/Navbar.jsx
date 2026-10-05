import logo from "../../assets/blueLogoBack.webp";
import { links } from "./NavbarData";
const Navbar = () => {
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 transition-shadow duration-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <img src={logo} alt="" className="h-16 w-auto" />
        <ul className="ml-10 md:flex items-baseline space-x-8 hidden">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="relative hover:text-sky-500 hover:cursor-pointer"
              >
                {link.link}
                {link.haveBadge ? (
                  <span className="absolute -top-2 -right-3 uppercase text-[10px] font-semibold px-2 py-0.5 rounded-full border border-sky-200 bg-sky-500 text-white shadow-sm animate-pulse">
                    {link.badgeName}
                  </span>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 px-5 py-3 rounded-full text-sm font-medium shadow-sm transition hover:cursor-pointer">
            Log in
          </button>
          <button className="text-white  bg-[#0099F4]  px-5 py-3 sm:px-6 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:cursor-pointer">
            Start Learning
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
