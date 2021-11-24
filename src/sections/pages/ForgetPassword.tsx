import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "../components/loginAndRegister/stylesLogAndSig/Styles";
import {Paper} from "@material-ui/core";


const ForgetPassword:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <Paper elevation={4} className={classes.paper}>
                <h3 className={classes.h3}>Forget Password</h3>

              </Paper>
        </div>

    );
}
export default ForgetPassword;
