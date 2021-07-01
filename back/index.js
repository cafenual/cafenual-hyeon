//const express = require("express"); //express불러오고
import express from "express";
import mongoose from "mongoose";
import "dotenv/config"; //.env파일 안에서는 뛰어쓰기하면 인식안됨 조심
import userRouter from "./routers/userRouter";

const app = express(); //express 실행시킴
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //미들웨어 아래코드가 실행되기전에 중간에 실행

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB 실행됨")) //DB가 잘 실행되고 있다면
  .catch((err) => console.log(err)); //에러가 잡히면 이쪽으로

const handleListening = () => {
  console.log(`서버가 시작됨 : http://localhost:${process.env.PORT}`); //잘실행됬는지 확인하기 위해서
};

app.use("/api/user", userRouter);
app.listen(process.env.PORT, handleListening);
