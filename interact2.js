//이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.”
//이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.”
//이메일 input에서 focus out 할 때, input 값이 test@codeit.com 일 경우, “이미 사용 중인 이메일입니다.” 에러 메세지를 보입니다.


const inputel=document.querySelector('#emailinput'); //이메일 input 박스
const emailframe=document.querySelector('#emailframe'); //이메일 input 박스 frame
const errmsg=document.createElement('p'); //에러메시지
const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //이메일 테스팅 코드

function emaininput(e){
  //console.log(e.target.value);

  if(e.target.value==''){
    errmsg.textContent='이메일을 입력해 주세요.';
    emailframe.append(errmsg);
    console.log(e.target.type);
  }

  else{

    if(!emailtest.test(e.target.value)){ //이메일 확인 테스트
      errmsg.textContent='올바른 이메일 주소가 아닙니다.';
      emailframe.append(errmsg);
    }

    else{

      if(errmsg.textContent && e.target.value!='test@codeit.com'){ //만약에 올바른 이메일 주소를 작성하였으면 에러메시지 삭제
        errmsg.textContent='';
        errmsg.remove();
      }

      else if(errmsg.textContent && e.target.value=='test@codeit.com'){
        errmsg.textContent='이미 사용 중인 이메일입니다.';
        emailframe.append(errmsg);
      }

    }
    
  }
  
}

inputel.addEventListener('focusout',emaininput);



//비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 에러 메세지를 보입니다.
//비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.


const inputpass=document.querySelector('#passwordinput'); //비밀번호 input 박스
const passwordframe=document.querySelector('#passwordframe'); //비밀번호 input 박스 frame
const errmsg2=document.createElement('p'); //에러메시지

function passwordinput(e){
  if(e.target.value.length>=8){ //비밀번호가 일단 8자 이상인 경우
    
    let strcnt=0; //문자열 카운트
    let numcnt=0; //숫자 카운트

    for(let el of e.target.value){
      if( isNaN(Number(el)) ){ //숫자인지 문자인지 판별
        strcnt++;
      } 
      else{
        numcnt++;
      }
    }


    if(strcnt==e.target.value.length || numcnt==e.target.value.length){
      strcnt=0;
      numcnt=0;
      errmsg2.textContent='비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
      passwordframe.append(errmsg2);
    } //8자 이상인데 문자열 또는 숫자로만 된 경우

    else{ 
      strcnt=0;
      numcnt=0;
      errmsg2.textContent=''; //안의 내용 삭제 후 태그 지우기
      errmsg2.remove();
    } //비밀번호 형식에 맞는 경우

    
  }


  else{ //비밀번호가 8자 이상이 아닌경우
    errmsg2.textContent='비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    passwordframe.append(errmsg2);
  }


}

inputpass.addEventListener('focusout',passwordinput);



//비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않아요.” 에러 메세지를 보입니다.


const inputpassChk=document.querySelector('#passwordinputChk'); //비밀번호 확인 input 박스
const passwordframeChk=document.querySelector('#passwordframeChk'); //비밀번호 확인 input 박스 frame
const errmsgChk=document.createElement('p'); //에러메시지

function compPassword(e){
  if(e.target.value!=inputpass.value){
    errmsgChk.textContent='비밀번호가 일치하지 않아요.';
    passwordframeChk.append(errmsgChk);
  }

  else{
    errmsgChk.textContent='';
    errmsgChk.remove();
  }

}

inputpassChk.addEventListener('focusout',compPassword);



//회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지로 알립니다.
//이외의 유효한 회원가입 시도의 경우, “/folder”로 이동합니다.
//회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다.


const signupBtn=document.querySelector('.login');


//클릭을 위한 함수
function signUp() {

  emaininput({ target: { value: inputel.value } }); // 이메일 입력 함수 호출
  passwordinput({ target: { value: inputpass.value } }); // 비밀번호 입력 함수 호출
  compPassword({ target: { value: inputpassChk.value } }); // 비밀번호 확인 함수 호출

  
  if (errmsg.textContent=='' && errmsg2.textContent=='' && errmsgChk.textContent=='') {
    // 유효성 검사 통과
    location.href = "/folder.html"; //페이지 이동
  }

}

signupBtn.addEventListener('click',signUp);



//엔터키를 위한 함수
function enterKey(e) {

  if(e.key=='Enter'){
    emaininput({ target: { value: inputel.value } }); // 이메일 입력 함수 호출
    passwordinput({ target: { value: inputpass.value } }); // 비밀번호 입력 함수 호출
    compPassword({ target: { value: inputpassChk.value } }); // 비밀번호 확인 함수 호출
 
    if (errmsg.textContent=='' && errmsg2.textContent=='' && errmsgChk.textContent=='') {
      // 유효성 검사 통과
      location.href = "/folder.html"; //페이지 이동
    }
 
  }

}


inputel.addEventListener('keydown',enterKey);
inputpass.addEventListener('keydown',enterKey);
inputpassChk.addEventListener('keydown',enterKey);


