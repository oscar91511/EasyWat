import { useState } from "react";

import {
  RiAddLine,
  RiCloseLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiUser3Line,
} from "react-icons/ri";
import Siderbar from "./Siderbar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-4xl
         text-orange-600  p-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl"
    >
      <Siderbar showMenu={showMenu} />
      <button>
        <RiUser3Line className="hover:text-white p-2" />
      </button>
      <button>
        <RiAddLine className="hover:text-white p-2" />
      </button>
      <button>
        <RiPieChartLine className="hover:text-white p-2" />
      </button>
      <button
        onClick={toggleMenu}
        className="text-orange-400 hover:text-white p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </nav>
  );
}

export default App;
