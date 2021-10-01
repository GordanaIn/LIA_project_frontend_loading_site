import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import {Menu} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {useStyles} from "./stylesNav/NavStyle";
import PersonIcon from "@material-ui/icons/Person";

export default function NavMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState < null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <div>
                <Button aria-controls="simple-menu"
                        aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon className={classes.navBarMenuColor}/>
                </Button>
                <Menu open={Boolean(anchorEl)}
                      id ="simple-menu"
                      keepMounted
                      anchorEl={anchorEl}
                      onClose={handleClose}>
                    <MenuItem onClick={handleClose}><Link
                        className={[classes.navBarMenuColor, classes.linkDecoration].join('')} href={"/landingPage"}
                        to={''}><HomeIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link
                        className={[classes.navBarMenuColor, classes.linkDecoration].join('')} href={"/signup"} to={''}><PersonIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Sign Up</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}
