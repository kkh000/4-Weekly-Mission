import validateEmail from '../utils/emailValidate.js';
import validatePassword from '../utils/passwordValidate.js';
import postFetcher from '../utils/postRequest.js';

//회원가입 실행 시 에러 메시지 호출 또는 페이지 이동
async function signupCheck() {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;
  const passwordInput = document.getElementById('password');
  const passwordCheckInput = document.getElementById('passwordCheck');
  const passwordValue = passwordInput.value;
  const passwordCheckValue = passwordCheckInput.value;
  const isEmail = validateEmail(emailInput.value);
  const isPassword = validatePassword(passwordInput.value);
  const passwordCheckError = document.getElementById('passwordCheckError');

  //유효한 회원가입 형식 POST request 보내기
  try {
    const emailCheckResult = await postFetcher('api/check-email', 'email: emailValue');
    if (emailCheckResult.status === 409) {
      emailInput.classList.add('invalid');
      emailError.innerHTML = '중복된 이메일 입니다.';
      console.error('Error: ' + emailCheckResult.status);
    } else {
      const result = await postFetcher(
        'api/sign-up',
        'email: emailValue, password: passwordValue, passwordCheck: passwordCheckValue',
      );
      if (!isEmail) {
        emailInput.classList.add('invalid');
        emailError.innerHTML = '이메일을 확인해 주세요.';
      } else if (!isPassword) {
        passwordInput.classList.add('invalid');
        passwordError.innerHTML = '비밀번호를 확인해 주세요.';
      } else if (passwordValue !== passwordCheckValue) {
        passwordCheckInput.classList.add('invalid');
        passwordCheckError.innerHTML = '비밀번호가 일치하지 않아요.';
      } else if (!result.ok) {
        console.error('회원가입에 실패했습니다.');
      } else {
        window.location.href = '../pages/folder.html';
      }
    }
  } catch (error) {
    console.error(error);
  }
}
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
  signupCheck();
});

export default signupCheck;
