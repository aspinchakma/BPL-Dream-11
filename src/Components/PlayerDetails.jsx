import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";
const PlayerDetails = () => {
  const location = useLocation();
  const data = location.state;
  const {
    name,
    about,
    batting,
    biddingPrice,
    bowling,
    country,
    image,
    role,
    rating,
    id,
  } = data;
  return (
    <>
      <Header />
      {/* Display Player */}
      <div className="playerDetailsContainer w-[95%] lg:w-[80%] mx-auto mt-6">
        <img
          className="rounded-xl lg:h-[600px] lg:w-[80%] mx-auto object-cover mb-8"
          src={image}
          alt=""
        />
        <div className="flex gap-3 mt-6 mb-2">
          <img
            src={image}
            className="w-[100px] rounded-lg h-[100px] object-cover"
            alt=""
          />

          <div>
            <h3 className="text-xl lg:text-3xl font-bold">{name}</h3>
            <div className="divider my-0"></div>
            <div className="flex gap-2 items-center text-[#898989] mb-1">
              <FontAwesomeIcon className="text-[18px]" icon={faFlag} />
              <p className="text-[18px]">{country}</p>
            </div>
            <div className="flex justify-between items-center">
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
          </div>
        </div>
        <p className="text-[#595959] text-[18px] my-4">{about}</p>
        <p className="font-bold mt-4 text-xl text-blue-500">
          Market Value: {biddingPrice}Tk
        </p>
        <div className="divider my-2"></div>
        <div className="flex gap-3 items-center">
          <p className="text-[16px] px-4 font-bold py-2 rounded-lg bg-[#f3f3f3]">
            {role}
          </p>
          <p className="text-[16px] px-4 font-bold py-2 rounded-lg bg-[#f3f3f3]">
            {batting}
          </p>
        </div>
      </div>

      {/* newsletter */}
      <div className="relative lg:mt-[200px] mt-[170px]">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default PlayerDetails;
