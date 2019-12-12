import * as React from 'react'
// import Link from 'next/link'
import { NextPage } from 'next'
import { Flex, Box, Button, Text } from 'rebass';
import styled from 'styled-components';
import Spacer from '../components/common/Spacer';
import MainLayout from '../layouts/Main';

const Brand = styled(Text)`
  font-family: 'Knewave', cursive;
  text-align: center;
`;

const style = {
  background: 'darkorchid',
  color: 'white',
  cursor: 'pointer',
};

const IndexPage: NextPage = () => (
  <MainLayout title="Ballboy">
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex="1"
    >
      <Box px="4">
        <img
          src="/static/logo.png"
          alt="placeholder"
          height="150"
          style={{
            display: 'block',
            margin: '0 auto',
            paddingRight: '14px',
          }}
        />
        <Brand fontSize={5}>
          Ballboy
        </Brand>
        <Spacer size="XXXL" />
        <Flex px="4" flexWrap="wrap" flexDirection="column">
          <Button
            style={style}
            onClick={() => { window.location.href = "https://app.ballboy.app"; }}
          >
            Go to web app 👉
          </Button>
          <Spacer size="L" />
          <Button
            style={style}
            onClick={() => { window.location.href = "https://play.google.com/apps/testing/app.ballboy.android"; }}
          >
            Try the Android app📱
          </Button>
        </Flex>
      </Box>
    </Flex>
  </MainLayout>
)

export default IndexPage
