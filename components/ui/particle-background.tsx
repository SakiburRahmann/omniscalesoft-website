"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 2000 }) {
    const mesh = useRef<THREE.Points>(null!)
    const light = useRef<THREE.PointLight>(null!)

    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 15
            const y = (Math.random() - 0.5) * 15
            const z = (Math.random() - 0.5) * 15
            temp.set([x, y, z], i * 3)
        }
        return temp
    }, [count])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        mesh.current.rotation.y = time * 0.05
        mesh.current.rotation.x = time * 0.02
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#000000"
                transparent
                opacity={0.1}
                sizeAttenuation={true}
            />
        </points>
    )
}

export function ParticleBackground() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Particles />
            </Canvas>
        </div>
    )
}
