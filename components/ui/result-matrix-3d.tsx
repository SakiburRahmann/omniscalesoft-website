"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Points, PointMaterial, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function OutcomeVoxel({ position, speed }: { position: [number, number, number], speed: number }) {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame((state) => {
        ref.current.position.y += speed
        ref.current.rotation.x += speed * 2
        if (ref.current.position.y > 5) ref.current.position.y = -5
    })

    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="black" transparent opacity={0.4} />
        </mesh>
    )
}

function ResultMatrix() {
    const groupRef = useRef<THREE.Group>(null!)
    const meshRef = useRef<THREE.Mesh>(null!)
    const { mouse } = useThree()

    // Geometric states for morphing effect (simulated via rotation and scale shifts)
    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Complex autonomous rotation
        groupRef.current.rotation.y = t * 0.2
        groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.2

        // Pulsing scale as a state transition indicator
        const scale = 1 + Math.sin(t * 1.5) * 0.05
        meshRef.current.scale.setScalar(scale)

        // Interactive mouse parallax
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, mouse.x * 2, 0.1)
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, mouse.y * 2, 0.1)
    })

    const voxels = useMemo(() => {
        const temp = []
        for (let i = 0; i < 40; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 4,
                ] as [number, number, number],
                speed: Math.random() * 0.02 + 0.01
            })
        }
        return temp
    }, [])

    return (
        <group ref={groupRef}>
            {/* The Shifting Result Matrix Core */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2, 2]} />
                <meshStandardMaterial wireframe color="black" transparent opacity={0.15} />
            </mesh>

            <mesh scale={0.7}>
                <dodecahedronGeometry args={[2, 0]} />
                <meshStandardMaterial wireframe color="black" transparent opacity={0.3} />
            </mesh>

            {/* Core Achievement Node */}
            <mesh>
                <octahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="black" />
            </mesh>

            {/* Achievement Voxels (Successful Deliveries) */}
            {voxels.map((v, i) => (
                <OutcomeVoxel key={i} {...v} />
            ))}

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
        </group>
    )
}

export function ResultMatrix3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
                <ResultMatrix />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
