import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const gif = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/operation.gif';
const image1 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/1.png';
const image2 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/2.png';
const image3 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/3.png';
const image4 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/3-1.png';
const image5 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/4.png';
const image6 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/5.png';
const image7 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-notion/6.png';


const Work = () => (
  <Layout title="poor-ui">
    <Container>
      <Title navTitle="Practice" >
        Poor Notion <Badge>2023</Badge>
      </Title>
      <P>
        一个简易的类Notion笔记应用，可以创建你的公开/私人笔记，包含插入图片，回收站等功能。并可发布笔记并预览。
      </P>
      <List ml={4} my={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://poor-notion.netlify.app/">
            https://poor-notion.netlify.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser，Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next13, TypeScript, Clerk, Convex, Tailwindcss</span>
        </ListItem>
      </List>

      <Image borderRadius="lg" w="full" src={gif} alt="poor-notion" mb={8} />
      <Image borderRadius="lg" w="full" src={image1} alt="poor-notion" mb={8} />
      <Image borderRadius="lg" w="full" src={image2} alt="poor-notion" mb={8} />
      <Image borderRadius="lg" w="full" src={image3} alt="poor-notion" mb={8} />
      <Image borderRadius="lg" w="full" src={image4} alt="poor-notion" mb={8} />
      <Image borderRadius="lg" w="full" src={image5} alt="poor-notion" mb={8} />

      {/* Mobile */}
      <SimpleGrid columns={[1,1,2]} gap={10}>
        <Image borderRadius="lg" w="100%" src={image6} alt="poor-notion" mb={8} />
        <Image borderRadius="lg" w="100%" src={image7} alt="poor-notion" mb={8} />
      </SimpleGrid>
    </Container>
  </Layout>
)


export default Work
export { getServerSideProps } from '../../components/chakra'
