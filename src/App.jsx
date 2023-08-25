import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhatsOn from "./WhatsOn";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Header />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/comingsoon" element={<div>Coming Soon</div>} />
            <Route path="/yourvisit" element={<div>Your Visit</div>} />
            <Route path="/booktickets" element={<div>Book Tickets</div>} />
            <Route path="/signup" element={<div>Sign Up</div>} />
            <Route path="/whatson" element={<WhatsOn />} />
          </Routes>
          {/* <Footer /> */}
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
