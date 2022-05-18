import React, { useState, useEffect } from "react";

import { useRecoilValue } from "recoil";
import { userInfoState } from "../../front/src/atom";
import { Link } from "react-router-dom";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderLeftContainer,
} from "../src/styledCompo/HeaderStyle";
import Logo from "../src/components/Img/Logo.png";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        {/* <HeaderLeftContainer> */}
        <HeaderLogo src={Logo} />
        {/* </HeaderLeftContainer> */}
      </HeaderContainer>
    </>
  );
};

export default Header;
