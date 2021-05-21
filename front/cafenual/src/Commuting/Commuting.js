import React, { useEffect, useState } from "react";
import "./Commuting.css";

const Commuting = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [changeTime, setchangeTime] = useState("");
  const [changeDate, setchangeDate] = useState("");

  const changeTimeHandle = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    setchangeTime(`${hours}시 ${minutes}분 ${seconds}초 `);
  };
  useEffect(() => {
    //useEffect안에 있는 내용은 렌더링 되기전 제일 먼저 실행(우선순위 최우선)
    const changeDateHandle = () => {
      let date = new Date();
      let month = date.getMonth();
      let day = date.getDate();
      setchangeDate(`${month}월 ${day}일`);
    };
    changeDateHandle();
  }, []);

  setInterval(changeTimeHandle, 100);

  const onClickEnter = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    setCurrentTime(`${hours}시 ${minutes}분 ${seconds}초 `);
    setCurrentText("출근되었습니다");
  };

  const onClickEnter2 = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    setCurrentTime(`${hours}시 ${minutes}분 ${seconds}초 `);
    setCurrentText("퇴근되었습니다");
  };

  return (
    <div id="commuting">
      <div class="back_ground">
        <div class="container">
          <center>
            <div class="middle">
              <div class="left">
                <div id="change_date" class="clock">
                  {changeDate}
                </div>
                <div id="change_time" class="clock">
                  {changeTime}
                </div>
                <div id="button_display">
                  <button onClick={onClickEnter}>출근</button>
                  <button onClick={onClickEnter2}>퇴근</button>
                </div>
              </div>
              <div class="right">
                <div class="right_box">
                  <div id="now_clock">{currentTime}</div>
                  <div id="now_text">{currentText}</div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Commuting;
