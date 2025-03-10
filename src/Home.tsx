import { useEffect, useState } from "react";
import { axiosApi } from "./axiosApi";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface Message {
  id: string;
  author: string;
  message: string;
}

const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async () => {
    const { data } = await axiosApi.get("/messages.json");
    if (data) {
      const loadedMessages = Object.keys(data).map(id => ({
        id,
        ...data[id]
      }));
      setMessages(loadedMessages);
    }
  };

  useEffect(() => {
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {messages.map(msg => (
        <Card key={msg.id}>
          <CardContent>
            <Typography variant="h6">{msg.author}</Typography>
            <Typography>{msg.message}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
