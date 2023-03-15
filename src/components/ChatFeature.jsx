import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ChatFeature = ({ avatar, nombre, estado }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (

        <Box sx={{
            display: "flex",
            backgroundColor: colors.primary[400],
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 40px 0px 20px",
            width: "97%",
            height: "50px",
            "&:hover": {
                color: 'gray',
                backgroundColor: 'lightblue'
            }
        }}>

            <img src={'/assets/user_0'+avatar+'.png'} alt="Profile pic" width="30px" height="30px" />
            {/** User Name */}
            <Box> {nombre} </Box>

        </Box>

    );
};

export default ChatFeature;