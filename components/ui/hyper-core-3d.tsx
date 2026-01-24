"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function GeometricHub() {
    const meshRef = useRef<THREE.Group>(null!)
    const voxelRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        meshRef.current.rotation.y = t * 0.2
        meshRef.current.rotation.x = t * 0.1
        voxelRef.current.rotation.y = -t * 0.15
        voxelRef.current.rotation.z = t * 0.05
    })

    // Procedural voxel positions
    const voxels = useMemo(() => {
        const temp = []
        for (let i = 0; i < 40; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 4,
                    (Math.random() - 0.5) * 4,
                    (Math.random() - 0.5) * 4,
                ] as [number, number, number],
                size: Math.random() * 0.1 + 0.05,
                speed: Math.random() * 0.5 + 0.5,
            })
        }
        return temp
    }, [])

    return (
        <group>
            {/* Central Hub Frames */}
            <group ref={meshRef}>
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.1} />
                </mesh>
                <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.2} />
                </mesh>
                <mesh rotation={[-Math.PI / 4, Math.PI / 2, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.4} />
                </mesh>
            </group>

            {/* Floating Data Voxels */}
            <group ref={voxelRef}>
                {voxels.map((v, i) => (
                    <Float key={i} speed={v.speed} rotationIntensity={2} floatIntensity={2}>
                        <mesh position={v.position}>
                            <boxGeometry args={[v.size, v.size, v.size]} />
                            <meshStandardMaterial color="black" />
                        </mesh>
                    </Float>
                ))}
            </group>

            {/* Atmospheric Particle Field (Drei Points for Type Safety) */}
            <AtmosphericParticles count={500} />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        </group>
    )
}

function AtmosphericParticles({ count = 500 }) {
    const pointsRef = useRef<THREE.Points>(null!)
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 15
            p[i * 3 + 1] = (Math.random() - 0.5) * 15
            p[i * 3 + 2] = (Math.random() - 0.5) * 15
        }
        return p
    }, [count])

    useFrame((state) => {
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
        pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02
    })

    return (
        <Points ref={pointsRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="black"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.3}
            />
        </Points>
    )
}

export function HyperCore3D() {
    return (
        <div className="w-full h-full min-h-[350px] relative">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                <GeometricHub />
                {/* Soft cinematic orbit, non-interactive */}
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
