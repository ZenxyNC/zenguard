import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './page-component/landing/landing'
import './resource/font/importFont.css';
import './page-component/landing/landing.css'
import Download from "./page-component/download/download";

export default function App() {

  return (
    <Router basename="/zenguard">
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/zenguard/download" element={<Download />} />
      </Routes>
    </Router>
  )
}