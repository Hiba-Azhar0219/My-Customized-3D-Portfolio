import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  // const controls = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },

  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: { value: 0, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },
  //   scale: {
  //     value: 0.1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // })
  return (
    <section className='min-h-screen  w-full flex flex-col relative border-2 border-blue-400'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi, I am Hiba<span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient'>
          Building Products & Brands
        </p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />} />
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <HackerRoom
            scale={sizes.deskScale}
            position={sizes.deskPosition}
            rotation={[0, -Math.PI, 0]}
          />
          {/* <group>
            <Target />
          </group> */}
          <ambientLight intensity={2} />
          <directionalLight position={(30, 30, 30)} intensity={0.5} />
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
