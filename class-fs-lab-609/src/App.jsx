import { forwardRef, useState } from "react";
import {BrowserRouter,Router, Routes, Route, Link,} from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;