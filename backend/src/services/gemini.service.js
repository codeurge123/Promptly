import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config({
    path: ".env"
})

// console.log(process.env.GEMINI_API_KEY)

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateGeminiResponse = async (messages) => {
    if (!messages || messages.length === 0) {
        throw new Error("Messages array is empty");
    }

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
    });

    // Get only latest user message
    const lastUserMessage = messages.at(-1)?.content;

    if (!lastUserMessage) {
        throw new Error("Invalid last message");
    }

    const result = await model.generateContent(lastUserMessage);

    return result.response.text();
};