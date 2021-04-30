function checkForm(){
  const password_one=document.querySelector("#user_password").value
  const password_two=document.querySelector("#user_password_check").value
  const num = password_one.search(/[0-9]/g);
  const eng = password_one.search(/[a-z]/ig);
  if(password_one.search(/\s/) != -1){  //search는 특정문자에 위치를 반환
    alert("비밀번호는 공백 없이 입력해주세요.");
    return false;
 }
 else if(num < 0 || eng < 0){
  alert("영문,숫자를 혼합하여 입력해주세요.");
  return false;
 }
  if(password_one.length<8||password_one.length>20){
    alert("비밀번호는 8글자 이상 20글자 이하");
    return false;
  }
  if(password_one!=password_two){
    alert("비밀번호가 같지 않습니다");
    password_one.focus();
    return false;
  }
  return true;
}
