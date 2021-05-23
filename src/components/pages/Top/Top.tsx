import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import {
  Code,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { Container } from '~/components/atoms/Container'
import { DarkModeSwitch } from '~/components/atoms/DarkModeSwitch'
import { Footer } from '~/components/atoms/Footer'
import { Main } from '~/components/atoms/Main'
import { CTA } from '~/components/molecule/CTA'
import { Hero } from '~/components/molecule/Hero'

export const Top = (): JSX.Element => (
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
      <Text>
        Next
        <span aria-label="heart" role="img">
          ❤️
        </span>
        Chakra
      </Text>
    </Footer>
    <CTA />
  </Container>
)
