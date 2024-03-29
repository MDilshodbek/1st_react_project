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
      <div className="container">
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
          </div>
        </div>
        <div className="collection">
          <div className="collection-text">
            <h4>Our Latest color collection 2021</h4>
          </div>
          <div className="collection-img">
            <img
              className="coll-img1"
              src="https://s3-alpha-sig.figma.com/img/c4c5/8416/9756df750e5f883b764b2a59cbfd4f46?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q01~qsUdJzpfWjEz9LuQduGUMaKuQyIu8fyJ~3dy5ICV8v-HAG~sx596ZTwB2u41pkIJt83qgFn0wFrlBP8EhqBCgXkgYW1ODPKRvp2PDV5AeebOCIcYfsMat~bN936XvP0uai1klrbMxgqWwHtSMVa6SeGy4NE~0tAnMqvj69ueadVAFDFRLxxqw4hc6Nq083jPTllxCZOotI3AatZz4OPsMFsHd6qRmXXzo2OhXS7L4UfmTWCzZ34M44Tnm-xTBIA0Zq71wKEDNVV9lHCw~1phQIVsqLt6NKI48k5LYQFfgHmInHB5v2~n7OD6DRXG6yHdCpDXEKpp1fkjlLEDTg__"
              alt=""
            />
            <img
              className="coll-img2"
              src="https://s3-alpha-sig.figma.com/img/0a1c/64a4/69b6306e3fa9024ecb1b6337623e81bd?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C11lY-4WeA9eFMdPnEFh2R2uuM0mrGKVreVNThkhwWeTRqUxHHyZQdECNFpEwEHzENJ-qqOmydT0kIWsvx5cC4vP0n7psfMsN8bzoqGImH-cWcqvYE6yFMry45kE3PkcqkD4C2WiUcwVShzC1-dzvO4On8CfAUYW3NBCLOYsF-ervfULom7GbztoQb2-Y4zlFdOLTZf8K8ScJp-UX7aAaeAzS-mkSDdAHuv4LrUL~OaaoiMpMocJR5XeMzrpgHd1iodWvCWboQZOvwRw3lr~rET3DqQtrwuwuyhmsoFggtUkonzQ0khVELbJB6c60D0svfRnwOq-lNwGJPRYBF93eg__"
              alt=""
            />
            <img
              className="coll-img3"
              src="https://s3-alpha-sig.figma.com/img/5991/e4cf/3e003db3e926501c6a97cd7a2c70d305?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pecDsU7iIxOgcXUulpJDSETg-csjfoW-BYP6xOB7pVLibUfEXqXPplKKCGnUjruhvYlgONwWZW0uygwvlh8liujyu0hMkOEi6oYwnVcVzwGjRFRRGH4JJuBeKaHOWSFkNYgHrpeBCim4v0T-lwmaP5hWNbvpL0DI7TSGOV0Tk7~JC0mfJ7YVFsbtf887rKdjUcwxONfyhqbo8oVd5mN0Gjvyvnox7bf69VF1XTrA~3~dG9iNMiSoz30R~a7hQcOwF1XmHHb0~PjRwZ-T1Be0Ul~qXgE0Dq5nL79FMe4sND~3xvZdSrTjs68GKE5Li8olisOe7fMciyZmkB-zhJULBw__"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
