import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "0 0 10px 5px rgba(0,0,0,.1) !important",
    backgroundColor: "#f4fbfd !important",
  },
  baseLine1: {
    display: "block",
    position: "relative",
    height: "5px",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: "linear-gradient(to right, #c3faf9,#2ddfda) !important",
  },
  baseLine2: {
    display: "block",
    position: "relative",
    height: "5px",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: "linear-gradient(to right, #ebebd7,#bebea9) !important",
  },
  baseLine3: {
    display: "block",
    position: "relative",
    height: "5px",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: "linear-gradient(to right, #f5f5cb,#f7f149) !important",
  },
  baseLine4: {
    display: "block",
    position: "relative",
    height: "5px",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: "linear-gradient(to right, #ffe0b4,#cd994e) !important",
  },
  title: {
    // fontFamily: "Montserrat",
    fontWeight: 600,
    color: "#899ea7",
    fontSize: "14px",
    letterSpacing: "3px",
  },
  subtitle: {
    color: "#ff531e",
    fontWeight: 600,
    color: "#ff531e",
    fontSize: "14px",
    letterSpacing: "3px",
  },
  percentage: {
    height: "128px",
    width: "128px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 52,
    fontWeight: 700,
    backgroundColor: "#dee4e7",
  },
  ulContainer: {
    paddingLeft: 0,
  },
  list: {
    listStyle: "none",
  },
  button1:{
    lineHeight: '60px',
    width: '185px',
    textAlign: 'center',
    display: 'block',
    borderRadius: '30px',
    background: '#3a8df8',
    color: '#fff',
    margin:'35px auto 0',
    textDecoration:'none',
    // font-family: 'Montserrat', sans-serif;
    fontSize: '12px',
    fontWeight: 600,
    transition: 'all 0.2s',
    "&:hover": {
     boxShadow:'0 0 10px 5px rgba(0,0,0,.1)',
     transition:'all 0.2s'
    },
  },
  button2:{
    lineHeight: '60px',
    width: '185px',
    textAlign: 'center',
    display: 'block',
    borderRadius: '30px',
    background: '#bab9a1',
    color: '#fff',
    margin:'35px auto 0',
    textDecoration:'none',
    // font-family: 'Montserrat', sans-serif;
    fontSize: '12px',
    fontWeight: 600,
    transition: 'all 0.2s',
    "&:hover": {
     boxShadow:'0 0 10px 5px rgba(0,0,0,.1)',
     transition:'all 0.2s'
    },
  },
  button3:{
    lineHeight: '60px',
    width: '185px',
    textAlign: 'center',
    display: 'block',
    borderRadius: '30px',
    background: '#c0b136',
    color: '#fff',
    margin:'35px auto 0',
    textDecoration:'none',
    // font-family: 'Montserrat', sans-serif;
    fontSize: '12px',
    fontWeight: 600,
    transition: 'all 0.2s',
    "&:hover": {
     boxShadow:'0 0 10px 5px rgba(0,0,0,.1)',
     transition:'all 0.2s'
    },
  },
  button4:{
    lineHeight: '60px',
    width: '185px',
    textAlign: 'center',
    display: 'block',
    borderRadius: '30px',
    background: '#cd994e',
    color: '#fff',
    margin:'35px auto 0',
    textDecoration:'none',
    // font-family: 'Montserrat', sans-serif;
    fontSize: '12px',
    fontWeight: 600,
    transition: 'all 0.2s',
    "&:hover": {
     boxShadow:'0 0 10px 5px rgba(0,0,0,.1)',
     transition:'all 0.2s'
    },
  }
}));

export default useStyles;
