"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Line, Sparkles, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function SkillShard({ position, size, color }: { position: [number, number, number], size: number, color: string }) {
    const ref = useRef<THREE.Mesh>(null!)
    useFrame((state) => {
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.2
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.5
    })

    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh ref={ref} position={position}>
                <dodecahedronGeometry args={[size, 0]} />
                <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
            </mesh>
        </Float>
    )
}

function DataPulse({ start, end }: { start: THREE.Vector3, end: THREE.Vector3 }) {
    const lineRef = useRef<THREE.Line>(null!)
    const [progress, setProgress] = useState(0)

    useFrame((state) => {
        setProgress((p) => (p + 0.01) % 1)
    })

    const points = useMemo(() => {
        const p = new THREE.Vector3().lerpVectors(start, end, progress)
        const p2 = new THREE.Vector3().lerpVectors(start, end, Math.min(progress + 0.1, 1))
        return [p, p2]
    }, [start, end, progress])

    return (
        <Line points={points} color="black" lineWidth={1} transparent opacity={0.8} />
    )
}

function NeuralCore() {
    const coreRef = useRef<THREE.Mesh>(null!)
    const groupRef = useRef<THREE.Group>(null!)
    const { mouse } = useThree()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        coreRef.current.rotation.z = t * 0.1
        coreRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05)

        // Interactive group tilt
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.5, 0.1)
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.5, 0.1)
    })

    const shards = useMemo(() => [
        { position: [4, 2, -2] as [number, number, number], size: 0.5, color: "black", label: "AI" },
        { position: [-4, -3, 1] as [number, number, number], size: 0.4, color: "black", label: "Cloud" },
        { position: [2, -4, -3] as [number, number, number], size: 0.6, color: "black", label: "Eng" },
        { position: [-3, 4, -1] as [number, number, number], size: 0.3, color: "black", label: "Strategy" },
    ], [])

    return (
        <group ref={groupRef}>
            {/* The Intelligence Core */}
            <mesh ref={coreRef}>
                <octahedronGeometry args={[1.5, 2]} />
                <meshStandardMaterial wireframe color="black" transparent opacity={0.2} />
            </mesh>
            <mesh scale={0.8}>
                <octahedronGeometry args={[1.5, 0]} />
                <MeshDistortMaterial color="black" speed={2} distort={0.2} transparent opacity={0.1} />
            </mesh>

            {/* Skill Shards */}
            {shards.map((s, i) => (
                <group key={i}>
                    <SkillShard {...s} />
                    <Line
                        points={[[0, 0, 0], s.position]}
                        color="black"
                        lineWidth={0.5}
                        transparent
                        opacity={0.1}
                    />
                    <DataPulse start={new THREE.Vector3(0, 0, 0)} end={new THREE.Vector3(...s.position)} />
                </group>
            ))}

            <Sparkles count={50} scale={10} size={2} speed={0.2} opacity={0.1} color="black" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
        </group>
    )
}

export function CapabilityEngine3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
                <NeuralCore />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
