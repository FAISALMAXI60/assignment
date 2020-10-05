import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dividentsContainer: {
    width: "100%",
    margin: "auto",
    width: "90%",
    background:
      "url(https://www.bank-of-tron.com/assets/images/widget-4-bg.jpg)",
    backgroundSize: "cover",
    borderRadius: 10,
    padding: 15,
    marginBottom:60
  },
  button: {
    lineHeight: " 60px",
    width: "185px",
    textAlign: "center",
    display: "block",
    borderRadius: "30px",
    background: "#38d5e2",
    color: "#fff",
    // font-family: 'Montserrat', sans-serif;
    fontSize: "12px",
    fontWeight: 600,
    transition: "all 0.2s",
    "&:hover": {
      boxShadow: "0 0 10px 5px rgba(0,0,0,.1)",
      transition: "all 0.2s",
    },
    textDecoration: "none",
  },
}));

export default useStyles;
