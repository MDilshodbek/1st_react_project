import { Component } from "react";
import "./App.css";

// Images
import logo from "../public/logo.png";
import bgMusic from "../src/assets/bg-music.png";
import secondbgMusic from "../src/assets/secondbgMusic.png";
import thirddbgMusic from "../src/assets/thirdbgMusic.png";
import leftVibrate from "../src/assets/leftVibrate.png";
import rightVibrate from "../src/assets/rightVibrate.png";
import battery from "../src/assets/feature/battery.png";
import redcircyle from "../src/assets/feature/redcircyle.png";
import inCircyle from "../src/assets/feature/inCircyle.png";
import bottomCircyle from "../src/assets/feature/bottomCircyle.png";
import bluetoothB from "../src/assets/bluetooth-b.svg";
import pinkset from "../src/assets/pinkheadset.png";
import cart from "../src/assets/cart.png";
import blueset from "../src/assets/blueheadset.png";
import greenset from "../src/assets/greenheadset.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
              <p className="slogan-2">MOVE WITH THE MUSIC</p>
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
        {/* End of Hero */}
        <div className="collection">
          <div className="collection-text">
            <h1 className="genTitle">Our Latest</h1>
            <h2 className="genTitle">color collection 2021</h2>
          </div>
          <div className="collection-img">
            <FontAwesomeIcon
              className="angleLeft"
              icon={faAngleLeft}
              style={{ color: "black" }}
            />
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
            <FontAwesomeIcon
              className="angleRight"
              icon={faAngleRight}
              style={{ color: "black" }}
            />
          </div>
        </div>
        {/* End collection */}
        <div className="features">
          <div className="featureText">
            <h1 className="genTitle">
              Good headphones and loud music is all you need
            </h1>
            <div className="batteryGroup">
              <div className="batteryImages">
                <img className="batteryImg" src={battery} alt="" />
                <img className="redcircyleImg" src={redcircyle} alt="" />
                <img className="bottomCircyleImg" src={bottomCircyle} alt="" />
                <img className="inCircyleImg" src={inCircyle} alt="" />
              </div>
              <div className="batteryText">
                <h1 className="featureTitle batteryTitle">Battery</h1>
                <p className="batteryPower">Battery 6.2V-AAC codec</p>
                <p className="learnMore">Lern More</p>
              </div>
            </div>
            <div className="batteryGroup">
              <div className="batteryImages">
                <img
                  className="batteryImg bluetoothImg"
                  src={bluetoothB}
                  alt=""
                />
                <img
                  className="redcircyleImg redcircyleImg2"
                  src={redcircyle}
                  alt=""
                />
                <img
                  className="bottomCircyleImg bottomCircyleImg2"
                  src={bottomCircyle}
                  alt=""
                />
                <img
                  className="inCircyleImg inCircyleImg2"
                  src={inCircyle}
                  alt=""
                />
              </div>
              <div className="batteryText">
                <h1 className="featureTitle">Bluetooth</h1>
                <p className="batteryPower">Battery 6.2V-AAC codec</p>
                <p className="learnMore">Lern More</p>
              </div>
            </div>
            <div className="batteryGroup">
              <div className="batteryImages">
                <FontAwesomeIcon
                  className="batteryImg microphoneImg"
                  icon={faMicrophoneLines}
                  style={{ color: "#ff4948" }}
                />
                <img
                  className="redcircyleImg redcircyleImg3"
                  src={redcircyle}
                  alt=""
                />
                <img
                  className="bottomCircyleImg bottomCircyleImg3"
                  src={bottomCircyle}
                  alt=""
                />
                <img
                  className="inCircyleImg inCircyleImg3"
                  src={inCircyle}
                  alt=""
                />
              </div>
              <div className="batteryText">
                <h1 className="featureTitle">Microphone</h1>
                <p className="batteryPower">Battery 6.2V-AAC codec</p>
                <p className="learnMore">Lern More</p>
              </div>
            </div>
            <div className="bluetooth"></div>
            <div className="microphone"></div>
          </div>
          <div className="featureImg">
            <img className="secondbgMusic" src={secondbgMusic} alt="" />
            <img className="leftVibrate" src={leftVibrate} alt="" />
            <img className="rightVibrate" src={rightVibrate} alt="" />
            <img
              className="yellowHead"
              src="https://s3-alpha-sig.figma.com/img/8f58/525b/6ffeae5f0118013fd07f51e73ef8303f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~d5VQbPT6PxANexOgtiUAC~zFvU6nzo7GbY8sZs7JNVpFn0~ohksLwZmGJDMZh-FvTpI13KPyeroxgMWl5C-O4pLLvfKFcCclo-zLTM84vRww3xi8gYHuXanIVnKcLg~mV1vuzVjUMpzihMc5wiQzo2eNXoKTkyv3O8esVqiSOvK6ym36uNU-YxNLtsdaJS9Od9xsmImPHrqGUaKq5Td2oEItb-gWaiekHwQFbBa6TSs5X1Ht1xzJjJc1nwaMFHPSevfsTh29bktXi7soqusbrzRmgkKmxVhGvwrOq646dTcR-T9ubDQFosQJg3~tSor8QVhTnNglSz7CE-AV0yMg__"
              alt=""
            />
          </div>
        </div>
        {/* End of features */}
        <div className="latestProducts">
          <div className="productText">
            <h1 className="genTitle">Our Latest Product</h1>
            <p className="productDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              facilisis nunc ipsum aliquam, ante.
            </p>
          </div>
          <div className="productGroup">
            <div className="generic_productGroups">
              <div className="gen_mainImg">
                <img
                  className="gen_pinkHeadset"
                  // src="https://s3-alpha-sig.figma.com/img/c558/b64a/2d001d67c99714f765c8de5abd1f3989?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwtxdUShPbGxvweIc~Bxn2vIRGGSM19odjKhbFjb2~vuOnrYBcrOEU36JlisUx1Lge85945-S8po8UcU0baMys8DevWuriM4YMJktBFkksJ7I85EGiYVZbxY~0vmbaixcHXtsPWVVBLlWzWrwWvNjL1RmLP1~fnnvMntBWLWV5NvNVeAWS3zgrjm8WIk32I-KTX54PyuIBjBw0TE70qQsv7vkiyX~gwkfeJ6KgQdw-Ci-VZRtghnoC3M-sYSJGxFOUHBm00LI~EvvtUwoZCr8ZNZAOMUgBC9Ff~R70CUJ-jqHx0WttEYexwOlHNXFt7JHzAIJM~XWKhFCkOvd3MMNw__"
                  src={pinkset}
                  alt=""
                />
              </div>
              <div className="gen_Cart">
                <img className="cartIcon" src={cart} alt="" />
              </div>
              <div className="pinkText">
                <div className="gen_Review">
                  <div className="gen_Stars">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                  </div>
                  <div className="pinkreviewNumber">
                    <p className="fourPointfive">4.50</p>
                  </div>
                </div>
                <div className="gen_Pricegroup">
                  <p className="gen_headsetName">Read Headphone</p>
                  <p className="gen_price">$ 256</p>
                </div>
              </div>
            </div>
            <div className="generic_productGroups">
              <div className="gen_mainImg blueImg">
                <img
                  className="gen_pinkHeadset"
                  // src="https://s3-alpha-sig.figma.com/img/c558/b64a/2d001d67c99714f765c8de5abd1f3989?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwtxdUShPbGxvweIc~Bxn2vIRGGSM19odjKhbFjb2~vuOnrYBcrOEU36JlisUx1Lge85945-S8po8UcU0baMys8DevWuriM4YMJktBFkksJ7I85EGiYVZbxY~0vmbaixcHXtsPWVVBLlWzWrwWvNjL1RmLP1~fnnvMntBWLWV5NvNVeAWS3zgrjm8WIk32I-KTX54PyuIBjBw0TE70qQsv7vkiyX~gwkfeJ6KgQdw-Ci-VZRtghnoC3M-sYSJGxFOUHBm00LI~EvvtUwoZCr8ZNZAOMUgBC9Ff~R70CUJ-jqHx0WttEYexwOlHNXFt7JHzAIJM~XWKhFCkOvd3MMNw__"
                  src={blueset}
                  alt=""
                />
              </div>
              <div className="gen_Cart">
                <img className="cartIcon" src={cart} alt="" />
              </div>
              <div className="pinkText">
                <div className="gen_Review">
                  <div className="gen_Stars">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                  </div>
                  <div className="pinkreviewNumber">
                    <p className="fourPointfive">4.50</p>
                  </div>
                </div>
                <div className="gen_Pricegroup">
                  <p className="gen_headsetName">Blue Headphone</p>
                  <p className="gen_price">$ 235</p>
                </div>
              </div>
            </div>
            <div className="generic_productGroups">
              <div className="gen_mainImg greenImg">
                <img
                  className="gen_pinkHeadset"
                  // src="https://s3-alpha-sig.figma.com/img/c558/b64a/2d001d67c99714f765c8de5abd1f3989?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwtxdUShPbGxvweIc~Bxn2vIRGGSM19odjKhbFjb2~vuOnrYBcrOEU36JlisUx1Lge85945-S8po8UcU0baMys8DevWuriM4YMJktBFkksJ7I85EGiYVZbxY~0vmbaixcHXtsPWVVBLlWzWrwWvNjL1RmLP1~fnnvMntBWLWV5NvNVeAWS3zgrjm8WIk32I-KTX54PyuIBjBw0TE70qQsv7vkiyX~gwkfeJ6KgQdw-Ci-VZRtghnoC3M-sYSJGxFOUHBm00LI~EvvtUwoZCr8ZNZAOMUgBC9Ff~R70CUJ-jqHx0WttEYexwOlHNXFt7JHzAIJM~XWKhFCkOvd3MMNw__"
                  src={greenset}
                  alt=""
                />
              </div>
              <div className="gen_Cart">
                <img className="cartIcon" src={cart} alt="" />
              </div>
              <div className="pinkText">
                <div className="gen_Review">
                  <div className="gen_Stars">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#fdae38" }}
                    />
                  </div>
                  <div className="pinkreviewNumber">
                    <p className="fourPointfive">4.50</p>
                  </div>
                </div>
                <div className="gen_Pricegroup">
                  <p className="gen_headsetName">Green Headphone</p>
                  <p className="gen_price">$ 245</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Lates pr */}
        <div className="box">
          <div className="boxImage">
            <img
              className="boxcase"
              src="https://s3-alpha-sig.figma.com/img/6f76/67c7/2c05e4c93202562d163d1f8d98908e61?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eyY5iNlkfLA8INOG1SxMOa3Mzelkym5JE26xM0-neQIdDE6WEA9mp-D5b4-ZWKa56NN~o1F0FoFgVQ-8SFgq2x8id-cf707HWGthy5S0N2nM1lTpPs0auiCAp6EeIAGWAt4RxMJRRKtTe7PHNYFwyNWZG2DjgWqfuN741iovCw9FoL9dO7PC53x~Jlg3l9h8yr~O2H3nGn-bIwjj1Q1PwRJFHiWEAR424N9IteILAbjUBEkvMQza3XxXcCFy7q3uHY7Av~oL1QhnLyHzHTFdOXwQunVjVBEpo9-KtYfVi~I0GX2A86fYV~qZY2VqhBtNsZmJc3njjJNlttMjohFKtg__"
              alt=""
            />
          </div>
          <div className="boxText">
            <h1 className="boxTitle genTitle">Whatever you get in the box</h1>
            <div>
              <div></div>
              <p className="gen_boxFeatures charger">5A Charger</p>
            </div>
            <div>
              <div></div>
              <p className="gen_boxFeatures">Extra battery</p>
            </div>
            <div>
              <div></div>
              <p className="gen_boxFeatures">Sophisticated bag</p>
            </div>
            <div>
              <div></div>
              <p className="gen_boxFeatures">User manual guide</p>
            </div>
          </div>
        </div>
        {/*End of Box */}
        <div className="subscribe">
          <img className="thirddbgMusic" src={thirddbgMusic} alt="" />
          <div className="subscribeBox">
            <h1 className="genTitle subscribeTitle subAlignment">Subscribe</h1>
            <p className="subscribeDescription subAlignment">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="subInbox">
              <input
                className="subscribeInput subAlignment"
                type="email"
                placeholder="Enter Your email address"
              />
              <div className="subButton">
                <button className="subscribeButton">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        {/* End of Subscribe */}
      </div>
    );
  }
}

export default App;
