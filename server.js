const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.static(__dirname));
app.use(express.json({ limit: "20mb" }));

// Server test
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Photo AI Editor server is running!"
    });
});

// OpenAI connection test
app.get("/api/ai-test", async (req, res) => {
    try {
        const result = await client.responses.create({
            model: "gpt-5",
            input: "Say only: Photo AI Editor AI connection successful!"
        });

        res.json({
            success: true,
            message: result.output_text
        });

    } catch (error) {
        console.error("AI ERROR:", error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(
        `Photo AI Editor server running at http://localhost:${PORT}`
    );
});