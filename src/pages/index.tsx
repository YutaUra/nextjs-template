import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import {
  Code,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { Container } from '../components/Container'
import { CTA } from '../components/CTA'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'

const Index = (): JSX.Element => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
        <Code>typescript</Code>.
      </Text>

      <List my={0} spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            flexGrow={1}
            href="https://chakra-ui.com"
            isExternal
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink flexGrow={1} href="https://nextjs.org" isExternal mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
