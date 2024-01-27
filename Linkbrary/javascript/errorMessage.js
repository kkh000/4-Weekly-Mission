// 에러시 적용되는 스타일
// 에러메세지표시(id)
function showidErrorMessage(message){ 
  if(!document.getElementById('idErrorMessage')){
    // input 색상변경
    ID_INPUT.style.border = '3px solid #FF5B56';
    // p 메세지표출
    const errormessage = document.createElement("p");
    errormessage.id = 'idErrorMessage'
    errormessage.textContent = message;
    errormessage.style.color = '#FF5B56';
    IDBOX.appendChild(errormessage);
  }
}
// 에러메세지표시(pw)
function showpwErrorMessage(message){ 
  if(!document.getElementById('pwErrorMessage')){
    // input 색상변경
    PW_TEXT.style.border = '3px solid #FF5B56';
    // p 메세지표출
    const errormessage = document.createElement("p");
    errormessage.id = 'pwErrorMessage'
    errormessage.textContent = message;
    errormessage.style.color = '#FF5B56';
    PWBOX.appendChild(errormessage);
  }
}