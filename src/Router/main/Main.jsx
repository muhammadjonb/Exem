import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useALLDataContext } from "../../context/Context";
import "./Main.scss";
import { BounceLoader } from "react-spinners";

const Main = () => {
  const { data, loading, error } = useALLDataContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data?.filter(
    (el) =>
      el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(
    (filteredData ? filteredData.length : 0) / itemsPerPage
  );

  return (
    <section className="sc_table">
      <div className="container">
        <div className="table">
          <h2>Cryptocurrency Prices by Market Cap</h2>
          <input
            type="search"
            className="table_search"
            id="table_search"
            placeholder="Search For a Crypto Currency..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {loading && (
            <h2 className="loading">
              <BounceLoader color="#87CEEB" />
            </h2>
          )}
          <div className="table_top">
            <div className="top_left">
              <p>Coin</p>
              <p>Price</p>
            </div>
            <div className="top_right">
              <p>24h Change</p>
              <p>Market Cap</p>
            </div>
          </div>
          {error && <h2 style={{ color: "#fff" }}>{error.message}</h2>}
          {currentItems && currentItems.length > 0 ? (
            <div className="table_data">
              {currentItems.map((el) => (
                <Link
                  to={`/sigle-page/${el.id}`}
                  key={el.id}
                  className="tb_data"
                >
                  <div className="tb_data_left">
                    <div className="tb_data_left_img">
                      <img src={el.image} alt={el.name} />
                      <h3>
                        {el.symbol.toUpperCase()} <span>{el.name}</span>
                      </h3>
                    </div>
                    <p>₹{el.current_price}</p>
                  </div>
                  <div className="tb_data_right">
                    <div className="tb_data_right_wch">
                      <div className="icon_list">
                        <ion-icon name="eye"></ion-icon>
                      </div>
                      {el.price_change_percentage_24h > 0 ? (
                        <p style={{ color: "#0ECB81" }}>
                          {el.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      ) : (
                        <p style={{ color: "#FF0000" }}>
                          {el.price_change_percentage_24h.toFixed(2)}%
                        </p>
                      )}
                    </div>
                    <p>₹{el.market_cap}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            !loading && <p>No data available</p>
          )}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
