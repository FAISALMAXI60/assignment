import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    bottomFooterContainer:{
        background:"url(https://www.bank-of-tron.com/assets/images/widget-7-bg.png)",
        backgroundPosition:"bottom",
        paddingTop: '460px',
        backgroundRepeat:'no-repeat',
        paddingBottom:200,
        position:'relative',
        zIndex:2
    }
}));

export default useStyles;
