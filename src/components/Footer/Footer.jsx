import { services, helpful, information } from "./FooterData";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-linear-to-tr from-[#E0F3FF] via-white to-[#F5FBFF] text-gray-800 py-16 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] p-6 sm:p-10 lg:p-16">
      <div className="bg-white rounded-lg  shadow-lg border border-gray-200 px-10">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-4 my-10 sm:space-y-5">
          <div className="flex  flex-col space-y-10">
            <p className="mb-5">
              Empowering Afghan Youth with Skills for a Digital Future
              <span className="font-bold">-Powered by Upskill</span>
            </p>
            <div className="flex gap-2 text-2xl justify-center sm:justify-start">
              <span className="hover:text-sky-500">
                <a href="#">{<FaFacebook />}</a>
              </span>
              <span className="hover:text-sky-500">
                <a href="#">{<FaInstagram />}</a>
              </span>
              <span className="hover:text-sky-500">
                <a href="#">{<FaTwitter />}</a>
              </span>
              <span className="hover:text-sky-500">
                <a href="#">{<FaLinkedin />}</a>
              </span>
            </div>
            <p>Let's Connect !</p>
          </div>

          <div>
            <h3 className="font-bold mb-5">Services</h3>
            <ul className="flex flex-col space-y-2">
              {services.map((service) => {
                return (
                  <li className="text-sm" key={service.id}>
                    <a href="#"> {service.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5">Helpful Links</h3>
            <ul className="flex flex-col space-y-2">
              {helpful.map((service) => {
                return (
                  <li className="text-sm" key={service.id}>
                    <a href="#"> {service.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-5">Information</h3>
            <ul className="flex flex-col space-y-2">
              {information.map((service) => {
                return (
                  <li className="text-sm" key={service.id}>
                    <a href="#"> {service.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="border border-gray-200"></div>
        <div className="grid grid-cols-1 py-3 sm:grid-cols-2 text-center space-y-4 ">
          <div className="flex gap-4  text-xs text-gray-500 pl-20 sm:p-0 ">
            <p className="hover:cursor-pointer hover:text-sky-500">
              Privacy & Policy
            </p>
            <p className="hover:cursor-pointer hover:text-sky-500">
              Terms & Condition
            </p>
          </div>
          <div className="text-center text-xs">
            <p>&copy; 2026 Upskill Online.All rights reserved.</p>
            <p>
              Powered by <span className="text-sky-500"> Upskill</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
