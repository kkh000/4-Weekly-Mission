import { ERROR_MESSAGES } from "./constants/VALIDATION.js";
import {
  emailError,
  emailInput,
  pwInput,
  pwConfirmInput,
  form,
  pwToggle,
  pwConfirmToggle,
  validateEmail,
  validatePw,
  validatePwConfirm,
  eyeToggle,
  showError,
  isValidFormat,
  checkLoginStatus,
} from "./utils/auth.js";
import { emailCheckInquire, signUpInquire } from "./services/authAPI.js";

checkLoginStatus();

const validateEmailDuplication = async () => {
  const userData = {
    email: emailInput.value.trim(),
  };
  try {
    const result = await emailCheckInquire(userData);
    if (result.status === 409) {
      throw new Error("이메일 중복");
    }
    return result.ok;
  } catch (e) {
    console.error(e);
    showError(emailError, emailInput, ERROR_MESSAGES.email_duplicate);
  }
};

const handleSignUp = async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = pwInput.value.trim();
  const pwConfirm = pwConfirmInput.value.trim();

  const isEmailDuplicate = await validateEmailDuplication();
  const isEmailValid = email !== "" && isValidFormat("email", email);
  const isPwValid = password !== "" && isValidFormat("pw", password);
  const isPwConfirmValid = pwConfirm !== "" && password === pwConfirm;

  const userData = {
    email,
    password,
  };
  const isAllValid =
    isEmailDuplicate && isEmailValid && isPwValid && isPwConfirmValid;

  if (isAllValid) {
    try {
      const result = await signUpInquire(userData);
      if (result.ok) {
        alert("회원가입 성공!");
        window.location.href = "folder.html";
      }
    } catch (e) {
      console.error(e);
    }
  }
};

const handleEmailInput = () => {
  validateEmail();
  validateEmailDuplication();
};

emailInput.addEventListener("focusout", handleEmailInput);
pwInput.addEventListener("focusout", validatePw);
pwConfirmInput.addEventListener("focusout", validatePwConfirm);
form.addEventListener("submit", handleSignUp);
pwToggle.addEventListener("click", () => eyeToggle(pwInput, pwToggle));
pwConfirmToggle.addEventListener("click", () =>
  eyeToggle(pwConfirmInput, pwConfirmToggle)
);