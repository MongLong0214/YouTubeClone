import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useAlert } from 'react-alert';

import Container from '@mui/material/Container';

import * as Api from '../../api';

import {
  GenderBtn,
  RegisterGlass,
  RegisterTitle,
  RegisterCircleRed1,
  RegisterCircleRed2,
  RegisterCircleGreen1,
  RegisterCircleGreen2,
} from '../../styledCompo/RegisterStyle';

const RegisterFrom = () => {
  const navigate = useNavigate();

  //useState로 name 상태를 생성함.
  const [name, setName] = useState('');
  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState('');
  //useState로 password 상태를 생성함.
  const [password, setPassword] = useState('');
  //useState로 confirmPassword 상태를 생성함.
  const [confirmPassword, setConfirmPassword] = useState('');
  // const Alert = useAlert();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await Api.post('users/register', {
  //       // email,
  //       // password,
  //       // name,
  //     });

  //     // 로그인 페이지로 이동함.

  //     navigate('/login');
  //     Alert.success('You have successfully registered as a member.');
  //   } catch (err) {
  //     Alert.error('This email is currently in use. Please enter another email.');
  //   }
  // };

  return (
    <div>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
          marginTop: 313,
          marginBottom: 313,
        }}
      >
        <RegisterGlass>
          <form
            // onSubmit={handleSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexFlow: 'column',
            }}
          >
            {' '}
            <RegisterTitle>Register</RegisterTitle>
          </form>
        </RegisterGlass>
      </Container>
    </div>
  );
};

export default RegisterFrom;
