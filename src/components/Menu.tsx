import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/BlueLine-color.png';
import hamburger from '../assets/hamburger.png';
import closeButton from '../assets/close_button.png';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-['Manrope','Raleway',sans-serif] bg-white w-full flex flex-wrap min-[1024px]:flex-nowrap items-center p-4 relative">
      <div>
        <Link to="/">
          <img src={logo} alt="BlueLine Logo" className="w-[100px]" />
        </Link>
      </div>
      <ul className="hidden min-[1024px]:flex justify-center list-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        <li className="m-[5px]">
          <Link to="" className="font-['Manrope','Raleway',sans-serif] font-extrabold text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Главная</Link>
        </li>
        <li className="m-[5px]">
          <Link to="chemicals" className="font-['Manrope','Raleway',sans-serif] font-extrabold text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Химикаты</Link>
        </li>
        <li className="m-[5px]">
          <Link to="equipment" className="font-['Manrope','Raleway',sans-serif] font-extrabold text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Оборудование</Link>
        </li>
        <li className="m-[5px]">
          <Link to="contact" className="font-['Manrope','Raleway',sans-serif] font-extrabold text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Контакты</Link>
        </li>
      </ul>

      <div className="ml-auto min-[1024px]:hidden">
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center p-2 rounded-none appearance-none text-[#214598] hover:text-[#006BD6] bg-transparent hover:bg-transparent border-0 outline-none focus:outline-none focus:ring-0 shadow-none transition-colors"
        >
          <img src={isOpen ? closeButton : hamburger} alt={isOpen ? 'Close menu' : 'Open menu'} className="h-[75px] w-[75px] bg-transparent border-0" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`min-[1024px]:hidden absolute left-1/2 top-full z-50 w-screen -translate-x-1/2 !bg-white shadow-lg ring-1 ring-black/5 overflow-hidden origin-top transition-[max-height,transform] duration-300 ease-out ${
          isOpen ? 'block max-h-[80vh] translate-y-0' : 'hidden max-h-0 -translate-y-2'
        }`}
        style={{ backgroundColor: 'white' }}
      >
        <div className="absolute inset-0 bg-white pointer-events-none" aria-hidden="true" />
        <div className="relative pt-10 !bg-white w-full">
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-2 text-[#214598] hover:text-[#006BD6] bg-transparent border-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="flex flex-col py-2 list-none !bg-white w-full gap-y-[20px] divide-y divide-[#ECECEC]">
            <li className="bg-white w-full">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 font-extrabold text-[#214598] hover:text-[#006BD6] no-underline hover:bg-[#ECECEC] bg-white"
              >
                Главная
              </Link>
            </li>
            <li className="bg-white w-full">
              <Link
                to="/chemicals"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 font-extrabold text-[#214598] hover:text-[#006BD6] no-underline hover:bg-[#ECECEC] bg-white"
              >
                Химикаты
              </Link>
            </li>
            <li className="bg-white w-full">
              <Link
                to="/equipment"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 font-extrabold text-[#214598] hover:text-[#006BD6] no-underline hover:bg-[#ECECEC] bg-white"
              >
                Оборудование
              </Link>
            </li>
            <li className="bg-white w-full">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 font-extrabold text-[#214598] hover:text-[#006BD6] no-underline hover:bg-[#ECECEC] bg-white"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 