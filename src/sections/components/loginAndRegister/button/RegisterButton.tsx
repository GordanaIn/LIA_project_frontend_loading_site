import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './buttonStyles/StylesButton';


export default function RegisterButton() {
    const classes = useStyles();

    return (
        <div >
            <Button
                variant="contained"
                color="primary"
                className={classes.registerButton}
                type="submit">
                Register
            </Button>
        </div>
    );
}
