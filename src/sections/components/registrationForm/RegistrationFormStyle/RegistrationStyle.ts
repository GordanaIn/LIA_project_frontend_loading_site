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
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:400,
                height:850,
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
            h1:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            label:{
                textAlign:'left',
                marginLeft:20,
            },
            button:{

                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft:5,
            },
            textBox:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            },
            combo:{
                alignItems: 'center',
                marginTop: 20,
            },
            btn:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 140,
            },
        }),
    )
;