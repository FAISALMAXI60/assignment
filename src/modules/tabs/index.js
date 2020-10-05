import React from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./cards";

/**
 * @author
 * @function Tabs
 **/

const Tabs = (props) => {
  return (
    <>
      <Grid container className="tabs-container">
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <a
                className="check-link"
                href="#"
                style={{
                  fontSize: 13,
                  color: "#010927",
                  textDecoration: "none",
                  fontWeight: 700,
                  // padding: "13px 10px 5px 10px",
                  margin: "0 10px 10px 10px",
                  padding: "13px 13px",
                  background: "#38d5e2",
                  borderRadius: "25px",
                  border: "2px solid #007bff",
                }}
              >
                TRX BANK
              </a>
            </div>
            <div>
              {" "}
              <a
                className="check-link"
                href="#"
                style={{
                  fontSize: 13,
                  color: "#010927",
                  textDecoration: "none",
                  fontWeight: 700,
                  // padding: "13px 10px 5px 10px",
                  margin: "0 10px 10px 10px",
                  background: "#38d5e2",
                  padding: "13px 13px",
                  borderRadius: "25px",
                  border: "2px solid #007bff",
                }}
              >
                BTT BANK
              </a>
            </div>
            <div>
              {" "}
              <a
                className="check-link"
                href="#"
                style={{
                  fontSize: 13,
                  color: "#010927",
                  textDecoration: "none",
                  fontWeight: 700,
                  // padding: "13px 10px 5px 10px",
                  margin: "0 10px 10px 10px",
                  background: "#38d5e2",
                  padding: "13px 13px",
                  borderRadius: "25px",
                  border: "2px solid #007bff",
                }}
              >
                ACE BANK <span>[COMING SOON]</span>
              </a>
            </div>
            <div>
              {" "}
              <a
                className="check-link"
                href="#"
                style={{
                  fontSize: 13,
                  color: "#010927",
                  textDecoration: "none",
                  fontWeight: 700,
                  // padding: "13px 10px 5px 10px",
                  padding: "13px 13px",
                  margin: "0 10px 10px 10px",
                  background: "#38d5e2",
                  borderRadius: "25px",
                  border: "2px solid #007bff",
                }}
              >
                NEW PROJECT <span>[COMING SOON]</span>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <p
            style={{
              // fontFamily: "Montserrat",
              textAlign: "center",
              fontWeight: 600,
              color: "#899ea7",
              fontSize: "14px",
              letterSpacing: "3px",
            }}
          >
            Total invested
          </p>
          <h3
            style={{
              color: "#0db0c2",
              marginTop: 10,
              textAlign: "center",
              fontSize: "2em",
            }}
          >
            {" "}
            968 334 952 TRX
          </h3>
          <div style={{ textAlign: "center" }}>
            <div>
              <span>Your TRON wallet:</span>
            </div>
            <div>
              <span>Your wallet balance: TRX:</span>
            </div>
          </div>
        </Grid>
      </Grid>
      <Cards />
    </>
  );
};

export default Tabs;
