import { VerificationScreen } from 'app/features/auth/verification-screen'
import Head from 'next/head'

import { NextPageWithLayout } from 'pages/_app'

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Verification</title>
      </Head>
      <VerificationScreen />
    </>
  )
}

// Page.getLayout = (page) => <YourLayout>{page}</YourLayout>



export default Page
