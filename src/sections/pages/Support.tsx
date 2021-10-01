import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "../components/loginAndRegister/stylesLogAndSig/Styles";
import {Paper} from "@material-ui/core";



const Support:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <div className={classes.root} >
          <Paper elevation={4} className={classes.paper}>
              <h3 className={classes.h3}>Support</h3>
              <p className={classes.p}>The page is under construct </p>
          </Paper>
        </div>

    );
}
export default Support;