import React, { useState } from 'react';
import '../style/Signin.css';
import { Link } from 'react-router-dom';
import logo from '../assets/sign/logo.svg';
import google from '../assets/sign/google.svg';
import kakao from '../assets/sign/kakao.svg';
import { emailRegex, passwordRegex } from './Regex';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailFoucs = () => {
    setEmailError('');
  };

  const handleEmailBlur = () => {
    if (email === '') {
      setEmailError('이메일을 입력해 주세요.');
      return;
    }
    if (!email.match(emailRegex)) {
      setEmailError('올바른 이메일 주소가 아닙니다.');
      return;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordFoucs = () => {
    setPasswordError('');
  };

  const handlePasswordBlur = () => {
    if (password === '') {
      setPasswordError('비밀번호를 입력해 주세요.');
      return;
    }
    if (!password.match(passwordRegex)) {
      setPasswordError('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    }
  };

  return (
    <div className='SigninContainer'>
      <div className='LogoContent'>
        <Link to='/' className='LogoLink'>
          <img src={logo} alt='logo img' />
        </Link>
        <p className='LogoMessage'>
          회원이 아니신가요?
          <Link to='/signup' className='LogoMessageLink'>
            회원 가입하기
          </Link>
        </p>
      </div>
      <div className='SignContent'>
        <form className='SignForm'>
          <div className='SignInputs'>
            <div className='SignInputContent'>
              <label htmlFor='email'>이메일</label>
              <input
                id='email'
                className={`EmailInput ${emailError && 'InputError'}`}
                type='text'
                placeholder='codeit@codeit.com'
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onFocus={handleEmailFoucs}
              />
              {emailError && (
                <span className='ErrorEmailMessage'>{emailError}</span>
              )}
            </div>
            <div className='SignInputContent'>
              <label htmlFor='password'>비밀번호</label>
              <div className='SignPasswordContent'>
                <input
                  id='password'
                  className={`PasswordInput ${passwordError && 'InputError'}`}
                  type='password'
                  placeholder='‧ ‧ ‧ ‧ ‧ ‧ ‧ ‧'
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  onFocus={handlePasswordFoucs}
                />
                <button className='PasswordOnOffToggle' type='button'></button>
              </div>
              {passwordError && (
                <span className='ErrorPasswordMessage'>{passwordError}</span>
              )}
            </div>
          </div>
          <button className='SignBtn' type='submit'>
            로그인
          </button>
        </form>
        <div className='SnsContent'>
          <span className='SnsText'>소셜 로그인</span>
          <div className='SnsLinks'>
            <Link to='https://www.google.com/' className='SnsLink'>
              <img src={google} alt='google img' />
            </Link>
            <Link to='https://www.kakaocorp.com/page/' className='SnsLink'>
              <img src={kakao} alt='kakao img' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;