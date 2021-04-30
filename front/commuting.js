function showClock() {  //showClock 함수 설정
  const showclock_tag=document.querySelector("#change_date"); //태그,id,클래스
  const showclock_tag1=document.querySelector("#change_time");
  function change_clock(){
    let work_time = new Date();
    let workday = work_time.getMonth()+1 + '월' + work_time.getDate() + '일';
    let workhour = work_time.getHours() + '시' + work_time.getMinutes() + '분' + work_time.getSeconds() + '초';
    // let current_month = current_date.getMonth();
    // let current_day = current_date.getDay();
    // let current_hour = current_date.getHours();
    // let current_minute = current_date.getMinutes();
    // let current_second = current_date.getSeconds();
    showclock_tag.innerText=(`${workday}`);
    showclock_tag1.innerText=(`${workhour}`);
  }
  setInterval(change_clock,100);  //반복(함수,반복할초)
}
showClock();

const show_text=document.querySelector("#now_text");
const show_background=document.querySelector(".middle");
const show_clock=document.querySelector("#now_clock");

function change_text(){
  let work_time = new Date();
  let workhour = work_time.getHours() + '시' + work_time.getMinutes() + '분' + work_time.getSeconds() + '초';
  show_clock.innerText=(`${workhour}`);
  show_text.innerText=("출근 완료");
  show_background.style.backgroundImage="url(open.jpg)";
}
function change_text2(){
  let work_time = new Date();
  let workhour = work_time.getHours() + '시' + work_time.getMinutes() + '분' + work_time.getSeconds() + '초';
  show_clock.innerText=(`${workhour}`);
  show_text.innerText=("퇴근 완료");
  show_background.style.backgroundImage="url(close.jpg)";
}
