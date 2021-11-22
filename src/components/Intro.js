import React from 'react';
import styled from 'styled-components';
import BgImageMobile from '../assets/images/mobile/image-header.jpg';
import BgImageDesktop from '../assets/images/desktop/image-header.jpg';
import { QUERIES } from '../utils/constants';

const Intro = () => (
  <IntroWrapper>
    <h1>We are creatives</h1>
  </IntroWrapper>
);

const IntroWrapper = styled.section`
  background-image: url(${BgImageMobile});

  height: 150vh;

  @media ${QUERIES.tabletAndUp} {
    background-image: url(${BgImageDesktop});
  }
`;

export default Intro;
