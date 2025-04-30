const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey:"AIzaSyDDXc5pqWSNU7XuNBXq9vyAFKyNeJKzmyg"  });

async function main(msg) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: msg,
    });
    return response.text;
}

module.exports = main;

