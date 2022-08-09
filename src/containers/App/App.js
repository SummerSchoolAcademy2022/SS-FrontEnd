import Home from "../Home/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Donuts from "../Donuts";
import DonutsForSpecialNeeds from "../DonutsForSpecialNeeds";
import Gelato from "../Gelato";
import GelatoForSpecialNeeds from "../GelatoForSpecialNeeds";
import Product from "../../components/Product/Product";
import Navbar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App-container">
        <Navbar />
        {/* Routing for all pages */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donuts" element={<Donuts />}></Route>
          <Route
            path="/donutsforspecialneeds"
            element={<DonutsForSpecialNeeds />}
          ></Route>
          <Route path="/gelato" element={<Gelato />}></Route>
          <Route
            path="/gelatoforspecialneeds"
            element={<GelatoForSpecialNeeds />}
          ></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
        {/* <Home /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
