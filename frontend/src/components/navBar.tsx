import { Link } from "react-router-dom"
import extraLogo from './ExTra.png';

export const Navbar=()=>{
    return <nav className="border-gray-200 bg-stone-900 transtition-all duration-200 hover:border-cyan-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"}>
        <a className="flex items-center space-x-3 rtl:space-x-reverse transtition-all duration-200 hover:-translate-y-1 hover:cursor-pointer">
              <img src={extraLogo} className="h-8 rounded-full" alt="Flowbite Logo" />
              <span className="self-center text-2xl text-cyan-500 font-bold whitespace-nowrap">ExTra</span>
        </a>
          </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <li>
              <div className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded  md:bg-transparent md:text-cyan-500 transtition-all duration-200 hover:-translate-y-1 hover:cursor-pointer">Home</div>
            </li>
            <li>
              <div  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transtition-all duration-200 hover:-translate-y-1 hover:cursor-pointer">Services</div>
            </li>
            <li>
              <div  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transtition-all duration-200 hover:-translate-y-1 hover:cursor-pointer">Pricing</div>
            </li>
            <li>
              <div  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transtition-all duration-200 hover:-translate-y-1 hover:cursor-pointer">Contact</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
}