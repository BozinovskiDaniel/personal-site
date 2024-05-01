import { FunctionComponent, memo } from 'react'

import { Hero } from '@/components/hero'
import { Particles } from '@/components/particles'
import Head from 'next/head';

const Page: FunctionComponent = memo(() => (
  <div className="h-full bg-black">
    <Head>
                <link rel="icon" href="/mountain.png" type="image/x-icon" />
                {/* Other head elements */}
            </Head>
    <Hero />
    <Particles />
  </div>
))

export default Page
