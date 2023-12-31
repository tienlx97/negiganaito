import { makeStyles, mergeClasses } from '@griffel/react'
import { useCurrentDisplayMode } from '@negiganaito/hooks'

import React from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'
import { BaseGlimmer, BaseGlimmerProps } from './base-glimmer'

const useStyles = makeStyles({
  dark: {
    backgroundColor: 'var(--placeholder-icon)',
  },
  light: {
    backgroundColor: 'var(--wash)',
  },
})

type CometGlimmerProps = BaseGlimmerProps

export function CometGlimmer({ className, ...rest }: CometGlimmerProps) {
  const classes = useStyles()

  const mode = useCurrentDisplayMode()

  return jsx(
    BaseGlimmer,
    Object.assign(
      {
        className: mergeClasses(
          mode === 'dark' ? classes.dark : classes.light,
          className,
        ),
      },
      rest,
    ),
  )
}
