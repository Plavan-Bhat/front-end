import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import Page2 from './pages/page2'; 
import Page3 from './pages/page3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/1" element={<LoginPage />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />

      </Routes>
    </Router>
  );
}

export default App;
