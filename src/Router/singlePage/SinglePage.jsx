import React from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import "./SinglePage.scss";
import Buttons from "../butonPage/Buttons";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "XYZ MOTORS",
          data: props.dates, // Correctly use the prop passed to the component
        },
      ],
      options: {
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "Stock Price Movement",
          align: "left",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: "Price",
          },
        },
        xaxis: {
          type: "datetime",
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={520}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

const SinglePage = () => {
  const dates = [
    { x: new Date(2023, 4, 1), y: 3000000 },
    { x: new Date(2023, 4, 2), y: 3200000 },
    // Add more data points as needed
  ];

  return (
    <section className="single">
      <div className="single_pg">
        <div className="single_pg_left">
          <img
            src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442"
            alt="logo"
          />
          <h2>Bitcoin</h2>
          <p>
            Bitcoin is the first successful internet money based on peer-
            to-peer technology; whereby no central bank or authority is involved
            in the transaction and production of the Bitcoin currency.
          </p>
          <h3>
            Rank: <span>1</span>
          </h3>
          <h3>
            Current Price: <span>₹3,046,956</span>
          </h3>
          <h3>
            Market Cap: <span>₹59,518,057M</span>
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
