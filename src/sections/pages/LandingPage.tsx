import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/landingStyle/LandingStyle";
import LoginPage from "../components/loginAndRegister/LoginPage";


const LandingPage:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    const goToSignUp = () =>{
        setNavigation("signUp")
    }

    return(
        <div className={classes.root}>
        <h2 data-testId="heder">Välkomen</h2>
            <LoginPage/>
        </div>

    );
}
export default LandingPage;
