import * as React from 'react'
// import Link from 'next/link'
import { NextPage } from 'next'
import { Flex, Box, Button } from 'rebass';
import MainLayout from '../layouts/Main'

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
      </Box>
      <Flex px="4">
        <Button
          variant='primary'
          mr={2}
          style={{
            background: 'tomato',
            color: 'black',
          }}
          onClick={() => { window.location.href = "https://ballboy.federodes.now.sh"; }}
        >
          Go to web app 👉
        </Button>

        <Button
          variant='primary'
          mr={2}
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
