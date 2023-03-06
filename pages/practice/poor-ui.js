import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="poor-ui">
    <Container>
      <Title navTitle="Practice" >
        Poor-ui <Badge>2022</Badge>
      </Title>
      <P>
        基于 Vue3 与 TypeScript 的组件库， 代码可读性高且源代码简洁，拥有完整的单元测试。
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://denghuacn.github.io/poor-ui/#/">
          https://denghuacn.github.io/poor-ui <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vue3, TypeScript, Vite, Vitest</span>
        </ListItem>
      </List>

      <Image borderRadius="lg" w="full" src="/images/practice/poor-ui/cover.png" alt="poor-ui" mb={4} />
      <Image borderRadius="lg" w="full" src="/images/practice/poor-ui/example1.png" alt="poor-ui" mb={4} />
      <Image borderRadius="lg" w="full" src="/images/practice/poor-ui/example2.png" alt="poor-ui" mb={4} />
      <Image borderRadius="lg" w="full" src="/images/practice/poor-ui/example3.png" alt="poor-ui" mb={4} />
      <Image borderRadius="lg" w="full" src="/images/practice/poor-ui/example4.png" alt="poor-ui" mb={4} />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
