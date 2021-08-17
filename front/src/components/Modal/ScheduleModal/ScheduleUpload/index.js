import React, { useEffect, useState } from "react";
import { colorData, eventData } from "static/FakeDates";
import "./styles.css";

const ScheduleUpload = ({ onToggle }) => {
  const [ScheduleData, setFakeScheduleData] = useState([]);

  useEffect(() => {
    setFakeScheduleData(eventData.filter((data) => data.id === "12"));
  }, []);

  console.log(ScheduleData);

  return (
    <div id="ScheduleUpload">
      <div className="all-block">
        <div className="top-block">스케쥴 추가</div>
        <div className="middle-block">
          <div className="input-box">
            <div className="names">이름 : </div>
            <input type="text" className="add-input" />
          </div>
          <div className="input-box">
            <div className="names">시작날짜 : </div>
            <input type="date" className="add-input" />{" "}
            {/*datetime-local를 쓰면 시간과 년월일을 같이 할수 있다*/}
          </div>
          <div className="input-box">
            <div className="names">끝날짜: </div>
            <input type="date" className="add-input" />
          </div>
          <div className="input-box">
            <div className="names">출근시간: </div>
            <input type="time" className="add-input" />
          </div>
          <div className="input-box">
            <div className="names">퇴근시간: </div>
            <input type="time" className="add-input" />
          </div>
          <select>
            <option>기본 : 회색</option>
            {colorData.map((colors, index) => (
              <option>{colors.color}</option>
            ))}
          </select>
        </div>
        <div className="bottom-block">
          <button className="edit-btn" onClick={onToggle}>
            추가
          </button>
          <button className="edit-btn" onClick={onToggle}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleUpload;
