import styled from 'styled-components';
import { LoginGlass, TitleText } from './LoginStyle';
import { Button } from '@mui/material';

//회원가입 타이틀
export const RegisterTitle = styled(TitleText)`
  padding-top: 130px;
  padding-bottom: 130px;
  margin-bottom: 0;
  font-size: 20px;
  color: black;
`;

// 회원가입 글래스
export const RegisterGlass = styled(LoginGlass)`
  height: 600px;
  justify-content: flex-start;
`;
