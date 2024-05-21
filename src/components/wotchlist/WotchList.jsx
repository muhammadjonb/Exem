import { useEffect, useState } from "react";
import "./WitchList.scss";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [clickedButtons, setClickedButtons] = useState([]);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

  const removeFromWatchlist = (cryptoId) => {
    const updatedWatchlist = watchlist.filter(
      (crypto) => crypto.id !== cryptoId
    );
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const toggleButton = (cryptoId) => {
    setClickedButtons((prevClickedButtons) => {
      if (prevClickedButtons.includes(cryptoId)) {
        return prevClickedButtons.filter((id) => id !== cryptoId);
      } else {
        return [...prevClickedButtons, cryptoId];
      }
    });
  };


  return (
    <div className="watch_list">
      <div className="lists">
        <h2>WATCHLIST</h2>
        <div className="cards">
          {watchlist.map((crypto) => (
            <div key={crypto.id} className="watch_card">
              <img src={crypto.image} alt={crypto.name} className="showimg" />
              <p>₹{crypto.current_price}</p>
              <button
                className={
                  clickedButtons.includes(crypto.id)
                    ? "btnRemove active"
                    : "btnRemove"
                }
                onClick={() => {
                  toggleButton(crypto.id);
                  removeFromWatchlist(crypto.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
