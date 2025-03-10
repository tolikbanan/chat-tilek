import { axiosApi } from "./axiosApi";

interface Message {
  author: string;
  message: string;
}

export const sendMessage = async (data: Message) => {
  try {
    await axiosApi.post("/messages.json", data);
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
  }
};
