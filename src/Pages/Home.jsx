import { useState } from "react";
import AvailableContainer from "../Components/AvailableContainer";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import SelectedContainer from "../Components/SelectedContainer";
import "./Home.css";

const Home = () => {
  const [coin, setCoin] = useState(0);
  const addCoin = () => {
    setCoin(coin + 130000);
  };
  return (
    <div className=" home_container">
      <Header coin={coin} />
      <div className="border-2 w-[95%] lg:w-[80%] mx-auto">
        <Banner addCoin={addCoin} />
        {/* this will be conditionally swap */}
        <AvailableContainer />
        <SelectedContainer />
        <Newsletter />
      </div>
      <div className="border-2 border-black h-[1300px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
