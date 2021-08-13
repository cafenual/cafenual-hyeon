import Header from "layouts/Header";
import React, { useEffect, useState } from "react";
import "./styles.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { eventData } from "static/FakeDates";
import ScheduleUpload from "modules/ScheduleModule/ScheduleUpload";
import ScheduleEdit from "modules/ScheduleModule/ScheduleEdit";

const Schedule = () => {
  const [IsModal, setIsModal] = useState(false);
  const [IsModal2, setIsModal2] = useState(false);

  const onToggle = () => {
    setIsModal(!IsModal);
  };
  const onToggle2 = () => {
    setIsModal2(!IsModal2);
  };

  return (
    <>
      <div id="Schedule" className="page-layout">
        <Header />
        <div className="all-block">
          <div className="top-block">
            <FullCalendar
              locale="ko"
              selectable="true"
              weekNumberCalculation="ISO" //ISO8601 주번호로 기본값이 1로 변경됨
              timezone="local"
              droppable="false" //맘대로 줄이고 늘리고 옮기고 못함
              defaultView="dayGridMonth"
              eventColor={eventData.color}
              eventTextColor="white"
              plugins={[dayGridPlugin, interactionPlugin]}
              events={eventData}
              dateClick={onToggle}
              eventClick={onToggle2}
            />
          </div>
        </div>
      </div>
      {IsModal && <ScheduleUpload onToggle={onToggle} />}
      {IsModal2 && <ScheduleEdit onToggle2={onToggle2} />}
    </>
  );
};

export default Schedule;
