import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = ({ player, handleChoosePlayer }) => {
  const {
    name,
    image,
    role,
    country,
    bowling,
    biddingPrice,
    batting,
    id,
    rating,
  } = player;
  return (
    <div className="p-6 rounded-2xl border-2 border-[#e7e7e7]">
      <img
        className="h-[240px] object-cover w-full rounded-2xl"
        src={image}
        alt=""
      />
      <div className="flex gap-3 items-center mt-6 mb-2">
        <img
          src={image}
          className="w-[50px] rounded-3xl h-[50px] object-cover"
          alt=""
        />

        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center text-[#898989]">
          <FontAwesomeIcon className="text-[18px]" icon={faFlag} />
          <p className="text-[18px]">{country}</p>
        </div>
        <p className="text-[16px] px-4 py-2 rounded-lg bg-[#f3f3f3]">{role}</p>
      </div>
      <div className="divider my-2"></div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Rating: </p>
        {/* Rating  */}
        <div className="rating rating-sm">
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            checked={rating == 1}
            readOnly
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            checked={rating == 2}
            readOnly
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            checked={rating == 3}
            readOnly
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            checked={rating == 4}
            readOnly
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            checked={rating == 5}
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-between items-center my-2">
        <p className="font-bold">{batting}</p>
        <p className="text-[#595959]">{bowling}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Price: {biddingPrice}Tk</p>
        <button
          onClick={() => handleChoosePlayer(player)}
          className="rounded-lg py-2 px-4 border-2 border-[#e7e7e7]"
        >
          Choose Player
        </button>
      </div>
      <button className="text-blue-500">More About</button>
    </div>
  );
};

export default Player;
