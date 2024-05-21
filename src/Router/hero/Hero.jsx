import { Link } from "react-router-dom";
import { useALLDataContext } from "../../context/Context";
import "./Hero.scss";
import { BounceLoader } from "react-spinners";
import Slider from "react-slick";

const Hero = () => {
  const { data, loading, error } = useALLDataContext();
  const setting = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pouseONHover: false,
  };

  return (
    <section className="hero_bg">
      <div className="container">
        <div className="hero">
          <h1>CRYPTOFOLIO WATCH LIST</h1>
          <p>Get all the Info regarding your favorite Crypto Currency</p>
          <div className="hero_slider">
            {loading && (
              <h2 className="loading">
                <BounceLoader color="#87CEEB" />
              </h2>
            )}
            {error && <h2 style={{ color: "#fff" }}>{error.message}</h2>}
            {data && data.length > 0 ? (
              <div className="carousel">
                <Slider {...setting}>
                  {data.slice(1, 15).map((el) => (
                    <Link to={`/sigle-page/${el.id}`} key={el.id}>
                      <div className="hero_card">
                        <img src={el.image} alt={el.name} />
                        <p>
                          {el.symbol}
                          {el.market_cap_change_percentage_24h > 0 ? (
                            <span style={{ color: "#0ECB81" }}>
                              {el.market_cap_change_percentage_24h.toFixed(2)}%
                            </span>
                          ) : (
                            <span style={{ color: "#FF0000" }}>
                              -{el.market_cap_change_percentage_24h}%
                            </span>
                          )}
                        </p>
                        <h3>₹{el.current_price.toFixed(2)}</h3>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            ) : (
              !loading && <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
