import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Productpage from "./pages/productpage/Productpage";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkoutpage/Checkout";

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
          <Route
            path='/checkout'
            element={<Checkout />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
