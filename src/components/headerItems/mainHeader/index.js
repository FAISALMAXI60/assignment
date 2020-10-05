import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import TelegramIcon from "@material-ui/icons/Telegram";
import SmsIcon from "@material-ui/icons/Sms";
import Logo from "../../../asset/logo.png";

const MainHeader = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className="container">
      <div className={classes.containerInner}>
        <div style={{ marginLeft: 40 }}>
          <img src={Logo} />
        </div>
        <div style={{ fontSize: 15 }}>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 0,
              alignItems: "center",
            }}
          >
            <li
              style={{
                listStyle: "none",
              }}
            >
              <a className={`${"check-link"} ${classes.listLink}`} href="">
                HOME
              </a>
            </li>
            <li
              style={{
                listStyle: "none",
              }}
            >
              <a className={`${"check-link"} ${classes.listLink}`} href="">
                ABOUT
              </a>
            </li>
            <li
              style={{
                listStyle: "none",
              }}
            >
              <a className={`${"check-link"} ${classes.listLink}`} href="">
                CONTRACT [TRONSCAN]
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginRight: 40 }}>
          <TelegramIcon className={classes.icon} />
          <SmsIcon className={classes.icon} />
        </div>
      </div>
      <div style={{ height: "53.7vw" }}>
        <img
          src="https://www.bank-of-tron.com/assets/images/slider-bg-3.jpg"
          style={{
            width: "100%",
            position: "absolute",
            height: "auto",
            top: 0,
          }}
        />
      </div>
    </Grid>
  );
};

export default MainHeader;
