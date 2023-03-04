import React from "react";
import Cardpng from "../assets/card.png";
import Dashboardpng from "../assets/daashboard.png";
import Exchangepng from "../assets/exchange.png";
import Profilepng from "../assets/profile.png";
import Signalpng from "../assets/signal.png";
import Logo from "../assets/logodark.png";
import Dmicon from "../assets/dmicon.png";
import Dmicondark from "../assets/dmicondark.png";
import "./homepage.css";
import { ColumnChart } from "../components/chart";
import Mastercard from "../assets/mastercard.png";
import Flyemirate from "../assets/flyemirate.png";
import Google from "../assets/google.png";
import Apple from "../assets/appledark.png";
import ProfileImg from "../assets/profileImg.png";
import Arrow from "../assets/arrow.png";

const data = [
  {
    businessLogo: Apple,
    businessName: "Apple Inc.",
    date: "10th Jan 2023",
    cardLogo: Mastercard,
    cardType: "Master Card",
    amount: `$243`,
  },
  {
    businessLogo: Google,
    businessName: "Google giftcard.",
    date: "12th Jan 2023",
    cardLogo: Mastercard,
    cardType: "Master Card",
    amount: `$100`,
  },
  {
    businessLogo: Flyemirate,
    businessName: "Fly Emirates",
    date: "12th Jan 2023",
    cardLogo: Mastercard,
    cardType: "Master Card",
    amount: `$500`,
  },
];

const plans = [
  {
    goal: "Buy a car",
    raised: `2400/3000`,
  },
  {
    goal: "Buy a car",
    raised: `3000/7000`,
  },
];

const MobNav = () => {
  return (
    <>
      <div className="mobile-navbar">
        <span className="logo-flex">
          <img src={Logo} alt="logo png" />
          <p>DroidPad</p>
        </span>

        <ul>
          <li>
            <img src={Dashboardpng} alt="" />
            Dashboard
          </li>
          <li>
            <img src={Exchangepng} alt="" />
            Exchange
          </li>
          <li>
            <img src={Cardpng} alt="" />
            Cards
          </li>
          <li>
            <img src={Signalpng} alt="" />
            Deposits
          </li>
          <li>
            <img src={Profilepng} alt="" />
            User
          </li>
        </ul>

        <div className="profile-div">
          <span>
            <img
              src={ProfileImg}
              style={{ width: `3.5rem`, height: `3.5rem` }}
              alt="profile"
            />
          </span>

          <span>
            <p className="bold">Jeff John</p>
            <p>Product Manager</p>
          </span>

          <span className="arrow">
            <img src={Arrow} alt="arrow icon" />
          </span>
        </div>
      </div>
    </>
  );
};

export const Homepage = () => {
  const [mobNav, setMobNav] = React.useState(false);

  return (
    <>
      <div className="home-pageCard ">
        <div className="nav-info">
          {mobNav ? (
            <i className="uil uil-times" onClick={() => setMobNav(false)}></i>
          ) : (
            <i onClick={() => setMobNav(true)} className="uil uil-bars"></i>
          )}

          {mobNav && (
            <div id="mobile-navbar-desktop">
              <MobNav />
            </div>
          )}
        </div>

        <MobNav />

        <div className="accountInfo-div">
          <span>
            <p className="balance-label">TOTAL BALANCE</p>
            <p className="available-balance">$12,000</p>
            <div className="account-info">
              <span>
                <p className="pOne">Income</p>
                <p className="pTwo">$3,600</p>
              </span>

              <span>
                <p className="pOne">Expenses</p>
                <p className="pTwo">$1,234</p>
              </span>

              <span>
                <p className="pOne">Credit limit</p>
                <p className="pTwo">$9,000</p>
              </span>
            </div>
          </span>

          <span>
            <div className="card-infoDiv">
              <span className="card-infoTitle">
                <p>Your Cards</p>
                <p>+</p>
              </span>

              <div className="card-menu">
                <div className="cardOne">
                  <p>VISA</p>
                  <hr />
                  <hr />

                  <div className="cardNo-details">
                    <span>
                      <p className="p-one">Number</p>
                      <p>
                        <input type="password" value="1234" />
                        6789
                      </p>
                    </span>

                    <span>
                      <p className="p-one">Expiry Date</p>
                      <p>31/12/2023</p>
                    </span>
                  </div>
                </div>

                <div className="cardTwo">
                  <div>
                    <div className="ellipse-1"></div>
                    <div className="ellipse-2"></div>
                  </div>

                  <div className="cardTwo-number">
                    <p className="p-num">Number</p>
                    <p>
                      <input type="password" value="1234" />
                      3456
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </span>

          <div className="cardBalance">
            <span id="labels">
              <p className="label">Balance</p>
              <p>$5000</p>
            </span>
            <span>
              <p className="label">Balance</p>
              <p>$7000</p>
            </span>
          </div>

          <span className="if">
            <hr />
          </span>

          <span>
            <div className="plans-heading">
              <p className="bold">Plannings</p>
              <p>VIEW ALL</p>
            </div>

            {plans.map((Plans, i) => {
              return (
                <>
                  <div className="plans-item">
                    <div>
                      <span className="details-span">
                        <div>
                          <p id="p1">{Plans.goal}</p>
                          <p id="p2">{Plans.raised}</p>
                        </div>

                        <progress max="100" min="0" value="70"></progress>
                      </span>{" "}
                    </div>
                  </div>

                  <div id="img">
                    <i class="uil uil-message"></i>
                  </div>
                </>
              );
            })}
          </span>
        </div>

        <div className="paymentStat-div">
          <h2>Payment Statistics</h2>
          <span>
            <p>Today</p>
            <p>Week</p>
            <p>Month</p>
          </span>
          <hr />

          <div className="date_bonus">
            <p className="date">16 January, 2023</p>
            <p className="cashB">
              Cashback <span>$6.22</span> <img src={Dmicondark} />
            </p>
          </div>

          <h2 className="balance">$140.00</h2>

          <ColumnChart />

          <div className="payment-history">
            <h2>Payment history</h2>
            {data.map((e, i) => {
              return (
                <>
                  <span>
                    <div className="item-one">
                      <span className="flex-column">
                        <span className="img-span">
                          <img src={e.businessLogo} alt="logo" />
                        </span>

                        <div className="text">
                          <p className="p-one">{e.businessName}</p>
                          <p className="p-two">{e.date}</p>
                        </div>
                      </span>

                      <span className="mastercard">
                        <img
                          className="mastercard-img"
                          src={e.cardLogo}
                          alt="logo"
                        />
                        <p>{e.cardType}</p>
                      </span>

                      <span>
                        <p className="phAmount">{e.amount}</p>
                      </span>
                    </div>
                  </span>
                  <vr />;
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
