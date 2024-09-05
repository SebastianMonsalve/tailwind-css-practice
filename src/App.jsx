import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar.jsx";
import Screen1 from "./components/screen1.jsx";
import Screen2 from "./components/screen2.jsx";

export default function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex bg-gray overflow-auto box-border m-0 p-6 gap-6 font-sanss">
        <Sidebar />
        <div className="w-5/6 h-full rounded-3xl py-8 px-16 bg-white relative overflow-auto">
          <Routes>
            <Route path="/" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
