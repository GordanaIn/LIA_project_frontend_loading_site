import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../stylesLogAndSig/Styles';
import {Paper, ThemeProvider} from "@material-ui/core";
import {Link} from 'react-router-dom'
import theme from "../../../../Theme";


export default function SignUpButton() {


    const classes = useStyles();
    const [navigation, setNavigation] = useState();

    function studentHandle () {

    }
    function arbetsgivareHandle () {

    }
    function skolanHandle () {

    }

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <Paper elevation={4} className={classes.paper}>
                <h3 className={classes.h3}>Register as</h3>
                <Button
                    variant="contained"
                    className={classes.button1}
                    type="submit"
                >
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Link to="/registrationStudent" style={{ textDecoration: 'none', color: 'inherit' }} >
                        Student
                    </Link>

                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button2}
                    type="submit"
                    onClick={()=>arbetsgivareHandle}
                >
                    Arbetsgivare
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button3}
                    type="submit"
                    onClick={()=>skolanHandle
                    }
                >
                    Skolan
                </Button>

            </Paper>
        </div>
        </ThemeProvider>
    );
}
