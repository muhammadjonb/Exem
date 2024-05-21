import './header.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav_img">
            <Link to="/">
              <svg
                width="152"
                height="16"
                viewBox="0 0 152 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.36 15.24C7.28 15.24 6.27333 15.0667 5.34 14.72C4.42 14.36 3.62 13.8533 2.94 13.2C2.26 12.5467 1.72667 11.78 1.34 10.9C0.966667 10.02 0.78 9.05333 0.78 8C0.78 6.94667 0.966667 5.98 1.34 5.1C1.72667 4.22 2.26 3.45333 2.94 2.8C3.63333 2.14667 4.44 1.64667 5.36 1.3C6.28 0.939999 7.28667 0.76 8.38 0.76C9.59333 0.76 10.6867 0.973333 11.66 1.4C12.6467 1.81333 13.4733 2.42667 14.14 3.24L12.06 5.16C11.58 4.61333 11.0467 4.20667 10.46 3.94C9.87333 3.66 9.23333 3.52 8.54 3.52C7.88667 3.52 7.28667 3.62667 6.74 3.84C6.19333 4.05333 5.72 4.36 5.32 4.76C4.92 5.16 4.60667 5.63333 4.38 6.18C4.16667 6.72667 4.06 7.33333 4.06 8C4.06 8.66667 4.16667 9.27333 4.38 9.82C4.60667 10.3667 4.92 10.84 5.32 11.24C5.72 11.64 6.19333 11.9467 6.74 12.16C7.28667 12.3733 7.88667 12.48 8.54 12.48C9.23333 12.48 9.87333 12.3467 10.46 12.08C11.0467 11.8 11.58 11.38 12.06 10.82L14.14 12.74C13.4733 13.5533 12.6467 14.1733 11.66 14.6C10.6867 15.0267 9.58667 15.24 8.36 15.24ZM16.478 15V0.999999H22.538C23.7913 0.999999 24.8713 1.20667 25.778 1.62C26.6846 2.02 27.3846 2.6 27.878 3.36C28.3713 4.12 28.618 5.02667 28.618 6.08C28.618 7.12 28.3713 8.02 27.878 8.78C27.3846 9.52667 26.6846 10.1 25.778 10.5C24.8713 10.9 23.7913 11.1 22.538 11.1H18.278L19.718 9.68V15H16.478ZM25.378 15L21.878 9.92H25.338L28.878 15H25.378ZM19.718 10.04L18.278 8.52H22.358C23.358 8.52 24.1046 8.30667 24.598 7.88C25.0913 7.44 25.338 6.84 25.338 6.08C25.338 5.30667 25.0913 4.70667 24.598 4.28C24.1046 3.85333 23.358 3.64 22.358 3.64H18.278L19.718 2.1V10.04ZM34.6197 15V9.28L35.3597 11.24L29.1997 0.999999H32.6397L37.3597 8.86H35.3797L40.1197 0.999999H43.2997L37.1397 11.24L37.8597 9.28V15H34.6197ZM44.6881 15V0.999999H50.7481C52.0015 0.999999 53.0815 1.20667 53.9881 1.62C54.8948 2.02 55.5948 2.6 56.0881 3.36C56.5815 4.12 56.8281 5.02667 56.8281 6.08C56.8281 7.12 56.5815 8.02 56.0881 8.78C55.5948 9.54 54.8948 10.1267 53.9881 10.54C53.0815 10.94 52.0015 11.14 50.7481 11.14H46.4881L47.9281 9.68V15H44.6881ZM47.9281 10.04L46.4881 8.5H50.5681C51.5681 8.5 52.3148 8.28667 52.8081 7.86C53.3015 7.43333 53.5481 6.84 53.5481 6.08C53.5481 5.30667 53.3015 4.70667 52.8081 4.28C52.3148 3.85333 51.5681 3.64 50.5681 3.64H46.4881L47.9281 2.1V10.04ZM61.8202 15V3.64H57.3402V0.999999H69.5402V3.64H65.0602V15H61.8202ZM78.0381 15.24C76.9315 15.24 75.9048 15.06 74.9581 14.7C74.0248 14.34 73.2115 13.8333 72.5181 13.18C71.8381 12.5267 71.3048 11.76 70.9181 10.88C70.5448 10 70.3581 9.04 70.3581 8C70.3581 6.96 70.5448 6 70.9181 5.12C71.3048 4.24 71.8448 3.47333 72.5381 2.82C73.2315 2.16667 74.0448 1.66 74.9781 1.3C75.9115 0.939999 76.9248 0.76 78.0181 0.76C79.1248 0.76 80.1381 0.939999 81.0581 1.3C81.9915 1.66 82.7981 2.16667 83.4781 2.82C84.1715 3.47333 84.7115 4.24 85.0981 5.12C85.4848 5.98667 85.6781 6.94667 85.6781 8C85.6781 9.04 85.4848 10.0067 85.0981 10.9C84.7115 11.78 84.1715 12.5467 83.4781 13.2C82.7981 13.84 81.9915 14.34 81.0581 14.7C80.1381 15.06 79.1315 15.24 78.0381 15.24ZM78.0181 12.48C78.6448 12.48 79.2181 12.3733 79.7381 12.16C80.2715 11.9467 80.7381 11.64 81.1381 11.24C81.5381 10.84 81.8448 10.3667 82.0581 9.82C82.2848 9.27333 82.3981 8.66667 82.3981 8C82.3981 7.33333 82.2848 6.72667 82.0581 6.18C81.8448 5.63333 81.5381 5.16 81.1381 4.76C80.7515 4.36 80.2915 4.05333 79.7581 3.84C79.2248 3.62667 78.6448 3.52 78.0181 3.52C77.3915 3.52 76.8115 3.62667 76.2781 3.84C75.7581 4.05333 75.2981 4.36 74.8981 4.76C74.4981 5.16 74.1848 5.63333 73.9581 6.18C73.7448 6.72667 73.6381 7.33333 73.6381 8C73.6381 8.65333 73.7448 9.26 73.9581 9.82C74.1848 10.3667 74.4915 10.84 74.8781 11.24C75.2781 11.64 75.7448 11.9467 76.2781 12.16C76.8115 12.3733 77.3915 12.48 78.0181 12.48ZM91.2631 7.3H97.9831V9.9H91.2631V7.3ZM91.5031 15H88.2631V0.999999H98.8431V3.6H91.5031V15ZM107.85 15.24C106.743 15.24 105.717 15.06 104.77 14.7C103.837 14.34 103.023 13.8333 102.33 13.18C101.65 12.5267 101.117 11.76 100.73 10.88C100.357 10 100.17 9.04 100.17 8C100.17 6.96 100.357 6 100.73 5.12C101.117 4.24 101.657 3.47333 102.35 2.82C103.043 2.16667 103.857 1.66 104.79 1.3C105.723 0.939999 106.737 0.76 107.83 0.76C108.937 0.76 109.95 0.939999 110.87 1.3C111.803 1.66 112.61 2.16667 113.29 2.82C113.983 3.47333 114.523 4.24 114.91 5.12C115.297 5.98667 115.49 6.94667 115.49 8C115.49 9.04 115.297 10.0067 114.91 10.9C114.523 11.78 113.983 12.5467 113.29 13.2C112.61 13.84 111.803 14.34 110.87 14.7C109.95 15.06 108.943 15.24 107.85 15.24ZM107.83 12.48C108.457 12.48 109.03 12.3733 109.55 12.16C110.083 11.9467 110.55 11.64 110.95 11.24C111.35 10.84 111.657 10.3667 111.87 9.82C112.097 9.27333 112.21 8.66667 112.21 8C112.21 7.33333 112.097 6.72667 111.87 6.18C111.657 5.63333 111.35 5.16 110.95 4.76C110.563 4.36 110.103 4.05333 109.57 3.84C109.037 3.62667 108.457 3.52 107.83 3.52C107.203 3.52 106.623 3.62667 106.09 3.84C105.57 4.05333 105.11 4.36 104.71 4.76C104.31 5.16 103.997 5.63333 103.77 6.18C103.557 6.72667 103.45 7.33333 103.45 8C103.45 8.65333 103.557 9.26 103.77 9.82C103.997 10.3667 104.303 10.84 104.69 11.24C105.09 11.64 105.557 11.9467 106.09 12.16C106.623 12.3733 107.203 12.48 107.83 12.48ZM118.075 15V0.999999H121.315V12.36H128.335V15H118.075ZM130.295 15V0.999999H133.535V15H130.295ZM143.808 15.24C142.701 15.24 141.674 15.06 140.728 14.7C139.794 14.34 138.981 13.8333 138.288 13.18C137.608 12.5267 137.074 11.76 136.688 10.88C136.314 10 136.128 9.04 136.128 8C136.128 6.96 136.314 6 136.688 5.12C137.074 4.24 137.614 3.47333 138.308 2.82C139.001 2.16667 139.814 1.66 140.748 1.3C141.681 0.939999 142.694 0.76 143.788 0.76C144.894 0.76 145.908 0.939999 146.828 1.3C147.761 1.66 148.568 2.16667 149.248 2.82C149.941 3.47333 150.481 4.24 150.868 5.12C151.254 5.98667 151.448 6.94667 151.448 8C151.448 9.04 151.254 10.0067 150.868 10.9C150.481 11.78 149.941 12.5467 149.248 13.2C148.568 13.84 147.761 14.34 146.828 14.7C145.908 15.06 144.901 15.24 143.808 15.24ZM143.788 12.48C144.414 12.48 144.988 12.3733 145.508 12.16C146.041 11.9467 146.508 11.64 146.908 11.24C147.308 10.84 147.614 10.3667 147.828 9.82C148.054 9.27333 148.168 8.66667 148.168 8C148.168 7.33333 148.054 6.72667 147.828 6.18C147.614 5.63333 147.308 5.16 146.908 4.76C146.521 4.36 146.061 4.05333 145.528 3.84C144.994 3.62667 144.414 3.52 143.788 3.52C143.161 3.52 142.581 3.62667 142.048 3.84C141.528 4.05333 141.068 4.36 140.668 4.76C140.268 5.16 139.954 5.63333 139.728 6.18C139.514 6.72667 139.408 7.33333 139.408 8C139.408 8.65333 139.514 9.26 139.728 9.82C139.954 10.3667 140.261 10.84 140.648 11.24C141.048 11.64 141.514 11.9467 142.048 12.16C142.581 12.3733 143.161 12.48 143.788 12.48Z"
                  fill="#87CEEB"
                />
              </svg>
            </Link>
          </div>
          <div className="nav_right">
            <select name="price" id="price">
              <option value="USD">USD</option>
              <option value="RUS">RUS</option>
              <option value="UZS">UZS</option>
            </select>
            <button className="wotch_btn">WATCH LIST</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;