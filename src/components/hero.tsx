import { FunctionComponent, memo } from 'react'

import { Centered } from '@/components/centered'
import { Links } from '@/components/links'

export const Hero: FunctionComponent = memo(() => (
  <Centered>
    <div className="z-10">
      <p className="text-7xl font-medium text-white subpixel-antialiased md:text-9xl">
        Daniel Bozinovski
      </p>
      <p className="text-base text-white subpixel-antialiased md:text-3xl">
        Software Engineer @ nib Group
      </p>
      <Links />
    </div>
  </Centered>
))
