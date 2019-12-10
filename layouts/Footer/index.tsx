import React from 'react';
import Link from 'next/link'
import { Flex, Box } from 'rebass';
import styled from 'styled-components';

const Container = styled(Flex)`
  /* border-top: 1px solid ${({ theme }) => theme.colors.shade}; */
`;

const Footer = () => (
  <Container
    justifyContent="center"
    bg="dusk"
  >
    <Box p="2">
      <Link href="/">
        <a>Home</a>
      </Link>
      {' '}&bull;{' '}
      <Link href="/privacy">
        <a>Privacy Policy</a>
      </Link>
      {' '}&bull;{' '}
      <Link href="/terms">
        <a>Terms of Service</a>
      </Link>
    </Box>
  </Container>
);

export default Footer;
