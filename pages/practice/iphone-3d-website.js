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

const cover1 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/iphone-3d-website/iphone-3d-1.png';
const cover2 = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/iphone-3d-website/iphone-3d-2.png';
const gif = 'https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/iphone-3d-website/iphone3d-desktop.gif';


const Work = () => (
  <Layout title="poor-ui">
    <Container>
      <Title navTitle="Practice" >
        iPhone 3D animation<Badge>2023</Badge>
      </Title>
      <P>
        使用 WebGi 与 GASP 制作的iPhone 3D模型动画
      </P>
      <List ml={4} my={8}>
        <ListItem>
          <Meta>Repo</Meta>
          <Link href="https://github.com/DenghuaCN/iphone-3d-website">github.com/DenghuaCN/iphone-3d-website<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Preview</Meta>
          <Link href="https://iphone-3d-website.netlify.app/">iphone-3d-website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, WebGi, GASP</span>
        </ListItem>
      </List>

      <Image borderRadius="lg" w="full" src={gif} alt="poor-ui" mb={8} />
      <Image borderRadius="lg" w="full" src={cover1} alt="poor-ui" mb={8} />
      <Image borderRadius="lg" w="full" src={cover2} alt="poor-ui" mb={8} />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
