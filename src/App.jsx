import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import WhatsOn from "./WhatsOn";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/whatson" element={<WhatsOn />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
