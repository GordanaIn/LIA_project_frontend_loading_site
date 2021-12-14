import {TextField, Paper } from "@material-ui/core";
import {Link} from 'react-router-dom';
import React, {useCallback, useEffect, useState} from 'react';
import {useKeycloak} from "@react-keycloak/web/lib/useKeycloak";
import { useStyles } from "./stylesLogAndSig/Styles";
import UserService from "../../api/UserService";
import Button from "@material-ui/core/Button";
import classes from "*.module.css";

export default function LoginPage() {
    const {keycloak, initialized} = useKeycloak()


    const kcToken = keycloak?.token ?? '';
    const [users, setUsers] = useState<string[]>([])

    useEffect(() => {
            console.log("token", kcToken);
            if (kcToken) {
                fetch("http://localhost:8080/users", {
                    headers: {
                        "Authorization": "Bearer " + kcToken
                    }
                })
                    .then(res => res.json())
                    .then(users => setUsers(users))
                    .catch(reason => console.error("Failed to fetch ", reason))
            }
        },
        [keycloak.authenticated, kcToken])
    return (
        <>
            <h2>Hello</h2>
            {keycloak.authenticated ? <span>Authenticated</span> : <span>UnAuthenticated</span>}
            <div>
                <h4>Users</h4>
                <ul>
                    {users.map(user => <ul key={user}>{user}</ul>)}
                </ul>
            </div>
            <div>
                {keycloak.authenticated ?
                    <button
                        type="button"
                        onClick={() => keycloak.logout()}>
                        logout
                    </button>
                    :
                    <button
                        type="button"
                        onClick={() => keycloak?.login()}>
                        login
                    </button>
                }

            </div>
        </>
    )
}



/*class Token{
    access_token:string;
    refresh_token:string;
    constructor(access_token:string ,refresh_token:string ){
        this.access_token=access_token;
        this.refresh_token=refresh_token;
    };

}

const LoginPage:FC<{}> = (props): ReactElement => {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [username, setUserName]=useState("");
    const [password, setPassword]=useState("");
    const [jwt, setJwt] = useState(false);
    const [redirect, setRedirect] = useState(false);
    //saved first
    const [token, SetToken] =useState<Token>();

    //all other request send the authorization header
    const classes = useStyles();

    const handleLogin = () => {
        UserService.verifyLogin1(username,password).then(res=>{
            SetToken(res);
            console.log(res?.access_token);
            //switchBasedOnRole(res);
        }).catch(err=>console.log(err));
    }
   //switch to different project
    const switchBasedOnRole = (token:Token) =>{
        //role
        UserService.getRole(token?.access_token);
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
*/
