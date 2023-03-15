import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import { useQuery, gql } from '@apollo/client';

const CONVERSATIONS_QUERY = gql`
  query GetConversations {
    conversations {
      id
    }
  }
`;

const ChatMessages = ( chatSelected ) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { loading, error, data } = useQuery(CONVERSATIONS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const { conversations } = data;

  return (
    <div>
        {conversations.map((conversation) => (
            <div key={conversation.id}>
                <Box
            sx={{
            height: "10vh",
            display: "flex",
            width: "100%",
            border: 1,
            color: "white",
            backgroundColor: colors.grey[200],
            "&:hover": {
            backgroundColor: "colors.grey[500]",
            opacity: [0.9, 0.8, 0.7],
            },
        }}
        >
        <Button width="100%" onClick={() => setChatSelected(conversation.id)}>
            {" "}
            Select Chat {conversation.id}
            {" "}
        </Button>
            </Box>

            </div>
         ))}
    </div>
    
  );
};

export default ChatMessages;
