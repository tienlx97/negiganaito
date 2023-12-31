import React, { forwardRef } from 'react'
import { LegacyHidden } from './legacy-hidden'

// const LegacyHidden = dynamic(
//   // @ts-ignore
//   () => import('./legacy-hidden').then(r => r.LegacyHidden),
//   {
//     ssr: false,
//   },
// )

import { makeStyles, mergeClasses } from '@griffel/react'

type BaseViewReactProps = {
  suppressHydrationWarning?: boolean
  hidden?: boolean
}

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 0,
  },

  hidden: {
    display: 'none',
  },
})

const BaseView = forwardRef<
  HTMLDivElement,
  BaseViewReactProps & React.JSX.IntrinsicElements['div']
>(({ children, hidden, suppressHydrationWarning, className, ...rest }, ref) => {
  const isHidden = hidden === true

  const classes = useStyles()

  return (
    <LegacyHidden
      htmlAttributes={{
        className: mergeClasses(
          classes.root,
          className,
          isHidden && classes.hidden,
        ),
        ...rest,
      }}
      mode={isHidden ? 'hidden' : 'visible'}
      ref={ref}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </LegacyHidden>
  )
})

BaseView.displayName = 'BaseView.react'

export default BaseView
