import { MESSAGE, TEST_AUTH } from './constants/SIGN.js';
import {
  emailInput,
  emailError,
  pwInput,
  pwToggle,
  applyError,
  resetError,
  validateEmail,
  validatePw,
  handleClickPwToggle,
} from './utils/auth.js';

const pwCheckInput = document.getElementById('password-check');
const pwCheckError = document.getElementById('password-check-error');
const pwCheckToggle = document.querySelector('.password-check-eye');
const signUpBtn = document.querySelector('#signup-btn');

const handlePasswordMatch = () => {
  if (pwCheckInput.value !== pwInput.value) applyError(pwCheckError, MESSAGE.NOT_MATCH_PASSWORD, pwCheckInput);
  else resetError(pwCheckError, pwCheckInput);
};

const handleDuplicateEmail = () => {
  if (emailInput.value === TEST_AUTH.EMAIL) applyError(emailError, MESSAGE.DUPLICATE_EMAIL, emailInput);
  else validateEmail();
};

//회원가입 로직 수정필요
const handleSignUp = () => {
  console.log('회원가입 성공');
};

emailInput.addEventListener('focusout', handleDuplicateEmail);

pwInput.addEventListener('focusout', validatePw);
pwCheckInput.addEventListener('focusout', handlePasswordMatch);
pwToggle.addEventListener('click', () => handleClickPwToggle(pwInput, pwToggle));
pwCheckToggle.addEventListener('click', () => handleClickPwToggle(pwCheckInput, pwCheckToggle));

signUpBtn.addEventListener('click', handleSignUp);
