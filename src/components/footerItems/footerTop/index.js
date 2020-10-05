import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";

const FooterTop = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      className={`${classes.mainContainer} ${"footerTopContainer"}`}
    >
      <Grid item xs={6} sm={3} style={{marginTop:300}}>
        <div>
          <img src="https://www.bank-of-tron.com/assets/images/widget-7-elm-1.png" />
          <Typography variant="h6" className={classes.title}>
            How to invest on desktop?
          </Typography>
          <Typography
            variant="p"
            style={{ color: "#2f2f2f", fontSize: 15, lineHeight: 2 }}
          >
            You can install the TronLink or TronPay extension on Chrome. After
            the installation, you can create a new TRX wallet or import an
            existing TRX wallet, and then transfer the TRX from the exchange to
            the wallet. Finally, login on TronLink or TronPay to browse this
            website and invest.
          </Typography>
        </div>
        <div className={`${classes.pin} ${"pin"}`}></div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div>
          <img src="https://www.bank-of-tron.com/assets/images/widget-7-elm-2.png" />
          <Typography variant="h6" className={classes.title}>
            How to invest on mobile?
          </Typography>
          <Typography
            variant="p"
            style={{ color: "#2f2f2f", fontSize: 15, lineHeight: 2 }}
          >
            You can download Banko Wallet、Math Wallet or TronWallet app from
            application store. After the installation, you can create a new TRX
            wallet or import an existing TRX wallet, and then transfer the TRX
            from the exchange to the wallet. Finally, find Bank of TRON within
            the wallet app or browse our site with the browser in the app, and
            then go to invest or withdraw.
          </Typography>
        </div>
        <div className={`${classes.pin} ${"pin"}`}></div>
      </Grid>
      <Grid item xs={6} sm={3} style={{marginTop:450}}>
        <div>
          <img src="https://www.bank-of-tron.com/assets/images/widget-7-elm-4.png" />
          <Typography variant="h6" className={classes.title}>
            How is the fund distributed?
          </Typography>
          <Typography
            variant="p"
            style={{ color: "#2f2f2f", fontSize: 15, lineHeight: 2 }}
          >
            Technical support: 3% Marketing: 3% Referral: 5%-2%-0.5% Invitee:
            0.5%
          </Typography>
        </div>
        <div className={`${classes.pin} ${"pin"}`}></div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <div>
          <img src="https://www.bank-of-tron.com/assets/images/widget-7-elm-3.png" />
          <Typography variant="h6" className={classes.title}>
            What is the referral program?
          </Typography>
          <Typography
            variant="p"
            style={{ color: "#2f2f2f", fontSize: 15, lineHeight: 2 }}
          >
            Bank of TRON smart contract set 3 tiers of referral rewards, which
            are 5%, 2%, and 0.5% respectively. Moreover, the invitee can also
            get 0.5% of his/her own investment as rewards. The referral rewards
            are distributed to your balance automatically and you can withdraw
            at anytime.
          </Typography>
        </div>
        <div className={`${classes.pin} ${"pin"}`}></div>
      </Grid>
    </Grid>
  );
};

export default FooterTop;
