import AvailableContainer from "../Components/AvailableContainer";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter";
import SelectedContainer from "../Components/SelectedContainer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="border-2 w-[95%] lg:w-[80%] mx-auto">
        <Banner />
        {/* this will be conditionally swap */}
        <AvailableContainer />
        <SelectedContainer />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
