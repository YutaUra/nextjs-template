import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({
  title = 'with-chakra-ui-typescript',
}: {
  title?: string
}): JSX.Element => (
  <Flex
    alignItems="center"
    bgClip="text"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    height="100vh"
    justifyContent="center"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)
