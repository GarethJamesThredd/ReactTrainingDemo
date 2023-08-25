import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhatsOn from "./WhatsOn";
import SignUp from "./SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/comingsoon" element={<div>Coming Soon</div>} />
            <Route path="/yourvisit" element={<div>Your Visit</div>} />
            <Route path="/booktickets" element={<div>Book Tickets</div>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/whatson" element={<WhatsOn />} />
          </Routes>
          <Footer />
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
