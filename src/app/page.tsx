import { FunctionComponent, memo } from 'react'

import { Hero } from '@/components/hero'
import { Particles } from '@/components/particles'

const Page: FunctionComponent = memo(() => (
  <div className="h-full bg-black">
    <Hero />
    <Particles />
  </div>
))

export default Page
