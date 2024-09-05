import { useNavigate } from "react-router-dom";
import table2Data from "./table2Data";
const screen2 = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="w-full flex flex-row items-center relative mt-4">
        <div
          className="bg-purple w-12 h-12 flex items-center justify-center rounded-md absolute -left-8 cursor-pointer"
          onClick={goback}
        >
          <i className="fa-solid fa-arrow-left text-white text-3xl" />
        </div>
        <p className="text-2xl ml-8">
          Home / <strong>BeMaster</strong>
        </p>
      </div>
      <table className="w-full h-auto items-center relative mt-12">
        <thead>
          <tr className="text-center  h-14 border-b-2 border-gray text-lg">
            <th className="w-1/14 text-center">
              <input type="checkbox" />
            </th>
            <th className="text-left">Nombre</th>
            <th className="w-2/12">tamaño</th>
            <th className="w-1/12">Duración</th>
            <th className="w-2/12">Última Modificación</th>
          </tr>
        </thead>
        <tbody>
          {table2Data.map((item, index) => (
            <tr
              key={index}
              className="border-b-2 border-gray relative h-14 text-lg cursor-pointer hover:bg-gray"
            >
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td>
                <i className="fa-regular fa-circle-play text-purple pr-6 text-2xl" />
                {item.name}
              </td>
              <td className="text-center">{item.size}</td>
              <td className="text-center">{item.duration}</td>
              <td className="text-center">{item.mod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default screen2;
