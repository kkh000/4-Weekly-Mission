export const checkEmailRegex = (email: string): boolean => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return EMAIL_REGEX.test(email);
};

export const checkPassowrdRegex = (passowrd: string): boolean => {
  const PASSOWRD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return PASSOWRD_REGEX.test(passowrd);
};
