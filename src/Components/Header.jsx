import "../../styles.css"
import {headerLogoURL} from "../utils/consts"
const Header = () => {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src={headerLogoURL}
          ></img>
        </div>
        <div className="navitems-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header