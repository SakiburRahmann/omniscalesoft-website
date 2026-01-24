"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function SignalEngine() {
    const hubRef = useRef<THREE.Group>(null!)
    const ringsRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        hubRef.current.rotation.y = t * 0.5
        hubRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1)

        ringsRef.current.children.forEach((child, i) => {
            child.scale.setScalar(1 + (t * (i + 1) * 0.5) % 3)
            // @ts-ignore
            child.material.opacity = (1 - (child.scale.x / 3)) * 0.3
        })
    })

    return (
        <group>
            {/* Central Connectivity Hub */}
            <group ref={hubRef}>
                <mesh>
                    <icosahedronGeometry args={[1.5, 2]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.4} />
                </mesh>
                <mesh>
                    <sphereGeometry args={[0.5, 16, 16]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </group>

            {/* Expanding Signal Ripples */}
            <group ref={ringsRef}>
                {[1, 2, 3].map((_, i) => (
                    <mesh key={i} rotation={[-Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[1.5, 1.6, 64]} />
                        <meshStandardMaterial color="black" transparent opacity={0} side={THREE.DoubleSide} />
                    </mesh>
                ))}
            </group>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
        </group>
    )
}

export function Signal3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
                <SignalEngine />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}
