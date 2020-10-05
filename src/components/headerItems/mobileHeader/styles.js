import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "20px !important",
    color:"white",
    "&:hover": {
      cursor: "pointer",
      color: "#ff0",
    },
    marginRight: 8,
    marginLeft: 8,
  },
  containerInner:{
    justifyContent: "space-between",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    height: "100px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    // margin: "auto",
    width: "100%",
    zIndex: 800,
    position: "absolute",
  }
}));

export default useStyles;
