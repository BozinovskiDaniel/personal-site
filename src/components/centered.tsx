import { FunctionComponent, HTMLAttributes, memo } from 'react'

export const Centered: FunctionComponent<HTMLAttributes<HTMLDivElement>> = memo(
  ({ children, className }) => (
    <div
      className={`flex size-full items-center justify-center text-center ${className}`}
    >
      {children}
    </div>
  )
)
