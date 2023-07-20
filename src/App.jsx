import "./App.css";

import React from "react";
import Siderbar from "./components/Siderbar";
import ShowMenu from "./components/ShowMenu";
import MenuOrder from "./components/MenuOrder";

const App = () => {
  return (
    <div className="bg-[#334155] w-full min-h-screen">
      <Siderbar />
      <ShowMenu />
      <MenuOrder/>
    </div>
  );
};

export default App;
