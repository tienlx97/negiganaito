import React from 'react'
// @ts-ignore
import { jsx, jsxs } from 'react/jsx-runtime'

/* eslint-disable camelcase */
import BaseContextualLayerAnchorRootContext from '@fb/context/base-contextual-layer-anchor-root-context'
import useStable from '@fb/hooks/useStable'
import useUnsafeRef_DEPRECATED from '@fb/hooks/useUnsafeRef_DEPRECATED'
import { BaseDOMContainer } from '@fb/portal/components'
import executionEnvironment from '@fb/utils/execution-environment'

type BaseContextualLayerAnchorRootProps = {
  children?: any
}

function BaseContextualLayerAnchorRoot({
  children,
}: BaseContextualLayerAnchorRootProps) {
  const el = useStable(function () {
    return executionEnvironment.canUseDOM ? document.createElement('div') : null
  })

  const baseContextualLayerAnchorRootValue = useUnsafeRef_DEPRECATED(el)

  return jsxs(React.Fragment, {
    children: [
      jsx(BaseContextualLayerAnchorRootContext.Provider, {
        value: baseContextualLayerAnchorRootValue,
        children,
      }),
      jsx(BaseDOMContainer, {
        node: el,
      }),
    ],
  })
}

export default BaseContextualLayerAnchorRoot
