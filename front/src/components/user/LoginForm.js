import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { validateEmail } from '../../helpers/index';

import {
  LoginGlass,
  TitleText,
  ForgetPw,
  SignPWContainer,
  SignBtn,
  CatchBack,
  CaloriesBack,
  GitHubBtn,
  Separator,
} from '../../styledCompo/LoginStyle';

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 400,
          marginBottom: 400,
        }}
      >
        <LoginGlass>
          <form
            action="/"
            // onSubmit={handleSubmit}
            style={{
              marginTop: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexFlow: 'column',
            }}
          >
            <TitleText>Login</TitleText>
            <SignBtn sx={{ fontSize: 16 }} color="success" onClick={() => navigate('/register')}>
              Sign UP
            </SignBtn>
          </form>
        </LoginGlass>
      </Container>
    </div>
  );
};

export default LoginForm;
