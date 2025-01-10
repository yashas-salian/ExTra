import { Link } from "react-router-dom";
import extraLogo from "./ExTra.png";

export const Navbar = () => {
  return (
    <nav className="border-b border-gray-800 bg-stone-900 transition-all duration-200 hover:border-cyan-400">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link to={"/"}>
          <div className="flex items-center space-x-3 transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer">
            <img
              src={extraLogo}
              className="h-8 rounded-full"
              alt="ExTra Logo"
            />
            <span className="self-center text-2xl text-cyan-500 font-bold whitespace-nowrap">
              ExTra
            </span>
          </div>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-cyan-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          aria-controls="navbar-menu"
          aria-expanded="false"
          onClick={() => {
            const menu = document.getElementById("navbar-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className="hidden w-full md:flex md:w-auto"
          id="navbar-menu"
        >
          <ul className="flex flex-col font-medium mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-cyan-500 transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
