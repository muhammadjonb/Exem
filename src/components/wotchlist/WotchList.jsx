import './WitchList.scss'

const WotchList = () => {
    const hendleWithList = () => {
        document.querySelector('.witch_list').style.display = 'none'
    }
  return (
    <div className="witch_list">
      <h2 onClick={hendleWithList}>WATCHLIST</h2>
      <div className="cards">
        <div className="witch_card">
          <img
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
            alt=""
          />
          <p>₹ 3,045,665.00</p>
          <button>Remove</button>
        </div>
        <div className="witch_card">
          <img
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
            alt=""
          />
          <p>₹ 3,045,665.00</p>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default WotchList