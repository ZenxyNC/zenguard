import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/landing/landing.jsx";
import Download from "./components/download/download.jsx";

export default function App() {
  return (
    <Router basename="/zenguard">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/zenguard-for-developer" element={<Download />} />
      </Routes>
    </Router>
  );
}