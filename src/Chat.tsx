import { useState } from "react";
import { sendMessage } from "./messagesApi";
import { TextField, Button, Box } from "@mui/material";

const Chat = () => {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (!author || !message) return; // Проверка, чтобы поля не были пустыми

    await sendMessage({ author, message });
    setMessage(""); // Очищаем поле после отправки
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} width="300px">
      <TextField 
        label="Автор" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
      />
      <TextField 
        label="Сообщение" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <Button variant="contained" onClick={handleSendMessage}>
        Отправить
      </Button>
    </Box>
  );
};

export default Chat;
