import { Text } from '@chakra-ui/layout'
import { Container } from './Container'

export default {
  title: 'Atoms/Container',
}

export const showContainer = (): JSX.Element => (
  <Container>
    <Text>テキスト</Text>
  </Container>
)
