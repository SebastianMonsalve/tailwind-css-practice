import table1Data from "./table1Data";
const screen1 = () => {
  return (
    <div className="w-5/6 h-full rounded-3xl py-8 px-16 bg-white relative overflow-auto">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <a
            href="#"
            className="flex flex-row items-center gap-4 text-xl text-purple border-b-4"
          >
            <i className="bx bx-library" />
            Biblioteca
          </a>
          <a
            href="#"
            className="flex flex-row items-center gap-4 text-xl hover:text-purple hover:border-b-4"
          >
            <i className="fa-regular fa-trash-can" />
            Papelera
          </a>
        </div>
        <div className="flex flex-row gap-6">
          <button className="flex flex-row gap-4 text-xl rounded-lg items-center px-6 py-4 bg-gray">
            <i className="fa-regular fa-folder" />
            Nueva Carpeta
          </button>
          <button className="flex flex-row gap-4 text-xl rounded-lg items-center px-6 py-4 bg-purple text-white">
            <i className="fa-regular fa-circle-play" />
            Nuevo Video
          </button>
        </div>
      </div>
      <div className="border-2 border-darkGray w-1/3 py-2 px-2 rounded-md flex flex-row items-center gap-4 mt-10">
        <i className="fa-solid fa-magnifying-glass border-r-2 border-darkGray pr-2 text-darkGray" />
        <input
          type="text"
          placeholder="Buscar Video"
          className="focus:outline-none w-full"
        />
      </div>
      <table className="w-full h-auto items-center relative mt-8">
        <tr className="text-center  h-14 border-b-2 border-gray text-lg">
          <th className="w-1/14 text-center">
            <input type="checkbox" />
          </th>
          <th className="text-left">Nombre</th>
          <th className="w-2/12">Videos</th>
          <th className="w-1/12">Tamaño</th>
          <th className="w-2/12">Última Modificación</th>
        </tr>
        {table1Data.map((data) => (
          <tr
            key={data}
            className="border-b-2 border-gray relative h-14 text-lg cursor-pointer hover:bg-gray"
          >
            <td className="text-center">
              <input type="checkbox" />
            </td>
            <td>
              <i className="fa-regular fa-folder text-purple pr-6" />
              {data.name}
            </td>
            <td className="text-center">{data.video}</td>
            <td className="text-center">{data.size}</td>
            <td className="text-center">{data.mod}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default screen1;
