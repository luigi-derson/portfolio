import { x } from '@xstyled/styled-components'
import { MoonIcon, SunIcon } from '@primer/styled-octicons'

interface ColorSwitcherProps {
  onChange: () => void
  colorMode: string | null
}

const ColorSwitcher = ({ onChange, colorMode }: ColorSwitcherProps) => {
  const position = colorMode === 'default' ? { left: 0 } : { left: '50%' }
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
        onChange={onChange}
        id="toggleColorMode"
        type="checkbox"
        display="none"
      />
    </x.label>
  )
}

export default ColorSwitcher
