"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Points, PointMaterial, Sparkles } from "@react-three/drei"
import * as THREE from "three"

function OutcomeEngine() {
    const groupRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        groupRef.current.rotation.y = t * 0.3
        groupRef.current.position.y = Math.sin(t * 0.5) * 0.2
    })

    // Procedural constellation nodes
    const nodes = useMemo(() => {
        const temp = []
        for (let i = 0; i < 25; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 7,
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 3,
                ] as [number, number, number],
                size: Math.random() * 0.15 + 0.05,
                delay: Math.random() * 2
            })
        }
        return temp
    }, [])

    return (
        <group>
            <group ref={groupRef}>
                {nodes.map((node, i) => (
                    <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
                        <mesh position={node.position}>
                            <icosahedronGeometry args={[node.size, 1]} />
                            <meshStandardMaterial color="black" transparent opacity={0.6} />
                        </mesh>
                        {/* Success Aurora */}
                        <mesh position={node.position}>
                            <sphereGeometry args={[node.size * 1.5, 16, 16]} />
                            <meshStandardMaterial color="black" transparent opacity={0.05} wireframe />
                        </mesh>
                    </Float>
                ))}
            </group>

            <Sparkles count={100} scale={10} size={1} speed={0.5} opacity={0.1} color="black" />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
        </group>
    )
}

export function Outcome3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
                <OutcomeEngine />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
        </div>
    )
}
