import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
// import BurgerButton from '../BurgerButton';

//------------------------------------------------------------------------------
// STYLE:
//------------------------------------------------------------------------------
const Container = styled(Flex)`
  height: 60px;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.shade}; */
`;
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Header = () => (
  <Container
    alignItems="center"
    justifyContent="space-between"
  >
    {/* <Box px="4">
      <img
        src="/static/logo.png"
        alt="placeholder"
        height="35"
      />
    </Box> */}
    {/* <Box>
      <BurgerButton />
    </Box> */}
  </Container>
);

export default Header;
