import type { FlexProps } from '@chakra-ui/react'
import { Flex, useColorMode } from '@chakra-ui/react'

export const Container = (props: FlexProps): JSX.Element => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      alignItems="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      direction="column"
      justifyContent="flex-start"
      {...props}
    />
  )
}
