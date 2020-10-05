import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { programs } from "../../config/programs";
import Typography from "@material-ui/core/Typography";

const Investment = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      className={classes.programsContainer}
      style={{  }}
    >
      {programs.map((i) => {
        return (
          <Grid item lg={4} xs={12} md={4} sm={6}>
            <div style={{ minHeight: 125 }}>
              <img src={i.url} />
            </div>
            <Typography variant="h6" style={{ fontWeight: 700 }}>
              {i.title}
            </Typography>
            <Typography variant="p" style={{ color: "#2f2f2f", fontSize: 15,lineHeight:2 }}>
              {i.desc}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Investment;
