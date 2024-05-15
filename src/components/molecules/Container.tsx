import { x, SystemProps } from '@xstyled/styled-components'

interface ContainerProps extends SystemProps {
  children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  const { children, ...extra } = props
  return (
    <x.div container mx="auto" px={4} {...extra}>
      {children}
    </x.div>
  )
}
