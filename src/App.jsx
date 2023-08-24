import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
