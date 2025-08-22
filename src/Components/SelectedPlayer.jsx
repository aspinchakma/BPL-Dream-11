import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SelectedPlayer = ({ player, handleDeletedPerson }) => {
  const { image, name, batting } = player;
  return (
    <div className="lg:flex lg:justify-between lg:items-center p-4 border-2 border-[#e7e7e7] rounded-2xl mb-3">
      <div className="flex gap-3 items-center">
        <img
          className="w-[80px] h-[80px] object-cover rounded-2xl"
          src={image}
          alt={name}
        />
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-[#717171]">{batting}</p>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => handleDeletedPerson(player)}
        className="text-red-600 cursor-pointer"
        icon={faTrash}
      />
    </div>
  );
};

export default SelectedPlayer;
