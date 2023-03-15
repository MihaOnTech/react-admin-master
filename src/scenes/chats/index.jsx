import { useState, useRef } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  TextField,
  Grid,
  Modal,
  Container,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatButton from "../../components/ChatButton";
import { tokens } from "../../theme";

const Chats = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [chatSelected, setChatSelected] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="10vh"
        width="100%"
        border="1"
      >
        <Box
          gridColumn="span 12"
          backgroundColor={colors.grey[800]}
          border="1"
          display="flex"
          boxShadow="10"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          Current User Id: {currentUser.id} Name: {currentUser.name}
          {console.log(chatSelected)}
          {console.log(currentUser)}
        </Box>

        <Box
          sx={{
            gridColumn: chatSelected
              ? { xs: "span 1  ", sm: "span 6" }
              : { xs: "span 12", sm: "span 6" },
            display: chatSelected
              ? { xs: "none", sm: "flex" }
              : { xs: "flex", sm: "flex" },
          }}
          border="1"
          backgroundColor="white"
          height="77vh"
          color="black"
          borderRight={1}
        >
          <Stack width="100%">
            <Box
              height="10vh"
              border="1"
              backgroundColor={colors.grey[600]}
              color="white"
            >
              {/**chatSelected ? "CHAT SELECTED" : "NO CHAT SELECTED" */}
              CHATS LIST HEADER
            </Box>
            <Box
              height="100%"
              overflow="auto"
              ref={topRef}
              backgroundColor={colors.grey[800]}
            >
              <Stack>
                <ChatButton setChatSelected={setChatSelected} />
              </Stack>
            </Box>
            <Box
              height="10vh"
              border="1"
              color="white"
              backgroundColor={colors.grey[600]}
              justifyContent="space-between"
              display="flex"
            >
              FOOTER
              <Box sx={{ backgroundPosition: `30% 30%` }}>
                <button type="button" onClick={() => scrollToTop()}>
                  Scroll to Top
                </button>
              </Box>
            </Box>
          </Stack>

        </Box>
        {/** SELECTED CHAT */}
        <Box
          sx={{
            gridColumn: chatSelected
              ? { xs: "span 12", sm: "span 6" }
              : { xs: "span 1", sm: "span 6" },
            display: chatSelected
              ? { xs: "flex", sm: "flex" }
              : { xs: "none", sm: "flex" },
          }}
          border="1"
          height="77vh"
          color="black"
        >
          <Stack width="100%">
            <Box
              height="10vh"
              border="1"
              color="white"
              backgroundColor={colors.grey[600]}
            >
              <IconButton
                color="primary"
                size="large"
                onClick={() => setChatSelected(false)}
                sx={{
                  display: chatSelected
                    ? { xs: "inline", sm: "none" }
                    : { xs: "none" },
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              CURRENT CHAT {chatSelected}
            </Box>
            <Box
              height="100%"
              backgroundColor={colors.grey[400]}
              color="white"
              border="1"
              borderColor="black"
            >
              MESSAGES
            </Box>
            <Box height="10vh" backgroundColor={colors.grey[600]} color="white">
              USER INPUT
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Chats;
