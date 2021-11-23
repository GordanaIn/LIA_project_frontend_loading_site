import React, {useState} from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../../../Theme";
import {Paper, TextField} from "@mui/material";
import RegisterButton from "../loginAndRegister/button/RegisterButton";
import {Link} from "react-router-dom";
import {useStyles} from "./RegistrationFormStyle/RegistrationStyle";
import UserService from "../../api/UserService";


const SchoolRegistration: React.FC<{}> = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [organizationNumber, setOrganizationNumber] = useState("");
    const [schoolEmail, setSchoolEmail] = useState("");
    const [phone, sePhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let school= {
            name: name,
            organizationNumber: organizationNumber,
            schoolEmail: schoolEmail,
            userEmail: userEmail,
            phone:phone,
            username:username,
            password:password
        };
        let response= UserService.saveSchool(school).then(res=>console.log(res)).catch(err=>console.log(err));
    }
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper}>
                    <form   onSubmit={e => onSubmit(e)}>
                        <h3 className={classes.h3}>Register as a School</h3>
                        <div className={classes.cont}>
                            <div className={classes.username} >
                                <TextField className={classes.textfield} id="standard-basic" label="School Name" variant="standard"   value={name}
                                           onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className={classes.username} >
                                <TextField id="standard-basic" label="Organization Number" variant="standard"   value={organizationNumber}
                                           onChange={e => setOrganizationNumber(e.target.value)}/>
                            </div>
                            <div className={classes.username} >
                                <TextField id="standard-basic" label="School Email" variant="standard"   value={schoolEmail}
                                           onChange={e => setSchoolEmail(e.target.value)}/>
                            </div>
                            <div className={classes.username} >
                                <TextField id="standard-basic" label="Phone" variant="standard"   value={phone}
                                           onChange={e => sePhone(e.target.value)}/>
                            </div>
                            <div className={classes.username} >
                                <TextField id="standard-basic" label="User Email" variant="standard"   value={userEmail}
                                           onChange={e => setUserEmail(e.target.value)}/>
                            </div>

                            <div className={classes.username} >
                                <TextField id="standard-basic" label="Username" variant="standard" value={username}
                                           onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className={classes.password}>
                                <TextField id="standard-basic" type={"password"} label="Password" variant="standard" value={password}
                                           onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className={classes.btn}>
                                <RegisterButton />
                            </div>
                            <p className={classes.p}>

                                If you have account go
                                <Link to="home" className={classes.button} style={{ textDecoration: 'none', color: '#15a905' }} >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </Paper>
            </div>
        </ThemeProvider>
    );
}
export default SchoolRegistration;