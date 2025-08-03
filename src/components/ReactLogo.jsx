import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react_logo.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.5} {...props}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0.1, 0.1, -Math.PI / 2]}
          scale={[0.29, 0.29, 0.4]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react_logo.glb')
export default ReactLogo
