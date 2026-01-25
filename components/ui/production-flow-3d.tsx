"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Points, PointMaterial, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function DataVoxel({ position, speed, color }: { position: [number, number, number], speed: number, color: string }) {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame((state) => {
        ref.current.position.z += speed
        if (ref.current.position.z > 5) ref.current.position.z = -5
    })

    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshStandardMaterial color={color} transparent opacity={0.6} />
        </mesh>
    )
}

function ProcessEngine() {
    const groupRef = useRef<THREE.Group>(null!)
    const { mouse } = useThree()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Interactive Tilt
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.4, 0.1)
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.4, 0.1)

        // Rotate child rings
        groupRef.current.children.forEach((child, i) => {
            if (child.type === "Group") {
                child.rotation.z = t * (i + 1) * 0.2
            }
        })
    })

    const voxels = useMemo(() => {
        const temp = []
        for (let i = 0; i < 50; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 4,
                    (Math.random() - 0.5) * 4,
                    (Math.random() - 0.5) * 10,
                ] as [number, number, number],
                speed: Math.random() * 0.05 + 0.02,
                color: i % 2 === 0 ? "black" : "#64748b"
            })
        }
        return temp
    }, [])

    return (
        <group ref={groupRef}>
            {/* The Process Pipeline Rings */}
            {[1.5, 2.5, 3.5].map((radius, i) => (
                <group key={i}>
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[radius, 0.02, 16, 100]} />
                        <meshStandardMaterial color="black" transparent opacity={0.1} />
                    </mesh>
                    {/* Ring Nodes */}
                    <mesh position={[radius, 0, 0]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshStandardMaterial color="black" />
                    </mesh>
                </group>
            ))}

            {/* Core Processing Unit */}
            <mesh>
                <octahedronGeometry args={[0.6, 0]} />
                <MeshDistortMaterial color="black" speed={2} distort={0.3} transparent opacity={0.4} />
            </mesh>

            {/* Data Stream */}
            {voxels.map((v, i) => (
                <DataVoxel key={i} {...v} />
            ))}

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
        </group>
    )
}

export function ProductionFlow3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
                <ProcessEngine />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}
