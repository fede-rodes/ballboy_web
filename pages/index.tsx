import * as React from 'react'
// import Link from 'next/link'
import { NextPage } from 'next'
import { Flex, Box, Button, Text } from 'rebass';
import Spacer from '../components/common/Spacer';
import MainLayout from '../layouts/Main';

const IndexPage: NextPage = () => (
  <MainLayout title="Ballboy">
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: '100%' }}
    >
      <Box px="4">
        <img
          src="/static/logo.png"
          alt="placeholder"
          height="150"
        />
        <Text
          fontSize={[ 3, 4, 5 ]}
          style={{
            fontFamily: "'Knewave', cursive",
            textAlign: 'center',
          }}
        >
          Ballboy
        </Text>
      </Box>
      <Spacer size="XXXL" />
      <Flex px="4" flexWrap="wrap" flexDirection="column">
        <Button
          style={{
            background: 'tomato',
            color: 'black',
          }}
          onClick={() => { window.location.href = "https://ballboy.federodes.now.sh"; }}
        >
          Go to web app 👉
        </Button>
        <Spacer size="L" />
        <Button
          style={{
            background: 'tomato',
            color: 'black',
          }}
          onClick={() => { window.location.href = "https://play.google.com/apps/testing/app.ballboy.android"; }}
        >
          Try the Android app📱
        </Button>
      </Flex>
    </Flex>
  </MainLayout>
)

export default IndexPage
