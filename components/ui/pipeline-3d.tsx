"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function PipelineEngine() {
    const lanesRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        lanesRef.current.position.x = Math.sin(t * 0.2) * 1
    })

    // Procedural stream particles
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < 60; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 4,
                ] as [number, number, number],
                speed: Math.random() * 0.05 + 0.02,
                size: Math.random() * 0.08 + 0.02
            })
        }
        return temp
    }, [])

    return (
        <group>
            {/* Pipeline Assembly Lanes */}
            <group ref={lanesRef}>
                {[-1, 0, 1].map((y, i) => (
                    <mesh key={i} position={[0, y * 1.5, 0]}>
                        <boxGeometry args={[15, 0.05, 0.5]} />
                        <meshStandardMaterial color="black" transparent opacity={0.1} />
                    </mesh>
                ))}
            </group>

            {/* Moving Data Voxels (The Pipeline Flow) */}
            {particles.map((p, i) => (
                <VoxelStream key={i} {...p} />
            ))}

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
        </group>
    )
}

function VoxelStream({ position, speed, size }: { position: [number, number, number], speed: number, size: number }) {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame((state) => {
        ref.current.position.x += speed
        if (ref.current.position.x > 7) ref.current.position.x = -7
    })
    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[size, size, size]} />
            <meshStandardMaterial color="black" transparent opacity={0.4} />
        </mesh>
    )
}

export function Pipeline3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
                <PipelineEngine />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}
