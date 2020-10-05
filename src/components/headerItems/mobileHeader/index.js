import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import TelegramIcon from "@material-ui/icons/Telegram";
import SmsIcon from "@material-ui/icons/Sms";
import Logo from "../../../asset/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "./drawer";

const MobileHeader = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className="container">
      <div className={classes.containerInner}>
        <div style={{ marginLeft: 40 }}>
          <img src={Logo} />
        </div>
        <div />
        <div style={{ marginRight: 40, position: "relative", top: 5 }}>
          <span style={{ paddingRight: 25 }}>
            <TelegramIcon className={classes.icon} />
            <SmsIcon className={classes.icon} />
          </span>
          <IconButton
            color="primary"
            style={{ position: "relative", bottom: 5 }}
          >
            <Drawer />
          </IconButton>
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

export default MobileHeader;
