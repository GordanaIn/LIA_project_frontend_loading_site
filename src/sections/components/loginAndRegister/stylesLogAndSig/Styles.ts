import {Theme} from "@mui/material/styles";
import {makeStyles,createStyles,} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                '& > *': {
                    margin: theme.spacing(8),
                },
            },
            h3:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            p:{
                textAlign:'left',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:80,
                fontsize: 15,
            },
            button: {
                alignItems:"center",
                margin: theme.spacing(1),
                marginTop:100,
            },
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:400,
                height:500,
            },
            username:{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 100,
                marginTop: 30,

            },
            password:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 100,
            },
            btn:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 160,
            },
            button1:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 130,
                color:"#fff",
                paddingLeft:38,
                paddingRight:38,
                padding:15,
                backgroundColor:'#d3b03c',

            },
            button2:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 130,
                color:"#fff",
                paddingLeft:17,
                paddingRight:17,
                padding:15,
                backgroundColor:'#d3b03c',
            },
            button3:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 130,
                color:"#fff",
                paddingLeft:44,
                paddingRight:44,
                padding:15,
                backgroundColor:'#d3b03c',
            },
            signUp:{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft:5,
            },
            forgetPassword:{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 200,
            },
            div:{
                marginTop:10,
            }

        }),
    )
;
