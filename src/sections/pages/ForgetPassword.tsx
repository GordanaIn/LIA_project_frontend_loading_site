import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "../components/loginAndRegister/stylesLogAndSig/Styles";
import {Paper} from "@material-ui/core";
import {ThemeProvider} from "@mui/material";
import theme from "../../Theme";
import Button from "mui-button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ChangePassword from "./ChangePassword";



const ForgetPassword:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <Paper elevation={4} className={classes.paper}>
                <h3 className={classes.h3}>Forget Password</h3>
              <ChangePassword/>
              </Paper>
        </div>

    );
}
export default ForgetPassword;
