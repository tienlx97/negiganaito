import React, { ReactNode, useMemo } from 'react'
import { cometKeys } from '../util'
import { CometComponentWithKeyCommands } from './comet-component-with-key-commands'

type CometHideLayerOnEscapeProps = {
  children?: ReactNode
  debugName?: string
  onHide: (props: any) => any
}

export default function CometHideLayerOnEscape({
  debugName = 'ModalLayer',
  onHide,
  children,
}: CometHideLayerOnEscapeProps) {
  // const commandConfigs = useMemo(() => {
  //   return [
  //     {
  //       command: {
  //         key: cometKeys.ESCAPE,
  //       },
  //       description: 'Close', // h._('Close'),
  //       handler: onHide,
  //       triggerFromInputs: true,
  //       triggerOnRepeats: false,
  //     },
  //   ]
  // }, [onHide])

  const commandConfigs = useMemo(() => {
    return [
      {
        command: {
          key: cometKeys.ESCAPE,
        },
        description: 'Close', // h._('Close'),
        handler: onHide,
        triggerFromInputs: true,
        triggerOnRepeats: false,
      },
    ]
  }, [])

  return (
    <CometComponentWithKeyCommands
      commandConfigs={commandConfigs}
      debugName={debugName}
      isWrapperFocusable
    >
      {children}
    </CometComponentWithKeyCommands>
  )
}
