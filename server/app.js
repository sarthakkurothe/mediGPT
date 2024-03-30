import express from "express";
import mongoose from "mongoose";
import requestIp from "request-ip";
import "dotenv/config";
import cors from "cors"; 

const app = express();

app.use(express.json());
app.use(requestIp.mw());

const originUrl = process.env.CLIENT_REDIRECT_URL;

const corsOptions = { 
  origin: originUrl,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

import publicRoutes from "./router/public.js";
import authRoutes from "./router/auth.js";

app.use("/gemini", publicRoutes);
app.use(authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message: message, data: data, error: error });
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    const PORT_NO = process.env.PORT || 3000; 
    app.listen(PORT_NO, () => { 
      console.log(`Gemini server is running on port ${PORT_NO}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
