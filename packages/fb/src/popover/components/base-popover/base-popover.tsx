import { mergeClasses } from '@fluentui/react-components'
import React, { ReactNode, forwardRef } from 'react'
//@ts-ignore
import { jsx } from 'react/jsx-runtime'
import { useStyles } from './styles'

type BasePopoverProps = {
  arrowImpl?: any
  children?: ReactNode
  label: string
  arrowAlignment?: string
  labelledby?: string
  testid?: string
} & React.JSX.IntrinsicElements['div']

const BasePopover = forwardRef<HTMLDivElement, BasePopoverProps>(
  (
    {
      label,
      arrowAlignment,
      arrowImpl,
      children,
      className,
      role = 'dialog',
      id,
      labelledby,
      ...rest
    },
    ref,
  ) => {
    const classes = useStyles()

    return arrowImpl
      ? jsx(
          arrowImpl,
          Object.assign(
            {
              arrowAlignment,
              id,
              label,
              labelledby,
              ref,
              role,
              testid: undefined,
              className,
            },
            rest,
          ),
        )
      : jsx(
          'div',
          Object.assign(
            {
              'aria-label': label,
              'aria-labelledby': labelledby,
              className: mergeClasses(classes.root, className),
              id,
              ref,
              role,
            },
            rest,
          ),
        )
  },
)

export default BasePopover