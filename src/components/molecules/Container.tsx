import { x, SystemProps } from '@xstyled/styled-components'

interface ContainerProps extends SystemProps {
  children: React.ReactNode
}

const Container = ({ children, ...extra }: ContainerProps) => {
  return (
    <x.div container mx="auto" px={4} {...extra}>
      {children}
    </x.div>
  )
}

export default Container
