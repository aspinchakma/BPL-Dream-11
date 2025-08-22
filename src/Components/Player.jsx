const Player = ({ player }) => {
  const { name, image, role, country, bowling, biddingPrice, batting } = player;
  console.log(player);
  return (
    <div>
      <img
        className="h-[240px] object-cover w-full rounded-2xl"
        src={image}
        alt=""
      />
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Player;
