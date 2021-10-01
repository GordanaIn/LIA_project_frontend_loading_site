import React, {FC, useEffect, useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from "./NavMenu";
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom'
import useWindowSize from "../windowSize/UseWindowSize";
import {useStyles} from "./stylesNav/NavStyle";


const NavBar: FC<{}>= (props) => {
    const classes = useStyles();
    const [checkWindowSize,setCheckWindowSize] = useState<boolean>();
    const {width,height} = useWindowSize();
    useEffect(()=>{
        width < 600 ? setCheckWindowSize(false): setCheckWindowSize(true)
    }, [width])
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.navBarMenuButton} color="inherit" aria-label="menu">
                        {
                            checkWindowSize!==true?<Menu/>:null
                        }
                    </IconButton>
                    <Typography variant="h6" className={classes.navBarTitle}>
                        LiaLisera
                    </Typography>

                    <Grid container direction ="row" justify="space-around" alignItems="center">
                        <Grid item>
                            {checkWindowSize !== false ? <Link style={{ textDecoration: 'none', color: 'inherit' }} className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/landingPage" > Home </Link>  :null}
                        </Grid>
                        <Grid item>
                            {checkWindowSize !== false ? <Link style={{ textDecoration: 'none', color: 'inherit' }} className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/support"> Support</Link>  :null}
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
