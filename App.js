import "./App.css";
import Menu from "./Menu";
import Home from "./Home";
import Cart from "./Cart";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </>
  );
}

export default App;
