import path from "path";
import express from "express";
import app, { geminiModel, isGeminiConfigured } from "./apiApp";

const PORT = 3000;

const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    if (isGeminiConfigured()) {
      console.log(`Gemini Chatbot aktiv (Modell: ${geminiModel})`);
    } else {
      console.warn(
        "Gemini Chatbot: GEMINI_API_KEY fehlt – nur Mock-Antworten. Key in .env.local eintragen (siehe .env.example)."
      );
    }
  });
};

if (!process.env.NETLIFY) {
  startServer().catch((err) => {
    console.error("Error starting express-vite server:", err);
  });
}

export default app;
