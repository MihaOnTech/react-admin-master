import {
    Box,
    Button,
    Stack,
    Typography,
    useTheme,
    Paper,
    Container,
  } from "@mui/material";
  import { tokens } from "../../theme";
  import Header from "../../components/Header";

  
  const Tablon = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box m="20px">
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Header
            title="NUEVA ENCUESTA"
            subtitle="Rellena los siguientes campos"
          />
          <Box justifyItems="right">
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
              }}
            >
              {" "}
              NUEVA ENCUESTA{" "}
            </Button>
          </Box>
        </Box>
        {/* LAYOUT GRID */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: colors.primary[400],   
            borderRadius: "5px",
            height: "70vh"
          }}
        >
      
        </Box>
      </Box>
    );
  };
  
  export default Tablon;
  