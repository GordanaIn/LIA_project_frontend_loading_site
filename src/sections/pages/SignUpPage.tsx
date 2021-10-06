import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "../components/loginAndRegister/stylesLogAndSig/Styles";
import SignUpButton from "../components/loginAndRegister/button/SignUpButton";



const SignUpPage:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <SignUpButton/>
        </div>

    );
}
export default SignUpPage;
