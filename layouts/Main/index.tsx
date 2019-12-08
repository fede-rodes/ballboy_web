import React from 'react';
import Head from 'next/head';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Container = styled(Flex)`
  min-height: 100vh;
  width: 100%;
`;

type Props = {
  title?: string
}

const Main: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <Container flexDirection="column">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Box flex="1" bg="concrete">
      {children}
    </Box>
    <Footer />
  </Container>
);

export default Main;
