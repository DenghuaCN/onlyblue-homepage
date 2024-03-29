import { Container, Box, Heading, SimpleGrid, Divider, Image } from "@chakra-ui/react";
import Section from '../components/section';
import { WorkGridItem, CarouselWorkGridItem } from "../components/grid-item";

import {
  live1,
  live2,
  live3,
  live4,
  hjkUpgrade,
  hjkTemplate,
  hjkTemplatePreview,
  hjkTips,
  hjkConfigCenter,
  mini1,
  mini2,
  mini3,
  mini4,
  mini5,
  mini6,
  mini7
} from '../components/workImgs/hj';

import {
  ai1,
  ai2,
  ai3,
  ai4,
  cover1,
  cover2,
  cover3,
  cover4,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
} from '../components/workImgs/ddkt';

import {
  kt1,
  kt2,
  kt3,
  kt4,
  kt5,
  kt6,
} from '../components/workImgs/gientech';


const Works = () => {

  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        <Section delay={0.1}>
          Works
        </Section>
        <Divider my={6} />
      </Heading>

      {/* 中电 */}      <Box>
        <Section delay={0.2}>
          <Heading as="h3" fontSize={14} mb={4}>
            中电金信
          </Heading>
        </Section>

        <Section delay={0.3}>
          <SimpleGrid columns={[1,1,2]} gap={6}>
            {/* 科探管理后台 */}
            <Section>
              <CarouselWorkGridItem
                thumbnails={[
                  kt1,
                  kt2,
                  kt3,
                ]}
              >
              科探管理后台
              </CarouselWorkGridItem>
            </Section>

            {/* 科探评审C端 */}
            <Section>
              <CarouselWorkGridItem
                delay={2000}
                thumbnails={[
                  kt4,
                  kt5,
                  kt6,
                ]}
              >
              科探评审C端
              </CarouselWorkGridItem>
            </Section>

          </SimpleGrid>
        </Section>
      </Box>


      {/* 匠人 */}
      <Box>
        <Section delay={0.2}>
          <Heading as="h3" fontSize={14} mb={4}>
            匠人科技
          </Heading>
        </Section>

        <Section delay={0.3}>
          <SimpleGrid columns={[1,1,2]} gap={6}>
            {/* live控制台 */}
            <Section>
              <CarouselWorkGridItem
                thumbnails={[
                  live1,
                  live2,
                  live3,
                  live4,
                ]}
              >
              直播管理后台
              </CarouselWorkGridItem>
            </Section>

            {/* h5配置后台 */}
            <Section>
              <CarouselWorkGridItem
                delay={2000}
                thumbnails={[
                  hjkUpgrade,
                  hjkTemplate,
                  hjkTemplatePreview,
                  hjkTips,
                  hjkConfigCenter
                ]}
              >
              视听H5配置中心
              </CarouselWorkGridItem>
            </Section>

            {/* 直播小程序 */}
            <Section>
              <CarouselWorkGridItem
                delay={2500}
                thumbnails={[
                  mini1,
                  mini2,
                  mini3,
                  mini4,
                  mini5,
                  mini6,
                  mini7,
                ]}
              >
               直播小程序
              </CarouselWorkGridItem>
            </Section>

          </SimpleGrid>
        </Section>
      </Box>

      <Divider my={6} />

      {/* 优乐学 */}
      <Box>
        <Section delay={0.2}>
          <Heading as="h3" fontSize={14} mb={4}>
            优乐学科技
          </Heading>
        </Section>

        <Section delay={0.3}>
          <SimpleGrid columns={[1,1,2]} gap={6}>

            {/* 叮咚课堂AI+ */}
            <Section>
              <CarouselWorkGridItem
                delay={3000}
                thumbnails={[
                  ai1,
                  ai2,
                  ai3,
                  ai4,
                ]}
              >
              叮咚课堂AI+
              </CarouselWorkGridItem>
            </Section>

            {/* 叮咚课堂售课小程序 */}
            <Section>
              <CarouselWorkGridItem
                delay={3000}
                thumbnails={[
                  cover1,
                  cover2,
                  cover3,
                  cover4,
                ]}
              >
              365+商城
              </CarouselWorkGridItem>
            </Section>

            {/* 叮咚课堂增长小组 */}
            <Section>
              <CarouselWorkGridItem
                delay={2500}
                thumbnails={[
                  example1,
                  example2,
                  example3,
                  example4,
                  example5,
                  example6,
                  example7,
                  example8,
                ]}
              >
              增长活动
              </CarouselWorkGridItem>
            </Section>

          </SimpleGrid>
        </Section>
      </Box>

      <Divider my={6} />

      {/* <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}

    </Container>
  )
}

export default Works;