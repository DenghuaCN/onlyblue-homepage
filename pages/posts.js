import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


const Posts = () => (
  <Layout title="Posts">

    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Posts
      </Heading>

      {/* <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={}
            href="https://www.google.com"
          />
        </SimpleGrid>
      </Section> */}

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
