import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from '../src/api';
import Home from '../src/home';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenState, userInfoState, userState } from '../atom';

const validation = () => {
  //   const navigate = useNavigate();

  return (
    <>
      <Home />
    </>
  );
};

export default validation;
