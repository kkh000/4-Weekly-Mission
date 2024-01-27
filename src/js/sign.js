import { validateEmailInput } from './validate.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const eyeButton = document.querySelector('.eye-button');
const loginButton = document.querySelector('.sign-form-button');

const validEmail = 'test@codeit.com';
const validPassword = 'codeit101';

const addErrorMessage = (parentElement, errorMessage) => {
  const existErrorMessage = parentElement.querySelector('p');

  if (existErrorMessage) {
    existErrorMessage.innerText = errorMessage;
  } else {
    parentElement.classList.add('invalid-input-error');
    const errorTag = document.createElement('p');
    errorTag.innerText = errorMessage;
    parentElement.append(errorTag);
  }
};

const removeErrorMessage = parentElement => {
  parentElement.classList.remove('invalid-input-error');
  const errorTag = parentElement.querySelector('p');
  errorTag.remove();
};

emailInput.addEventListener('blur', e => {
  const signInputBox = e.target.parentElement;
  const emailValue = e.target.value;

  if (!emailValue) {
    addErrorMessage(signInputBox, '이메일을 입력해 주세요.');
    return;
  }

  if (validateEmailInput(emailValue)) {
    removeErrorMessage(signInputBox);
  } else {
    addErrorMessage(signInputBox, '올바른 이메일을 입력해 주세요.');
  }
});

passwordInput.addEventListener('blur', e => {
  const signInputPasswordBox = e.target.parentElement;
  const passwordValue = e.target.value;

  if (!passwordValue) {
    addErrorMessage(signInputPasswordBox, '비밀번호를 입력해 주세요.');
  } else {
    removeErrorMessage(signInputPasswordBox);
  }
});

loginButton.addEventListener('click', e => {
  e.preventDefault();
  if (emailInput.value === validEmail && passwordInput.value === validPassword) {
    window.location.href = '../pages/folder.html';
    return;
  }

  const emailBox = emailInput.parentElement;
  const passwordBox = passwordInput.parentElement;

  addErrorMessage(emailBox, '이메일을 확인해 주세요.');
  addErrorMessage(passwordBox, '비밀번호를 확인해 주세요.');
});

eyeButton.addEventListener('click', () => {
  const imgTag = eyeButton.querySelector('img');
  const isPasswordType = passwordInput.type === 'password';

  passwordInput.type = isPasswordType ? 'text' : 'password';
  imgTag.src = isPasswordType ? '../images/eye-on.svg' : '../images/eye-off.svg';
});
