import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../stylesLogAndSig/Styles';
import {Paper} from "@material-ui/core";
import StudentRegistration from '../../registrationForm/StudentRegistration';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../../navbar/NavBar';





export default function SignUpButton() {
    const classes = useStyles();
    const [navigation, setNavigation] = useState();

    function studentHandle () {
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/student" component={StudentRegistration}/>

            </Switch>
        </Router>
    
    }
    function arbetsgivareHandle () {

    }
    function skolanHandle () {

    }

    }


    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.paper}>
                <h3 className={classes.h3}>Register as</h3>
            <Button
                variant="contained"
                color="primary"
                className={classes.button1}
                type="submit"
                onClick={()=>studentHandle}
            >
               Student
            </Button>
             <Button
                variant="contained"
                color="primary"
                className={classes.button2}
                type="submit"
                onClick={()=>arbetsgivareHandle}
            >
                Arbetsgivare
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button3}
                type="submit"
                onClick={()=>skolanHandle
                }
            >
                Skolan
            </Button>

            </Paper>
        </div>
    );
}
