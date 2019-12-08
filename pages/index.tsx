import * as React from 'react'
import Link from 'next/link'
import MainLayout from '../layouts/Main'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <MainLayout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </MainLayout>
  )
}

export default IndexPage
