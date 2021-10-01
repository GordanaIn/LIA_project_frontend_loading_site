import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            alignItems:"center",
            margin: theme.spacing(1),

        },
    }),
);

export default function LoginButton() {
    const classes = useStyles();

    return (
        <div >
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit">
               Login
            </Button>
        </div>
    );
}
