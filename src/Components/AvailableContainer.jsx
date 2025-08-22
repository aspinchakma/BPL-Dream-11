import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Player from "./Player";

const AvailableContainer = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const url = `https://aspinchakma.github.io/api-for-practice/players.json`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Server Problem");
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        toast(error.message);
      }
    };
    loadData();
  }, []);
  return (
    <div>
      {players.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </div>
      ) : (
        <div className="h-[300px] flex justify-center items-center">
          <span className="loading loading-bars w-[100px]"></span>
        </div>
      )}
    </div>
  );
};

export default AvailableContainer;
