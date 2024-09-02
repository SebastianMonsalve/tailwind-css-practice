import Sidebar from "./components/sidebar.jsx";
import Screen1 from "./components/screen1.jsx";

export default function App() {
  return (
    <div className="h-screen w-screen flex bg-gray overflow-auto box-border m-0 p-6 gap-6 font-sanss">
      <Sidebar />
      <Screen1 />
    </div>
  );
}
