import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY || "" });

export async function generateCaption(file: any) {
    const buffer = await file.toBuffer();
    const base64Image = buffer.toString("base64");

  let description = "";
  
    

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
                text: "Qual é este personagem?",
            },
        ],
    });

    return result;
}
