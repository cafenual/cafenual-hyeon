import React from "react";
import "./styles.css";

const WorkEditForm = ({ onToggle }) => {
  return (
    <div id="WorkEditForm">
      <div className="all-block">
        <div className="top"></div>
        <div className="top-block">
          {" "}
          <input type="text" className="edit-input" />
        </div>
        <div className="bottom-block">
          <button  className="edit-btn" onClick={onToggle}>수정</button>
          <button  className="edit-btn" onClick={onToggle}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default WorkEditForm;
