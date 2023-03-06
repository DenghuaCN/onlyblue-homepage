import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem, PracticeGridItem } from "../components/grid-item";

// poor-ui
import poorUICover from '../public/images/practice/poor-ui/cover.png';

const Practice = () => (
  <Layout title="practice">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Practice
      </Heading>

      <Section delay={0.1}>
        <PracticeGridItem
          id="poor-ui"
          title=""
          thumbnail={poorUICover} >
          A simple UI on Vue3 and Vite
        </PracticeGridItem>
      </Section>

      {/* <Section delay={0.1}>
        <SimpleGrid column={[1,2,2]} gap={6}>
          <GridItem
            title=""
            thumbnail=""
            href=""
          />
        </SimpleGrid>
      </Section> */}

    </Container>
  </Layout>
)

export default Practice;
export { getServerSideProps } from '../components/chakra'
