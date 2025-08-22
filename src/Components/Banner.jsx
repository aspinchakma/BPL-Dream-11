import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner_container lg:py-[64px] py-[40px]">
      <img
        className="mx-auto w-[248px]"
        src="https://i.ibb.co.com/Q32hVYpj/banner-main.png"
        alt=""
      />
      <h1 className="text-center text-white text-2xl lg:text-4xl font-bold mt-6 mb-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-center text-[#b9b9b9] text-xl lg:text-2xl">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="text-center mt-6">
        <div className="button_container">
          <button>Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
