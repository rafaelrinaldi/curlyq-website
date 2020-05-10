import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

const App: FunctionComponent<AppPropsType> = ({ Component, ...props }) => (
  <>
    <NextSeo
      title='curlyq'
      description='Convert straight quotes to smart quotes'
      openGraph={{
        url: 'https://rinaldi.io',
        site_name: 'curlyq'
      }}
      twitter={{
        handle: '@rafaelrinaldi'
      }}
    />
    <Head>
      <title>curlyq</title>
    </Head>
    <Component {...props} />
  </>
)

export default App
