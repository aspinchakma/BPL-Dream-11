import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = ({ player }) => {
  const { name, image, role, country, bowling, biddingPrice, batting, id } =
    player;
  console.log(player);
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
      <div class="divider my-2"></div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Rating: </p>
        {/* Rating  */}
        <div className="rating rating-sm">
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${id}`}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <div className="flex justify-between items-center my-2">
        <p className="font-bold">{batting}</p>
        <p className="text-[#595959]">{bowling}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Price: {biddingPrice}Tk</p>
        <button className="rounded-lg py-2 px-4 border-2 border-[#e7e7e7]">
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
