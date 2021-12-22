import React from 'react'
import { getColorModeInitScriptElement } from '@xstyled/styled-components'

export function onRenderBody({ setPreBodyComponents }) {
  setPreBodyComponents([getColorModeInitScriptElement()])
}
