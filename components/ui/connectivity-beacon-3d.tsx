"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Line, Sparkles } from "@react-three/drei"
import * as THREE from "three"

function MessageRay({ target }: { target: THREE.Vector3 }) {
    const ref = useRef<THREE.Group>(null!)
    const [progress, setProgress] = useState(Math.random())
    const start = useMemo(() => new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
    ), [])

    useFrame((state) => {
        setProgress((p) => (p + 0.005) % 1)
        const currentPos = new THREE.Vector3().lerpVectors(start, target, progress)
        ref.current.position.copy(currentPos)
        ref.current.lookAt(target)
    })

    return (
        <group ref={ref}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.01, 0.05, 1, 8]} />
                <meshStandardMaterial color="black" transparent opacity={0.2} />
            </mesh>
        </group>
    )
}

function BeaconEngine() {
    const hubRef = useRef<THREE.Group>(null!)
    const { mouse } = useThree()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        hubRef.current.rotation.y = t * 0.5
        hubRef.current.scale.setScalar(1 + Math.sin(t * 3) * 0.1)

        // Signal Search Tilt
        hubRef.current.position.x = THREE.MathUtils.lerp(hubRef.current.position.x, mouse.x * 3, 0.05)
        hubRef.current.position.y = THREE.MathUtils.lerp(hubRef.current.position.y, mouse.y * 3, 0.05)
    })

    const rays = useMemo(() => Array.from({ length: 30 }), [])

    return (
        <group>
            {/* The Intelligence Lighthouse */}
            <group ref={hubRef}>
                <mesh>
                    <dodecahedronGeometry args={[1.2, 0]} />
                    <meshStandardMaterial wireframe color="black" transparent opacity={0.4} />
                </mesh>
                <mesh scale={0.4}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                {/* Visual Resonance Rings */}
                {[1.5, 2].map((radius, i) => (
                    <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[radius, radius + 0.05, 64]} />
                        <meshStandardMaterial color="black" transparent opacity={0.1} side={THREE.DoubleSide} />
                    </mesh>
                ))}
            </group>

            {/* Converging Message Rays */}
            {rays.map((_, i) => (
                <MessageRay key={i} target={new THREE.Vector3(0, 0, 0)} />
            ))}

            <Sparkles count={40} scale={10} size={2} speed={0.5} opacity={0.1} color="black" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
        </group>
    )
}

export function ConnectivityBeacon3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={35} />
                <BeaconEngine />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}
