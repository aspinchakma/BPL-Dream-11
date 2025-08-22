import { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import AvailableContainer from "../Components/AvailableContainer";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import SelectedContainer from "../Components/SelectedContainer";
import ToggleController from "../Components/ToggleController";
import {
  addCoinLs,
  loadCoinLS,
  loadDataLS,
  storeDataOnLS,
} from "../Utilities/LocalStorage";
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
          // update player number on local Storage
          storeDataOnLS(player.id);

          // set coin on the state
          setCoin(coin - player.biddingPrice);
          // update coin on local Storage
          addCoinLs(coin - player.biddingPrice);

          toast("Successfully Added In Your Team!");
        } else {
          toast.warn("Player Already Added!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      } else {
        toast.warn("Not Enough Money!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      toast.warn("Players are Full!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Deleted Player
  const handleDeletedPerson = (data) => {
    // load data from local storage
    const playersData = loadDataLS();
    // load data from server
    const loadDataFromServer = async () => {
      try {
        const url = `https://aspinchakma.github.io/api-for-practice/players.json`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Server Problem!");
        }
        const result = await res.json();
        // removing data from local storage filtering by deleted id
        const finalIDs = playersData.filter((id) => data.id !== id);
        // get data by finalIDS
        const finalPlayersData = finalIDs.map((id) =>
          result.find((player) => player.id === id)
        );
        // add data to state
        setChoosePlayers(finalPlayersData);
        // add to updated data in local storage
        localStorage.setItem("players", JSON.stringify(finalIDs));
        toast.warn("Successfully deleted!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } catch (error) {
        toast(error.message);
      }
    };
    loadDataFromServer();
  };

  // fist data load when user refresh the ui
  useEffect(() => {
    const loadDataFromServer = async () => {
      try {
        const url = `https://aspinchakma.github.io/api-for-practice/players.json`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Server Problme");
        }
        const data = await res.json();
        const dataFromLS = loadDataLS();

        // this method filter data properly but serial problem
        //  const players = loadDataLS();
        // const filteredPlayers = data.filter((p) => dataFromLS.includes(p.id));
        // console.log(filteredPlayers);

        // load data with maintaining data serial
        if (!dataFromLS.length) {
          setChoosePlayers([]);
        } else {
          const finalPlayers = dataFromLS.map((id) =>
            data.find((object) => object.id == id)
          );
          setChoosePlayers(finalPlayers);
        }

        // matching object set to the players state
        // setChoosePlayers(matchingObject);
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    };
    loadDataFromServer();
  }, []);

  // Add More Player Button
  const hangleAddMorePlayer = () => {
    setSelect(true);
  };
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
            hangleAddMorePlayer={hangleAddMorePlayer}
          />
        )}

        <div className="relative lg:mt-[200px] mt-[170px]">
          <Newsletter />
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
