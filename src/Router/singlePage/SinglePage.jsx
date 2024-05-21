import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import "./SinglePage.scss";
import Buttons from "../butonPage/Buttons";
import { useParams } from "react-router-dom";
import axios from "axios";
import ApexChart from "../../components/chart";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [dates, setDates] = useState();
  const api = `https://api.coingecko.com/api/v3/coins/${id}`;
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`;

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        const res = await axios.get(api);
        const result = await axios.get(url);
        setDates(result.data?.prices);
        const data = res.data;
        setData(data);
        try {
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetch();
  }, []);

  return (
    <section className="single">
      <div className="single_pg">
        <div className="single_pg_left">
          <img src={data?.image?.large} alt="logo" />
          <h2>{data?.name}</h2>
          <p>{data?.description.en?.substring(0, 200)}</p>
          <h3>
            Rank: <span>{data?.market_cap_rank}</span>
          </h3>
          <h3>
            Current Price:{" "}
            <span>₹ {data?.market_data?.current_price?.usd}</span>
          </h3>
          <h3>
            Market Cap: <span>₹ {data?.market_data?.market_cap?.usd}M</span>
          </h3>
        </div>
        <div className="single_pg_right">
          <ApexChart dates={dates} />
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default SinglePage;

const domContainer = document.querySelector("#app");
// ReactDOM.render(<SinglePage />, domContainer);
