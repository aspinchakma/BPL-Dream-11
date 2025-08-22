import { useState } from "react";
import AvailableContainer from "../Components/AvailableContainer";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import SelectedContainer from "../Components/SelectedContainer";
import ToggleController from "../Components/ToggleController";
import "./Home.css";

const Home = () => {
  // Displaying Coing
  const [coin, setCoin] = useState(0);
  const addCoin = () => {
    setCoin(coin + 130000);
  };

  // Toggle Functionalities
  const [select, setSelect] = useState(true);
  const handleAvaiableButton = () => {
    setSelect(true);
  };
  const handleSelectedButton = () => {
    setSelect(false);
  };
  return (
    <div className=" home_container">
      <Header coin={coin} />
      <div className="border-2 w-[95%] lg:w-[80%] mx-auto">
        <Banner addCoin={addCoin} />
        {/* this will be conditionally swap */}

        {/* This is Toggle Controler Component */}
        <ToggleController
          select={select}
          handleAvaiableButton={handleAvaiableButton}
          handleSelectedButton={handleSelectedButton}
        />
        {select ? <AvailableContainer /> : <SelectedContainer />}

        <Newsletter />
      </div>
      <div className="border-2 border-black h-[1300px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
