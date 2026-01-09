import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

export async function generateCaption(file: any, prompt: string) {
  const buffer = await file.toBuffer();
  const base64Image = buffer.toString("base64");

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        inlineData: {
          data: base64Image,
          mimeType: file.mimetype,
        },
      },
      {
        text: prompt,
      },
    ],
  });

  return result;
}
