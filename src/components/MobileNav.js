import { DialogOverlay, Dialog, DialogContent } from '@reach/dialog';
import React from 'react';
import styled from 'styled-components';
import MenuDecoration from '../assets/images/mobile/menu-decoration.svg';
import { WEIGHTS } from '../utils/constants';

const MobileNav = ({ isOpen, onDismiss }) => (
  <MobileNavWrapper isOpen={isOpen} onDismiss={onDismiss}>
    <Content aria-label="Menu">
      <Nav>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Projects</NavLink>
        <ContactButton href="#">Contact</ContactButton>
      </Nav>
    </Content>
  </MobileNavWrapper>
);

const MobileNavWrapper = styled(DialogOverlay)`
  position: fixed;
  top: 82px;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: var(--color-neutral-white);
  position: relative;
  margin: 0 auto;
  width: calc(100% - 48px);
  height: fit-content;
  padding: 40px 0;

  &::before {
    position: absolute;
    content: '';
    background-image: url(${MenuDecoration});
    width: 24px;
    height: 24px;
    top: -23px;
    right: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled.a`
  color: var(--color-neutral-d-gray-blue);
`;

const ContactButton = styled(NavLink)`
  background: var(--color-primary-yellow);
  color: var(--color-neutral-sd-desat-blue);
  font-family: var(--font-heading);
  padding: 16px 32px;
  border-radius: 28px;
  text-transform: uppercase;
  font-weight: ${WEIGHTS.bold};
`;

export default MobileNav;
