import { generateGeminiResponse } from "../services/gemini.service.js";

export const handleChat = async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages) {
      return res.status(400).json({ error: "Messages are required" });
    }

    const reply = await generateGeminiResponse(messages);

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};