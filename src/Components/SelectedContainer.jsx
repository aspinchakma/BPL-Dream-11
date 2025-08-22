import "./SelectContainer.css";
import SelectedPlayer from "./SelectedPlayer";

const SelectedContainer = ({
  choosePlayers,
  handleDeletedPerson,
  hangleAddMorePlayer,
}) => {
  return (
    <div>
      {choosePlayers.map((player) => (
        <SelectedPlayer
          player={player}
          key={player.id}
          handleDeletedPerson={handleDeletedPerson}
        />
      ))}
      {choosePlayers.length === 6 ? (
        ""
      ) : (
        <div className="add_more_button_container w-fit mt-5">
          <button onClick={hangleAddMorePlayer}>Add More Player</button>
        </div>
      )}
    </div>
  );
};

export default SelectedContainer;
