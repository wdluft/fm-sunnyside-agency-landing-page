import React, { useState } from 'react';
import styled from 'styled-components';
import MobileNav from './MobileNav';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src="../assets/logo.svg" alt="Home sunnyside logo" />
      </LogoWrapper>
      <DesktopNav>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </DesktopNav>

      <MobileButton>
        <img src="../assets/icon-hamburger.svg" alt="" />
      </MobileButton>

      <MobileNav
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div``;

const DesktopNav = styled.nav`
  display: flex;
`;

const MobileButton = styled.div``;

export default Header;
