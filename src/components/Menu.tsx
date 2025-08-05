import { Link } from 'react-router-dom';
import logo from '../assets/BlueLine-color.png';

export default function Menu() {
  return (
    <nav className="font-['Raleway'] bg-white w-full flex items-center p-4 relative">
      <div>
        <Link to="/">
          <img src={logo} alt="BlueLine Logo" className="w-[100px]" />
        </Link>
      </div>
      <ul className="flex justify-center list-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <li className="m-[5px]">
          <Link to="/" className="font-['Raleway'] text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Главная</Link>
        </li>
        <li className="m-[5px]">
          <Link to="/chemicals" className="font-['Raleway'] text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Химикаты</Link>
        </li>
        <li className="m-[5px]">
          <Link to="/equipment" className="font-['Raleway'] text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Оборудование</Link>
        </li>
        <li className="m-[5px]">
          <Link to="/contact" className="font-['Raleway'] text-[#214598] hover:text-[#006BD6] p-[10px] no-underline hover:bg-[#ECECEC] rounded text-lg">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
} 