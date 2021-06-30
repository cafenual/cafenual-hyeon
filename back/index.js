//const express = require("express"); //express불러오고
import express from "express";
import mongoose from "mongoose";

const app = express(); //express 실행시킴

mongoose
  .connect(
    "mongodb+srv://mag3010:hyeon3010@cafenual.8soqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB 실행됨")) //DB가 잘 실행되고 있다면
  .catch((err) => console.log(err)); //에러가 잡히면 이쪽으로

const handleListening = () => {
  console.log("서버가 시작됨 : http://localhost:4000"); //잘실행됬는지 확인하기 위해서
};

app.listen(4000, handleListening);
