import React from "react";

import { HeaderContainer } from "./HeaderContainer/HeaderContainer";
import { ImagesContainer } from "./ImagesContainer/ImagesContainer";
import { BasketContainer } from "./BasketContainer/BasketContainer";
import { LogoContainer } from './LogoContainer/LogoContainer';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer />
      <ImagesContainer />
      <BasketContainer />
    </HeaderContainer>
  );
};