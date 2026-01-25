"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { ScrollControls, useScroll, Float, PerspectiveCamera, Text, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

const STAGES = [
    { title: "DISCOVER", pos: [0, 4, 0], gearSize: 0.8 },
    { title: "ARCHITECT", pos: [0, 0, 0], gearSize: 1.2 },
    { title: "BUILD", pos: [0, -4, 0], gearSize: 1.0 },
    { title: "DEPLOY", pos: [0, -8, 0], gearSize: 0.6 },
    { title: "SCALE", pos: [0, -12, 0], gearSize: 1.4 },
]

function StageModule({ stage, index }: { stage: typeof STAGES[0], index: number }) {
    const gearRef = useRef<THREE.Mesh>(null!)
    const pulseRef = useRef<THREE.Mesh>(null!)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        gearRef.current.rotation.z = t * (index % 2 === 0 ? 1 : -1) * 0.5
        pulseRef.current.position.y = Math.sin(t * 2 + index) * 0.5
    })

    return (
        <group position={stage.pos as [number, number, number]}>
            {/* The Gear (Module Core) */}
            <mesh ref={gearRef}>
                <torusGeometry args={[stage.gearSize, 0.1, 8, 8]} />
                <meshStandardMaterial wireframe color="black" transparent opacity={0.3} />
            </mesh>

            {/* Inner Hub */}
            <mesh>
                <cylinderGeometry args={[0.2, 0.2, 0.4, 6]} />
                <meshStandardMaterial color="black" />
            </mesh>

            {/* Data Pulse Pipe */}
            <mesh ref={pulseRef} position={[0, 0, 0.5]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshStandardMaterial color="black" emissive="black" emissiveIntensity={2} />
            </mesh>

            <Text
                position={[2, 0, 0]}
                fontSize={0.4}
                color="black"
                font="/fonts/Geist-Bold.ttf"
                anchorX="left"
            >
                {stage.title}
            </Text>

            {/* Vertical Chassis Lines */}
            <mesh position={[0, -2, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 4]} />
                <meshStandardMaterial color="black" transparent opacity={0.1} />
            </mesh>
        </group>
    )
}

function MachineScene() {
    const scroll = useScroll()
    const { camera } = useThree()

    useFrame(() => {
        const offset = scroll.offset
        // Move camera down the machine as we scroll
        camera.position.y = THREE.MathUtils.lerp(4, -12, offset)
    })

    return (
        <group>
            {STAGES.map((s, i) => (
                <StageModule key={i} stage={s} index={i} />
            ))}

            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={2} />
        </group>
    )
}

export function ProcessMachine3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative cursor-ns-resize">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
                <ScrollControls pages={3} damping={0.3}>
                    <MachineScene />
                </ScrollControls>
            </Canvas>
        </div>
    )
}
