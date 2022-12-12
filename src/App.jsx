import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className=' overflow-x-hidden '>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
