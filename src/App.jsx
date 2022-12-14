import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Productpage from "./pages/productpage/Productpage";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className=' overflow-x-hidden '>
      <Navbar />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='/products'
            element={<Productpage />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
