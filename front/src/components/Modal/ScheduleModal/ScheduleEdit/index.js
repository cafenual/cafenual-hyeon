import React, { useEffect, useState } from "react";
import { colorData, eventData } from "static/FakeDates";
import "./styles.css";

const ScheduleEdit = ({ onToggle2 }) => {
  const [ScheduleData, setFakeScheduleData] = useState([]);
  const [Day, setDay] = useState("2020-08-12");
  const [Day2, setDay2] = useState("2020-08-15");
  const [Time, setTime] = useState("14:30");
  const [Time2, setTime2] = useState("22:00");

  useEffect(() => {
    setFakeScheduleData(eventData.filter((data) => data.id === "12"));
  }, []);

  const onChange = (e) => {
    setDay(e.target.value);
  };
  const onChange2 = (e) => {
    setDay2(e.target.value);
  };
  const onChange3 = (e) => {
    setTime(e.target.value);
  };
  const onChange4 = (e) => {
    setTime2(e.target.value);
  };

  return (
    <div id="ScheduleEdit">
      <div className="all-block">
        <div className="top-block">스케쥴 수정 및 삭제</div>
        <div className="middle-block">
          <div className="input-box">
            <div className="names">이름 : </div>
            <input type="text" placeholder="이도현" className="add-input" />
          </div>
          <div className="input-box">
            <div className="names">시작날짜 : </div>
            <input
              type="date"
              value={Day}
              onChange={onChange}
              className="add-input"
            />
          </div>
          <div className="input-box">
            <div className="names">끝날짜: </div>
            <input
              type="date"
              value={Day2}
              onChange={onChange2}
              className="add-input"
            />
            {/*왜 안바낌?? */}
          </div>
          <div className="input-box">
            <div className="names">출근시간: </div>
            <input
              type="time"
              value={Time}
              onChange={onChange3}
              className="add-input"
            />
          </div>
          <div className="input-box">
            <div className="names">퇴근시간: </div>
            <input
              type="time"
              value={Time2}
              onChange={onChange4}
              className="add-input"
            />
          </div>
          <select>
            <option>기본 : 회색</option>
            {colorData.map((colors, index) => (
              <option>{colors.color}</option>
            ))}
          </select>
        </div>
        <div className="bottom-block">
          <button className="btns" onClick={onToggle2}>
            수정
          </button>
          <button className="btns" onClick={onToggle2}>
            삭제
          </button>
          <button className="btns" onClick={onToggle2}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEdit;
