import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem, PracticeGridItem } from "../components/grid-item";


const Practice = () => (
  <Layout title="practice">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Practice
      </Heading>

      <Section delay={0.1}>
        <PracticeGridItem
          id="poor-ui"
          title="A simple UI on Vue3 and Vite"
          thumbnail="https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-ui/cover.png" >
        </PracticeGridItem>
      </Section>


      <Section delay={0.2}>
        <PracticeGridItem
          id="iphone-3d-website"
          title="iPhone 3D module"
          thumbnail="https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/iphone-3d-website/iphone3d-desktop.gif"
        >
        </PracticeGridItem>
      </Section>

      {/* poor-notion */}
      <Section delay={0.2}>
        <PracticeGridItem
          id="poor-notion"
          title="Poor Notion"
          thumbnail="https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/operation.gif"
        >
        </PracticeGridItem>
      </Section>

    </Container>
  </Layout>
)

export default Practice;
export { getServerSideProps } from '../components/chakra'
