import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "20px !important",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      color: "#ff0",
    },
    marginRight: 8,
    marginLeft: 8,
  },
  listLink: {
    color: "white",
    textDecoration: "none",
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 15,
    // paddingBottom: 15,
    display: "flex",
  },
  containerInner: {
    justifyContent: "space-between",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    height: "100px",
    // margin: "auto",
    width: "100%",
    zIndex: 9997,
    position: "absolute",
  },
}));

export default useStyles;
