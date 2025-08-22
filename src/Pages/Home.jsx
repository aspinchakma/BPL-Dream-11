import { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import AvailableContainer from "../Components/AvailableContainer";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import SelectedContainer from "../Components/SelectedContainer";
import ToggleController from "../Components/ToggleController";
import { addCoinLs, loadCoinLS, loadDataLS } from "../Utilities/LocalStorage";
import "./Home.css";

const Home = () => {
  // Displaying Coing
  const [coin, setCoin] = useState(0);
  // first time getCoin from localStorage
  useEffect(() => {
    const money = loadCoinLS();
    setCoin(money);
  }, []);
  const addCoin = () => {
    setCoin(coin + 290000);
    // add to local storage or update
    addCoinLs(coin + 290000);
    toast(`Successfully Added ${290000} Taka!`);
  };

  // Toggle Functionalities
  const [select, setSelect] = useState(true);
  const handleAvaiableButton = () => {
    setSelect(true);
  };
  const handleSelectedButton = () => {
    setSelect(false);
  };

  // choose player
  const [choosePlayers, setChoosePlayers] = useState([]);
  const handleChoosePlayer = (player) => {
    if (choosePlayers.length <= 5) {
      if (coin > player.biddingPrice) {
        // already exist or not validation
        const isExist = choosePlayers.find(
          (playerLooping) => playerLooping.name === player.name
        );
        if (!isExist) {
          setChoosePlayers([...choosePlayers, player]);
          setCoin(coin - player.biddingPrice);
          // update local storage data
          addCoinLs(coin - player.biddingPrice);
          toast("Successfully Added In Your Team!");
        } else {
          toast("Player Already Added!");
        }
      } else {
        toast("Not Enough Money!");
      }
    } else {
      toast("Players are Full!");
    }
  };

  // Deleted Player
  const handleDeletedPerson = (data) => {
    const filteredData = choosePlayers.filter(
      (player) => player.name !== data.name
    );
    setChoosePlayers(filteredData);
    toast("Successfully deleted!");
  };

  // fist data load when user refresh the ui
  useEffect(() => {
    const players = loadDataLS();
    console.log(players);
  }, []);
  return (
    <div className=" home_container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Header coin={coin} />
      <div className=" w-[95%] lg:w-[80%] mx-auto">
        <Banner addCoin={addCoin} />
        {/* this will be conditionally swap */}

        {/* This is Toggle Controler Component */}
        <div className="py-2">
          <ToggleController
            select={select}
            handleAvaiableButton={handleAvaiableButton}
            handleSelectedButton={handleSelectedButton}
            choosePlayers={choosePlayers}
          />
        </div>
        {select ? (
          <AvailableContainer handleChoosePlayer={handleChoosePlayer} />
        ) : (
          <SelectedContainer
            choosePlayers={choosePlayers}
            handleDeletedPerson={handleDeletedPerson}
          />
        )}

        <Newsletter />
      </div>
      <div className="border-2 border-black h-[1300px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
