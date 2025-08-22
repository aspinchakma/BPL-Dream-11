const loadDataLS = () => {
  const getData = localStorage.getItem("players");
  if (getData) {
    const getDataObject = JSON.parse(getData);
    return getDataObject;
  } else {
    return [];
  }
};

const loadCoinLS = () => {
  const getData = localStorage.getItem("coin");
  if (getData) {
    const coin = JSON.parse(getData);
    return coin;
  } else {
    return 0;
  }
};

const addCoinLs = (money) => {
  localStorage.setItem("coin", JSON.stringify(money));
};

export { addCoinLs, loadCoinLS, loadDataLS };
