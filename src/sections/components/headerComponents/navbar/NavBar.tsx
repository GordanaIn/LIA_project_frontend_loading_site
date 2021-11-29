import React, {FC, useEffect, useState} from 'react';
import {
    AppBar,
    Toolbar,
    ThemeProvider} from '@mui/material';
import useWindowSize from "../windowSize/UseWindowSize";
import {useStyles} from "./stylesNav/NavStyle";
import {Link} from "react-router-dom";
import theme from "../../../../Theme";

import Logo from "../logan/Logo";
import Grid from '@material-ui/core/Grid';


const NavBar: FC<{}>= (show) =>{
    const classes = useStyles();
    const [checkWindowSize,setCheckWindowSize] = useState<boolean>();
    const {width,height} = useWindowSize();
    useEffect(()=>{
        width < 600 ? setCheckWindowSize(false): setCheckWindowSize(true)
    }, [width])
    return(
        <ThemeProvider theme={theme}>
            <div className={classes.div2}>
                <Logo/>
            </div>
            <AppBar position="static" color={"primary"}  className={classes.appBar}>
                <Toolbar>
                 {/*   <IconButton  edge="start" className={classes.navBarMenuButton} color="inherit" aria-label="menu">
                        {
                            checkWindowSize!==true?<Menu/> :null
                        }
                    </IconButton>*/}
                    <Grid container direction="row"  alignItems="center">
                        <Grid item className={classes.grid}>
                            {checkWindowSize !== false ?
                                <Link className={classes.linkDecoration} to="/home" > Home</Link> :null}
                        </Grid>
                        <Grid item className={classes.grid}>
                            {checkWindowSize !== false ?
                                <Link className={classes.linkDecoration} to="/aboutUs" >About us</Link> :null}
                        </Grid>
                        <Grid item className={classes.grid}>
                            {checkWindowSize !== false ?
                                <Link className={classes.linkDecoration} to="/contact" > Contact </Link> :null}
                        </Grid>
                        <Grid item className={classes.grid}>
                            {checkWindowSize !== false ?
                                <Link className={classes.linkDecoration} to="/support" > Support </Link> :null}
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
export default NavBar;

