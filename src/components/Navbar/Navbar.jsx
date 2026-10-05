import { useState } from "react";
import logo from "../../assets/blueLogoBack.webp";
import { links } from "./NavbarData";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 transition-shadow duration-200">
      {" "}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {" "}
        <img src={logo} alt="" className="h-16 w-auto" />{" "}
        {/* Desktop Navigation */}{" "}
        <ul className="ml-10 md:flex items-baseline space-x-8 hidden">
          {" "}
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="relative hover:text-sky-500 hover:cursor-pointer"
              >
                {" "}
                {link.link}{" "}
                {link.haveBadge ? (
                  <span className="absolute -top-2 -right-3 uppercase text-[10px] font-semibold px-2 py-0.5 rounded-full border border-sky-200 bg-sky-500 text-white shadow-sm animate-pulse">
                    {" "}
                    {link.badgeName}{" "}
                  </span>
                ) : (
                  ""
                )}{" "}
              </li>
            );
          })}{" "}
        </ul>{" "}
        {/* Desktop Buttons */}{" "}
        <div className="hidden md:flex items-center space-x-4">
          {" "}
          <button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 px-5 py-3 rounded-full text-sm font-medium shadow-sm transition hover:cursor-pointer">
            {" "}
            Log in{" "}
          </button>{" "}
          <button className="text-white bg-[#0099F4] px-5 py-3 sm:px-6 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:cursor-pointer">
            {" "}
            Start Learning{" "}
          </button>{" "}
        </div>{" "}
        {/* Mobile Hamburger */}{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:text-sky-500 transition"
          aria-label="Toggle menu"
        >
          {" "}
          {isOpen ? <X size={28} /> : <Menu size={28} />}{" "}
        </button>{" "}
      </nav>{" "}
      {/* Mobile Menu */}{" "}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-5 shadow-lg">
          {" "}
          <ul className="flex flex-col space-y-4">
            {" "}
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="relative hover:text-sky-500 hover:cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {" "}
                  {link.link}{" "}
                  {link.haveBadge ? (
                    <span className="ml-2 uppercase text-[10px] font-semibold px-2 py-0.5 rounded-full border border-sky-200 bg-sky-500 text-white shadow-sm animate-pulse">
                      {" "}
                      {link.badgeName}{" "}
                    </span>
                  ) : (
                    ""
                  )}{" "}
                </li>
              );
            })}{" "}
          </ul>{" "}
          <div className="flex flex-col gap-3 mt-5">
            {" "}
            <button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 px-5 py-3 rounded-full text-sm font-medium shadow-sm transition hover:cursor-pointer">
              {" "}
              Log in{" "}
            </button>{" "}
            <button className="text-white bg-[#0099F4] px-5 py-3 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:cursor-pointer">
              {" "}
              Start Learning{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </header>
  );
};
export default Navbar;
