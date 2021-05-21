import React, { useState } from "react";
import "./Commuting.css";

const Commuting = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage('출근')
  const onClickEnter2 = () => setMessage('퇴근')
  return (
    <div>
      <div class="back_ground">
        <div class="container">
          <center>
            <div class="middle">
              <div class="left">
                <div id="change_date" class="clock"></div>
                <div id="change_time" class="clock"></div>
                <div id="button_display">
                  <button onClick={onClickEnter}>출근</button>
                  <button onClick={onClickEnter2}>퇴근</button>
                </div>
              </div>
              <div class="right">
                <div class="right_box">
                  <div id="now_clock"></div>
                  <div id="now_text"></div>
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
