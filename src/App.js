import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import CoinDetails from "./Components/CoinDetails";
import Footer from "./Components/Footer";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
