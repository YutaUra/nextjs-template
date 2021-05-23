import { Button, Link as ChakraLink } from '@chakra-ui/react'
import { Container } from '../../atoms/Container/Container'

export const CTA = (): JSX.Element => (
  <Container
    bottom="0"
    flexDirection="row"
    maxWidth="48rem"
    position="fixed"
    py={3}
    width="100%"
  >
    <ChakraLink flexGrow={1} href="https://chakra-ui.com" isExternal mx={2}>
      <Button colorScheme="green" variant="outline" width="100%">
        chakra-ui
      </Button>
    </ChakraLink>

    <ChakraLink
      flexGrow={3}
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
      isExternal
      mx={2}
    >
      <Button colorScheme="green" variant="solid" width="100%">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
)
