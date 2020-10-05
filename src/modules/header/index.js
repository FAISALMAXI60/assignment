import React from "react";
import Grid from "@material-ui/core/Grid";
import MainHeader from "../../components/headerItems/mainHeader";
import MobileHeader from "../../components/headerItems/mobileHeader";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Header = (props) => {
  const matches = useMediaQuery('(min-width:800px)');

  return <Grid container>{matches ? <MainHeader /> : <MobileHeader />}</Grid>;
};

export default Header;
