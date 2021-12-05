import {TextField, Paper } from "@material-ui/core";
import {Link} from 'react-router-dom';
import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "./stylesLogAndSig/Styles";
import UserService from "../../api/UserService";
import Button from "@material-ui/core/Button";



const LoginPage:FC<{}> = (props):ReactElement => {
    const [loading, setLoading] = useState(true);
    const [state, setState]=useState(true);
    const [username, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const classes = useStyles();

    const handleLogin = () => {
        UserService.verifyLogin1(username,password).then(res=>console.log(res)).catch(err=>console.log(err));
    }

    return(
        <div>
            <Paper elevation={3} className={classes.paper}>
                <h1 className={classes.h3} data-testid="LogIn">LogIn</h1>

                <div className={classes.username} >
                    <TextField
                        id="standard-basic"
                        label="Username"
                        variant="standard"
                        data-testid="input-text"
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div className={classes.password}>
                    <TextField type={"password"}
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        data-testid="input-text"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className={classes.div}>
                    <Link to="/forgetPassword" className={classes.forgetPassword} style={{ textDecoration: 'none', color: '#15a905' }} >
                        Forget password?
                    </Link>
                </div>

                <div className={classes.btn}>
                    <Button onClick={handleLogin}
                        variant="contained"
                        className={classes.loginButton}
                        type="submit">
                        Login
                    </Button>
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
