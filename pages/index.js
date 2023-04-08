import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'
import { Img } from '@chakra-ui/react'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Front-end developer based in Shenzhen!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Deng Hua
          </Heading>
          <p>Front-End Engineer ( Photographer / ? )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Img
              src="/images/denghua.jpeg"
              alt="Profile image"
              width="100%"
              height="100%"
              borderRadius='full'
              objectFit='cover'
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Undefined
        </Paragraph>
        <Paragraph>
          匠人科技
        </Paragraph>
        <Paragraph>
          优乐学科技
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in 广西-柳州.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          南宁学院 - 工业设计
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Get to work...
        </BioSection>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          I love
        </Heading>
        <Paragraph>
          Art, Music, Playing
        </Paragraph>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/DenghuaCN" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @DenghuaCN
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={4} mb={8}>
          <GridItem
            href="/practice/poor-ui"
            title="poor-ui"
            thumbnail="https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/poor-ui/cover.png"
          >
          A simple UI on Vue3 and Vite
          </GridItem>

          <GridItem
            href="/practice/iphone-3d-website"
            title="iphone 3d Animation"
            thumbnail="https://denghua-blog.oss-cn-shenzhen.aliyuncs.com/homepage/iphone-3d-website/iphone3d-desktop.gif"
          >
          </GridItem>
        </SimpleGrid>


        <Box align="center" my={4}>
          <NextLink href="/practice" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My practice
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
