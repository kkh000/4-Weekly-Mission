const emailDiv = document.querySelector('#email');
const pwdDiv = document.querySelector('#password');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');

let [emailVal, pwdVal] = ["", ""];

// 에러 메세지 출력 함수
function errorMsg(errorCase) {
  let newNode = document.createElement('div');

  if(errorCase === "NoEmail") {          // email 값 없이 focusout시 
      newNode.innerHTML = "<p>이메일을 입력해 주세요</p>"
      newNode.classList.add(errorCase,'errorMsg')
      emailDiv.append(newNode);

  } else if(errorCase === "wrongEmail") { // email 형식에 맞지 않은 경우
      newNode.innerHTML = "<p>올바른 이메일 주소가 아닙니다.</p>"
      newNode.classList.add(errorCase,'errorMsg')
      emailDiv.append(newNode);

  } else if(errorCase === "NoPwd") {      // password 값 없이 focusout시 
      newNode.innerHTML = "<p>비밀번호을 입력해 주세요</p>"
      newNode.classList.add(errorCase,'errorMsg')
      pwdDiv.append(newNode);


  } else if(errorCase === "Other") {       // 그 외 로그인 시도 경우
    let newNode = document.createElement('div');
    newNode.innerHTML = "<p>이메일을 확인해 주세요</p>"
    newNode.classList.add(errorCase,'errorMsg')
    emailDiv.append(newNode);

    let newNode2 = document.createElement('div');
    newNode2.innerHTML = "<p>비밀번호를 확인해 주세요</p>"
    newNode2.classList.add(errorCase,'errorMsg')
    pwdDiv.append(newNode2);
  }
 }

 emailInput.addEventListener('focusout', function(e) {
  if(e.target.value === "") { // email 값 없이 focusout시 
    if(emailInput.getAttribute('status') === '정상') {
      errorMsg("NoEmail");
    }
    emailInput.setAttribute('status','에러');
    
  } else if (e.target.value !== "") {
    if(emailInput.getAttribute('status') === '에러') {
      const delNode = document.querySelector('.NoEmail')
      delNode.remove();
    }
    emailInput.setAttribute('status','정상');
  }
  emailVal = e.target.value; // 작성한 이메일 저장
 })

 pwdInput.addEventListener('focusout', function(e) {
  if(e.target.value === "") { // email 값 없이 focusout시 
    if(pwdInput.getAttribute('status') === '정상') {
      errorMsg("NoPwd");
    }
    pwdInput.setAttribute('status','에러');
    
  } else if (e.target.value !== "") {
    if(pwdInput.getAttribute('status') === '에러') {
      const delNode = document.querySelector(".NoPwd")
      delNode.remove();
    }
    pwdInput.setAttribute('status','정상');
  }
  pwdVal = e.target.value; // 작성한 이메일 저장
 })