import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: "auto",
    width: "90%",
    textAlign: "center",
  },
  title: {
    color: "#010927",
    fontSize: 18,
    fontWeight: 700,
  },
  pin: {
    display: "block",
    margin: "40px auto 0 auto",
    borderRadius: "50%",
    width: "11px",
    height: "11px",
    border: "3px solid #f97a2e",
    boxShadow: "0 0 10px 5px rgba(0,0,0,.1)",
    position: "relative",
    top: "15px",
    transition: "all 1s",
  },
}));

export default useStyles;
