import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import GroupIcon from "@material-ui/icons/Group";

const Dividents = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.dividentsContainer}>
      <Grid item lg={6} md={6} sm={12} xs={12} style={{ padding: 40 }}>
        <div style={{ color: "white", display: "flex", alignItems: "center" }}>
          <Typography variant="h4" style={{ fontWeight: 700, fontSize: 38 }}>
            <MonetizationOnIcon
              style={{ fontSize: 38, position: "relative", top: 5 }}
            />{" "}
            Dividents
          </Typography>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            Referral rewards
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            0 TRX
          </Typography>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            Withdrawable(referral rewards included)
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            0.000000 TRX
          </Typography>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <a href="#" class={classes.button}>
            WITHDRAW
          </a>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Typography variant="h6" style={{ fontSize: 16, color: "white" }}>
            You should have 1-2 TRX for the transaction fee
          </Typography>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            My total investment 0.00 TRX
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            Total dividends so far 0.00 TRX
          </Typography>
        </div>
      </Grid>
      <Grid item sm={12} lg={6} md={6} sm={12} xs={12} style={{ padding: 40 }}>
        <div style={{ color: "white" }}>
          <Typography variant="h4" style={{ fontWeight: 700, fontSize: 38 }}>
            <GroupIcon style={{ fontSize: 40, position: "relative", top: 5 }} />{" "}
            Referral program
          </Typography>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            Your referral link [<a href="#">COPY LINK</a>]:
          </Typography>
          <Typography
            variant="h6"
            style={{ fontSize: 16, fontWeight: "bolder" }}
          >
            No Link...
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            You can get your referral link after investing.
          </Typography>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            1 referral （5% Referral rewards） - 0
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            2 referral （2% Referral rewards） - 0
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            3 referral （0.5% Referral rewards） - 0
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            Invitee (0.5% of the investment)
          </Typography>
        </div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            Total referral rewards payout - 0 TRX
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Dividents;
