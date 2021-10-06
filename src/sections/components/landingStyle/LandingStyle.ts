import { Theme} from "@mui/material/styles";
import {makeStyles,createStyles,} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme:Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                '& > *': {
                    margin: theme.spacing(5),
                },
            },
            h1:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',

            },
            p:{
                textAlign:'left',
                marginLeft:10,
            },

        }),
    )
;
