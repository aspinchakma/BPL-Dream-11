import "./ToggleContainer.css";
const ToggleController = ({
  handleAvaiableButton,
  handleSelectedButton,
  select,
}) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between my-5 lg:mt-10">
      {select ? (
        <h3 className="text-2xl font-bold">Available Players</h3>
      ) : (
        <h3 className="text-2xl font-bold">Selected Players</h3>
      )}
      <div className="flex border-black toggle_container my-4 lg:my-0">
        <p
          onClick={handleAvaiableButton}
          className={select ? "clicked_button_color" : ""}
        >
          Available
        </p>
        <p
          className={select ? "" : "clicked_button_color"}
          onClick={handleSelectedButton}
        >
          Selected (0)
        </p>
      </div>
    </div>
  );
};

export default ToggleController;
