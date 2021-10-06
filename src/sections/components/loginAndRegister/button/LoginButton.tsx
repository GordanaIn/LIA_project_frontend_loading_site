import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./buttonStyles/StylesButton";

export default function LoginButton() {
    const classes = useStyles();

    return (

        <div >
            <Button
                variant="contained"
                className={classes.loginButton}
                type="submit">
               Login
            </Button>
        </div>

    );
}
