import React, {FC, useEffect, useState} from 'react';
import {useStyles} from "../components/registrationForm/RegistrationFormStyle/RegistrationStyle";
import { Paper, TextField} from "@mui/material";

import {Link} from "react-router-dom";
import RegisterButton from "./../components/loginAndRegister/button/RegisterButton";
import UserService from "../api/UserService";
import theme from "../../Theme";
import { ThemeProvider } from '@material-ui/core/styles';

const StudentRegistration: React.FC<{}> = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [schoolName, setSchoolName] = useState("");

    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

       let stud= {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          username:username,
          password:password,
          schoolName: schoolName
         };
         UserService.saveStudent(stud).then(res=>alert("Registration successful")).catch(err=>console.log(err));
       // clear the value and redirect to the login page
    }
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <form   onSubmit={e => onSubmit(e)}>
                    <h3 className={classes.h3}>Register as a Student</h3>
                    <div className={classes.cont}>
                    <div className={classes.username} >
                        <TextField className={classes.textfield} id="standard-basic" label="First Name" variant="standard"   value={firstName}
                                   onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className={classes.username} >
                        <TextField id="standard-basic" label="Last Name" variant="standard"   value={lastName}
                                   onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className={classes.username} >
                        <TextField  type={email} id="standard-basic" label="Email" variant="standard"   value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className={classes.username} >
                        <TextField id="standard-basic" label="Phone" variant="standard"   value={phone}
                                   onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className={classes.username} >
                            <TextField id="standard-basic" label="School Name" variant="standard"   value={schoolName}
                                       onChange={e => setSchoolName(e.target.value)}/>
                    </div>
                    <div className={classes.username} >
                        <TextField  type={username} id="standard-basic" label="Username" variant="standard" value={username}
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
export default StudentRegistration;
