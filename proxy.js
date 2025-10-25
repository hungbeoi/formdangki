// proxy.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 URL Google Apps Script của bạn:
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwQy6kCH6V2xHxbMpSOZBZLQGR5_E_IbWbg7jub64TuTDhj9hVvHGBsQKgHePRMHRZAWQ/exec";

app.post("/send", async (req, res) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const text = await response.text();
    res.set("Access-Control-Allow-Origin", "*");
    res.send(text);
  } catch (error) {
    console.error("❌ Lỗi proxy:", error);
    res.status(500).send({ error: "Proxy error" });
  }
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3001, () => {
  console.log("✅ Proxy đang chạy tại http://localhost:3001");
});
