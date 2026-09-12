const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use(express.static(__dirname));

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Photo Editor server is running!"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Photo Editor server running on port ${PORT}`);
});
