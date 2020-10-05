import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Investment = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      className={`${classes.dividentsContainer} ${"container"}`}
    >
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#010927",
          }}
        >
          <HomeIcon style={{ fontSize: 50 }} />
          My investments
        </Typography>
        <div style={{ marginTop: 30, marginBottom: 30 }}>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            My total investment 0.00 TRX
          </Typography>
          <Typography variant="h6" style={{ fontSize: 16 }}>
            Total dividends so far 0.00 TRX
          </Typography>
        </div>
        <div>
          <a href="#" className={`${classes.button} ${"investmentButton"}`}>
            INVEST NOW{" "}
            <ArrowRightIcon
              className={`${classes.arrowRight} ${"arrow-right"}`}
            />
          </a>
        </div>
      </Grid>
      <Grid item sm={12} lg={6} md={6} sm={12} xs={12}>
        <img
          src="https://www.bank-of-tron.com/assets/images/widget-2-1.png"
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Investment;
