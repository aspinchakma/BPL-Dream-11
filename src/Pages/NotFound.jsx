const NotFound = () => {
  return (
    <div className="h-svh flex items-center justify-center p-4 bg-[#363776] text-white">
      <div>
        <h3 className="text-[200px] text-center font-bold leading-[180px]">
          404{" "}
        </h3>
        <p className="text-[30px] text-center font-bold mt-5 mb-3">
          Sorry, The page note found
        </p>
        <p className="text-center text-xl">
          The link you followed probably broken or the page has been removed.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
