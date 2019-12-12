import React from 'react';
import Link from 'next/link'
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Spacer from '../../components/common/Spacer';

const Footer = () => (
  <footer>
    <Flex justifyContent="center">
      <Box p="2">
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
        {' '}&bull;{' '}
        <Link href="/terms">
          <a>Terms of Service</a>
        </Link>
      </Box>
    </Flex>
    <Spacer size="XXXL" />
    <Spacer size="XL" />
  </footer>
);

export default Footer;
