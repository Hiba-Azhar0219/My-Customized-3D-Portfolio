import { useState, useRef } from 'react'
import { Float, useGLTF, useTexture } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ThreeLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/three-logo.glb')
  const texture = useTexture('textures/threeLogo.png')

  const threeLogoRef = useRef()
  const [hovered, setHovered] = useState(false)

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 1.5,
      })
      .to(threeLogoRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 3,
        stagger: {
          each: 0.25,
        },
      })
  })
  return (
    <Float floatIntensity={2}>
      <group {...props}>
        <mesh
          geometry={nodes.Object_5.geometry}
          ref={threeLogoRef}
          material={materials.material_0}
          rotation={[0.1, 0.5, 0]}
          scale={0.02}
          onPointerEnter={() => setHovered(true)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

useGLTF.preload('/models/three-logo.glb')
export default ThreeLogo
