import React, {FC, useState} from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import {Menu} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {useStyles} from "./stylesNav/NavStyle";
import PersonIcon from "@material-ui/icons/Person";
import theme from "../../../../Theme";
import { ThemeProvider } from '@material-ui/core/styles';

const NavMenu: FC<{}>= () =>{
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState < null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>

                <Button onClick={handleClick} className={classes.navBarMenu}>
                    <MenuIcon style={{fontSize:50}}  className={classes.navBarMenu}/>
                </Button>
                <Menu open={Boolean(anchorEl)}
                      color="secoundary"
                      id ="menu"
                      keepMounted
                      anchorEl={anchorEl}
                      onClose={handleClose}>
                    <MenuItem onClick={handleClose}><Link
                        style={{ textDecoration: 'none', color: 'inherit' }} className={[classes.navBarMenu, classes.linkDecoration].join('')}
                        to="home"><HomeIcon style={{color: "#C1C4C8", marginRight: 6}}/>Home</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}><Link
                        style={{ textDecoration: 'none', color: 'inherit' }} className={[classes.navBarMenu, classes.linkDecoration].join('')} to="home"><PersonIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Sign Up</Link>
                    </MenuItem>
                </Menu>
            </div>
        </ThemeProvider>
    );
}
export default NavMenu;
