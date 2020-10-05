import React from "react";
import useStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

/**
 * @author
 * @function Cards
 **/

const Cards = (props) => {
  const classes = useStyles();
  return (
    <div className="cards-container">
      <Grid container spacing={3} style={{ width: "100%", margin: 0 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          style={{ textAlign: "center" }}
        >
          <span className={classes.baseLine1}></span>
          <Paper className={classes.paper}>
            <p className={classes.title}>Diamond Plan</p>
            <div className={classes.subtitle}>[Daily ROI]</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <span className={classes.percentage}>3.7%</span>
            </div>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul className={classes.ulContainer}>
                <li className={classes.list}>Dividends every second</li>
                <li className={classes.list}>Forever</li>
                <li className={classes.list}>Total return ∞</li>
                <li className={classes.list}>Min. investment is 10 TRX</li>
              </ul>
            </div>
            <div
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                placeholder="0"
                style={{ borderRadius: 4, fontWeight: "bolder" }}
                id="outlined-basic"
                variant="outlined"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
              />
              <p
                style={{
                  color: "#ff531e",
                  margin: 0,
                  fontWeight: "bolder",
                  paddingLeft: 5,
                }}
              >
                TRX
              </p>
            </div>
            <div>
              <p style={{ color: "#ff531e", margin: 0 }}>
                You should have ~2.5 TRX more for the transaction fee
              </p>
            </div>
            <a href="#" className={classes.button1}>
              INVEST
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <span className={classes.baseLine2}></span>
          <Paper className={classes.paper}>
            <p className={classes.title}>Diamond Plan</p>
            <div className={classes.subtitle}>[Daily ROI]</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <span className={classes.percentage}>3.7%</span>
            </div>
            <div style={{ textAlign: "left",display: "flex",
                justifyContent: "center", }}>
              <ul className={classes.ulContainer}>
                <li className={classes.list}>Dividends every second</li>
                <li className={classes.list}>Forever</li>
                <li className={classes.list}>Total return ∞</li>
                <li className={classes.list}>Min. investment is 10 TRX</li>
              </ul>
            </div>
            <div
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                placeholder="0"
                style={{ borderRadius: 4, fontWeight: "bolder" }}
                id="outlined-basic"
                variant="outlined"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
              />
              <p
                style={{
                  color: "#ff531e",
                  margin: 0,
                  fontWeight: "bolder",
                  paddingLeft: 5,
                }}
              >
                TRX
              </p>
            </div>
            <div>
              <p style={{ color: "#ff531e", margin: 0 }}>
                You should have ~2.5 TRX more for the transaction fee
              </p>
            </div>
            <a href="#" className={classes.button2}>
              INVEST
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <span className={classes.baseLine3}></span>
          <Paper className={classes.paper}>
            <p className={classes.title}>Diamond Plan</p>
            <div className={classes.subtitle}>[Daily ROI]</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <span className={classes.percentage}>3.7%</span>
            </div>
            <div style={{ textAlign: "left",display: "flex",
                justifyContent: "center", }}>
              <ul className={classes.ulContainer}>
                <li className={classes.list}>Dividends every second</li>
                <li className={classes.list}>Forever</li>
                <li className={classes.list}>Total return ∞</li>
                <li className={classes.list}>Min. investment is 10 TRX</li>
              </ul>
            </div>
            <div
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                placeholder="0"
                style={{ borderRadius: 4, fontWeight: "bolder" }}
                id="outlined-basic"
                variant="outlined"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
              />
              <p
                style={{
                  color: "#ff531e",
                  margin: 0,
                  fontWeight: "bolder",
                  paddingLeft: 5,
                }}
              >
                TRX
              </p>
            </div>
            <div>
              <p style={{ color: "#ff531e", margin: 0 }}>
                You should have ~2.5 TRX more for the transaction fee
              </p>
            </div>
            <a href="#" className={classes.button3}>
              INVEST
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <span className={classes.baseLine4}></span>
          <Paper className={classes.paper}>
            <p className={classes.title}>Diamond Plan</p>
            <div className={classes.subtitle}>[Daily ROI]</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <span className={classes.percentage}>3.7%</span>
            </div>
            <div style={{ textAlign: "left",display: "flex",
                justifyContent: "center", }}>
              <ul className={classes.ulContainer}>
                <li className={classes.list}>Dividends every second</li>
                <li className={classes.list}>Forever</li>
                <li className={classes.list}>Total return ∞</li>
                <li className={classes.list}>Min. investment is 10 TRX</li>
              </ul>
            </div>
            <div
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                placeholder="0"
                style={{ borderRadius: 4, fontWeight: "bolder" }}
                id="outlined-basic"
                variant="outlined"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
              />
              <p
                style={{
                  color: "#ff531e",
                  margin: 0,
                  fontWeight: "bolder",
                  paddingLeft: 5,
                }}
              >
                TRX
              </p>
            </div>
            <div>
              <p style={{ color: "#ff531e", margin: 0 }}>
                You should have ~2.5 TRX more for the transaction fee
              </p>
            </div>
            <a href="#" className={classes.button4}>
              INVEST
            </a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
