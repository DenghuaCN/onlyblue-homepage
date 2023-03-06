import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Box, Spinner } from '@chakra-ui/react'
import { loadGLTFModel } from '../lib/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const urlGLB = '/valley.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)


      /**
       * AmbientLight 环境光
       * 环境光会均匀的照亮场景中的所有物体。环境光不能用来投射阴影，因为它没有方向。
       */
      // let hlight = new THREE.AmbientLight(0x000000, 2);
      // hlight.position.set(300, 0, -300);
      // scene.add(hlight);
      /**
       * DirectionalLight 平型光
       * 平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。
       * 常常用平行光来模拟太阳光的效果;
       * 太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的。
       *
       */
      // let directionLight = new THREE.DirectionalLight(0x000000, 1);
      // directionLight.position.set(500, 0, 0);
      // scene.add(directionLight);
      // let directionLight2 = new THREE.DirectionalLight(0x000000, 1);
      // directionLight2.position.set(0, 500, 0);
      // scene.add(directionLight2);
      // let directionLight3 = new THREE.DirectionalLight(0x000000, 1);
      // directionLight3.position.set(0, 0, 500);
      // scene.add(directionLight3);

      /**
       * PointLight 点光源
       * 从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光
       */
      let light1 = new THREE.PointLight(0x57BE85, 1); // 上方
      light1.position.set(0, 10, 0);
      scene.add(light1);
      let light2 = new THREE.PointLight(0xE5446D, 2.5); // 正面
      light2.position.set(100, 0, 0);
      scene.add(light2);
      let light3 = new THREE.PointLight(0x3AF4D5, 2.5); // 右侧
      light3.position.set(0, 100, -100);
      scene.add(light3);
      let light4 = new THREE.PointLight(0xff00ff, 2.5); // 后方
      light4.position.set(-500, 100, 0);
      scene.add(light4);
      let light5 = new THREE.PointLight(0xF78500, 3); // 左侧
      light5.position.set(-100, 0, 100);
      scene.add(light5);
      let light6 = new THREE.PointLight(0x41b6e6, 2); // 底部
      light6.position.set(0, -500, 0);
      scene.add(light6);


      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, urlGLB, {
        receiveShadow: false,
        castShadow: false,
      }).then((moduleData) => {
        animate();
        setLoading(false);

        console.log('loadGLTFModel', moduleData);
        moduleData.position.set(0, -3.5, 0);
        moduleData.scale.set(0.65,0.65,0.65);
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className="voxel-dog"
      m="auto"
      mt={['-10px', '-60px', '-120px']}
      mb={['-10px', '-140px', '-200px']}
      w={[280, 500, 640]}
      h={[280, 500, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size) / 2)"
        />
      )}
    </Box>
  )
}

export default VoxelDog
