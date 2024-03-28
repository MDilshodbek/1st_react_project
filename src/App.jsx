import { Component } from "react";
import "./App.css";

// Images
import logo from "../public/logo.png";
import bgMusic from "../src/assets/bg-music.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="hero-box">
        <img className="bgMusic" src={bgMusic} alt="" />
        <div className="nav-bar">
          <img className="logo" src={logo} alt="Logo" />
          <div className="middle-nav">
            <div className="generic-nav">
              <FontAwesomeIcon
                icon={faSearch}
                style={{ color: "#FF4948" }}
                width={300}
                height={300}
              />
            </div>
            <div className="stick">|</div>
            <div className="generic-nav">
              <FontAwesomeIcon
                icon={faShoppingBag}
                style={{ color: "#FF4948" }}
                width={300}
                height={300}
              />
            </div>
            <div className="stick">|</div>
            <div className="generic-nav">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#FF4948" }}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="menu-bar">
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "white" }}
              fontSize={"30px"}
            />
          </div>
        </div>
        <div className="hero-items">
          <div>
            <img
              className="headphone"
              src="https://s3-alpha-sig.figma.com/img/3ed9/ea40/e75b6b402c061a7e474af42acf617cc5?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fZ1A2RvduEE4agYnYO3Dh0-ocHOfQAFNgtVxg4VjCWd~0nFISv9l4B0eFyCjACBA61Ds1yXylubEPvLbLi2WkwsOaCDFxd~H1POrg9d22Ugg8zDZ83pVXbIzhUmZN6xYhlfzjHe5hCKM3C3T~0--nGPl5FJS8OBvHhEd3SKT2n3mfEfZBSK5u11jPKzCFdFtBnOKfu2C9GuE54F73Bkgh-URdIz5ZAT9wtjWVT~DMU3Q~oWUhhbYyZXRjVH3KlMlzqPYEFKbUB5gV2WzfQeA~g55~2fhDBdBUSeWs4CHEjSJpSiFpUFLEgst0srpIRSH3OvE~rMrdt-A8lTrHGNX3g__"
              alt=""
            />
          </div>
          <div className="heroText">
            <p className="slogan-1">HEAR IT. FEEL IT</p>
            <h2 className="slogan-2">MOVE WITH THE MUSIC</h2>
            <div className="price">
              <p className="currentPrice">$ 435</p>
              <p className="slash">|</p>
              <p className="realPrice">$ 465</p>
            </div>
            <div>
              <button className="buy-button">BUY NOW</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
