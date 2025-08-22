import SelectedPlayer from "./SelectedPlayer";

const SelectedContainer = ({ choosePlayers, handleDeletedPerson }) => {
  return (
    <div>
      {choosePlayers.map((player) => (
        <SelectedPlayer
          player={player}
          key={player.id}
          handleDeletedPerson={handleDeletedPerson}
        />
      ))}
    </div>
  );
};

export default SelectedContainer;
