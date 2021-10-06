import {TextField, Paper } from "@material-ui/core";
import {Link} from 'react-router-dom';
import React, {FC, ReactElement, useEffect, useState} from "react";
import LoginButton from "./button/LoginButton";
import { useStyles } from "./stylesLogAndSig/Styles";



const LoginPage:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <div>
            <Paper elevation={3} className={classes.paper}>
                <h3 className={classes.h3}>Log In</h3>
                <div className={classes.username} >
                    <TextField id="standard-basic" label="Username" variant="standard"  />
                </div>
                <div className={classes.password}>
                    <TextField id="standard-basic" label="Password" variant="standard" />
                </div>
                <div className={classes.div}>
                    <Link to="/forgetPassword" className={classes.forgetPassword} style={{ textDecoration: 'none', color: '#15a905' }} >
                        Forget password?
                    </Link>
                </div>

                <div className={classes.btn}>
                    <LoginButton />
                </div>

                <p className={classes.p}>

                    If you don't have account
                    <Link to="/signUp" className={classes.signUp} style={{ textDecoration: 'none', color: '#15a905' }} >
                        SignUp
                    </Link>

                </p>
            </Paper>

        </div>

    );
}
export default LoginPage;
