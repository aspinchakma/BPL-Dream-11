const loadDataLS = () => {
  const getData = localStorage.getItem("players");
  if (getData) {
    const getDataObject = JSON.parse(getData);
    return getDataObject;
  } else {
    return [];
  }
};

// store data on local Storage
const storeDataOnLS = (id) => {
  const idContainer = loadDataLS();
  idContainer.push(id);
  const idStringify = JSON.stringify(idContainer);
  localStorage.setItem("players", idStringify);
};
// Load coin and store coin on local storage

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

export { addCoinLs, loadCoinLS, loadDataLS, storeDataOnLS };
