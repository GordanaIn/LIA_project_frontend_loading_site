import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./buttonStyles/StylesButton";
import {ThemeProvider} from "@mui/material";
import theme from "../../../../Theme";
export default function LoginButton() {
    const classes = useStyles();

    return (
<ThemeProvider theme={theme}>
        <div >
            <Button
                variant="contained"
                className={classes.loginButton}
                type="submit">
               Login
            </Button>
        </div>
</ThemeProvider>
    );
}
