// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
// const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
// const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// // 🔹 Route to detect mood using OpenAI API
// app.post('/mood', async (req, res) => {
//     const userText = req.body.text;
//     if (!userText) return res.status(400).json({ error: 'No text provided' });

//     try {
//         const response = await axios.post(
//             "https://api.openai.com/v1/chat/completions",
//             {
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: "system", content: "Analyze the mood" }, { role: "user", content: userText }]
//             },
//             {
//                 headers: {
//                     "Authorization": `Bearer ${OPENAI_API_KEY}`,
//                     "Content-Type": "application/json"
//                 }
//             }
//         );

//         const mood = response.data.choices[0]?.message?.content.trim() || "Unknown";
//         res.json({ mood });
//     } catch (error) {
//         console.error("Error analyzing mood:", error);
//         res.status(500).json({ error: "Failed to analyze mood" });
//     }
// });

// // 🔹 Route to get Spotify token
// app.get('/spotify-token', async (req, res) => {
//     try {
//         const response = await axios.post(
//             "https://accounts.spotify.com/api/token",
//             new URLSearchParams({ grant_type: "client_credentials" }).toString(),
//             {
//                 headers: {
//                     "Authorization": `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
//                     "Content-Type": "application/x-www-form-urlencoded"
//                 }
//             }
//         );

//         res.json({ access_token: response.data.access_token });
//     } catch (error) {
//         console.error("Error fetching Spotify token:", error);
//         res.status(500).json({ error: "Failed to get Spotify token" });
//     }
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));