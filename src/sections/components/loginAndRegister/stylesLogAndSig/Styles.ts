import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
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
                marginLeft: 125,
                marginTop: 30,
            },
            password:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 125,
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
            },

        }),
    )
;
