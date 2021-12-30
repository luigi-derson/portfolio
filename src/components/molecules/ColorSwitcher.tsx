import { useCallback } from 'react'

import { x, useColorMode } from '@xstyled/styled-components'
import { MoonIcon, SunIcon } from '@primer/styled-octicons'

const ColorSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDefaultMode = colorMode === 'default'
  const toggleColorMode = useCallback(() => {
    setColorMode(isDefaultMode ? 'dark' : 'default')
  }, [colorMode, setColorMode])
  const position = isDefaultMode ? { left: 0 } : { left: '50%' }

  return (
    <x.label
      htmlFor="toggleColorMode"
      border="thin"
      borderColor="borders"
      display="flex"
      position="relative"
    >
      <x.div
        position="absolute"
        w="40px"
        h={1}
        backgroundColor="borders"
        transition="left 0.3s ease"
        cursor="pointer"
        {...position}
      />
      <x.div p={1}>
        <MoonIcon size="medium" verticalAlign="middle" />
      </x.div>
      <x.div p={1}>
        <SunIcon size="medium" verticalAlign="middle" />
      </x.div>
      <x.input
        onChange={toggleColorMode}
        id="toggleColorMode"
        type="checkbox"
        display="none"
      />
    </x.label>
  )
}

export default ColorSwitcher
