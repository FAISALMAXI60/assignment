import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import TelegramIcon from "@material-ui/icons/Telegram";
import SmsIcon from "@material-ui/icons/Sms";

const FooterBottom = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.bottomFooterContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <Typography
          variant="h3"
          style={{
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color:"white"
          }}
        >
          <img
            src="https://www.bank-of-tron.com/assets/images/logo.png"
            style={{ marginRight: 5 }}
          />
          Bank of TRON
        </Typography>
        <div style={{paddingTop:20}}>
        <Typography variant="h6"style={{color:"white"}}>Contact us</Typography>
        <TelegramIcon style={{fontSize:35,color:"white",paddingLeft:6,marginTop:10}}/>
        <SmsIcon style={{fontSize:35,color:"white",paddingLeft:15}}/>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
