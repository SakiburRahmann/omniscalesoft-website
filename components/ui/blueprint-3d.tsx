"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Line } from "@react-three/drei"
import * as THREE from "three"

function BlueprintEngine() {
    const groupRef = useRef<THREE.Group>(null!)
    const gridRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        groupRef.current.rotation.y = t * 0.1
        gridRef.current.rotation.x = Math.sin(t * 0.5) * 0.1
    })

    // Procedural node positions
    const nodes = useMemo(() => {
        const temp = []
        for (let i = 0; i < 15; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 4,
                    (Math.random() - 0.5) * 2,
                ] as [number, number, number],
                scale: Math.random() * 0.2 + 0.1,
            })
        }
        return temp
    }, [])

    return (
        <group>
            {/* Schematic Grid Planes */}
            <group ref={gridRef}>
                <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10, 10, 10]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.05} />
                </mesh>
                <mesh position={[0, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10, 10, 10]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.05} />
                </mesh>
            </group>

            {/* Rotating Blueprint Hub */}
            <group ref={groupRef}>
                {nodes.map((node, i) => (
                    <group key={i} position={node.position}>
                        <mesh>
                            <sphereGeometry args={[node.scale, 8, 8]} />
                            <meshStandardMaterial wireframe color="black" transparent opacity={0.4} />
                        </mesh>
                        {/* Dynamic Connector to Origin using Drei Line for Type Safety */}
                        <Line
                            points={[[0, 0, 0], [-node.position[0], -node.position[1], -node.position[2]]]}
                            color="black"
                            lineWidth={0.5}
                            transparent
                            opacity={0.1}
                        />
                    </group>
                ))}
                {/* Core Hub */}
                <mesh>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.6} />
                </mesh>
            </group>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
        </group>
    )
}

export function Blueprint3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
                <BlueprintEngine />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
