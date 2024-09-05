import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="bg-white h-full w-1/6 rounded-3xl relative">
      <ul className="flex flex-col gap-4 px-4 pb-16">
        <li className="overflow-hidden flex justify-center content-center ">
          <img src="/logo.png" alt="logo" className="w-20 pt-14 pb-6" />
        </li>
        <li>
          <Link
            to="/"
            className="flex flex-row gap-6 text-xl items-center pl-6 rounded-xl py-3 hover:bg-purple hover:text-white"
          >
            <i className="fa-solid fa-border-all" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex flex-row gap-6 text-xl items-center pl-6 bg-purple rounded-xl py-3 text-white"
          >
            <i className="fa-regular fa-folder" />
            Videos
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex flex-row gap-6 text-xl items-center pl-6 rounded-xl py-3  hover:bg-purple hover:text-white"
          >
            <i className="fa-regular fa-circle-play" />
            Player
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex flex-row gap-6 text-xl items-center pl-6 rounded-xl py-3  hover:bg-purple hover:text-white"
          >
            <i className="fa-solid fa-chart-line" />
            Analytics
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex flex-row gap-6 text-xl items-center pl-6 rounded-xl py-3  hover:bg-purple hover:text-white"
          >
            <i className="bx bx-cog" />
            Configuraciones
          </Link>
        </li>
      </ul>
      <div className="bg-gray m-4 rounded-2xl px-4 py-6 overflow-hidden relative">
        <h3 className="text-xl font-bold">Mi Plan - Plus</h3>
        <p className="text-sm opacity-75">El uso se renueva el: 3-may-23</p>
        <div className=" mt-6 flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="text-base opacity-75">Almacenamiento</p>
            <p className="text-xs opacity-75">23.5 GB / 1 TB</p>
          </div>
          <div className="w-full h-2 rounded-full bg-darkGray overflow-hidden">
            <div className="w-2/3 bg-purple h-full rounded-full"></div>
          </div>
        </div>
        <div className=" mt-6 flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="text-base opacity-75">Banda Mensual</p>
            <p className="text-xs opacity-75">3.4 TB / 5 TB</p>
          </div>
          <div className="w-full h-2 rounded-full bg-darkGray overflow-hidden">
            <div className="w-3/5 bg-purple h-full rounded-full"></div>
          </div>
        </div>
        <button className="bg-purple rounded-full px-6 py-2 text-white mt-6 text-base">
          Administrar Plan
        </button>
      </div>
    </div>
  );
};

export default sidebar;
