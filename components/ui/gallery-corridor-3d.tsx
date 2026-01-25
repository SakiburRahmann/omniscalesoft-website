"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { ScrollControls, Scroll, useScroll, Float, PerspectiveCamera, Text, Image } from "@react-three/drei"
import * as THREE from "three"

const PROJECTS = [
    { title: "Core Ledger", tag: "Rust / Fintech", pos: [0, 0, 0] },
    { title: "Imaging AI", tag: "Python / Health", pos: [5, 2, -10] },
    { title: "Fleet Edge", tag: "Go / Logistics", pos: [-4, -3, -20] },
    { title: "Venture SAAS", tag: "Next.js / Cloud", pos: [6, 1, -30] },
    { title: "Deep Security", tag: "Erlang / SRE", pos: [-5, 4, -40] },
]

function ProjectCard({ project, index }: { project: typeof PROJECTS[0], index: number }) {
    const ref = useRef<THREE.Group>(null!)
    const [hovered, setHovered] = useState(false)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.position.y += Math.sin(t + index) * 0.005
    })

    return (
        <group
            ref={ref}
            position={project.pos as [number, number, number]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* Holographic Frame */}
            <mesh>
                <boxGeometry args={[4, 2.5, 0.1]} />
                <meshStandardMaterial
                    color={hovered ? "black" : "white"}
                    transparent
                    opacity={hovered ? 0.8 : 0.4}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Architectural Border */}
            <mesh scale={1.05}>
                <boxGeometry args={[4, 2.5, 0.1]} />
                <meshStandardMaterial wireframe color="black" transparent opacity={0.2} />
            </mesh>

            {/* Typography */}
            <Text
                position={[0, 0, 0.1]}
                fontSize={0.3}
                color={hovered ? "white" : "black"}
                font="/fonts/Geist-Bold.ttf"
                anchorX="center"
                anchorY="middle"
            >
                {project.title}
                {`\n`}
                <tspan fontSize={0.15} opacity={0.5}>{project.tag}</tspan>
            </Text>

            {/* Glow effect */}
            <pointLight position={[0, 0, 0.5]} intensity={hovered ? 2 : 0} color="white" />
        </group>
    )
}

function CorridorScene() {
    const scroll = useScroll()
    const { camera } = useThree()

    useFrame(() => {
        const r1 = scroll.range(0, 1)
        // Move camera deeper into the corridor as we scroll
        camera.position.z = THREE.MathUtils.lerp(10, -50, r1)
    })

    return (
        <group>
            {/* Perspective Lines for depth */}
            <gridHelper args={[100, 20]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -20]}>
                <meshStandardMaterial color="black" transparent opacity={0.05} wireframe />
            </gridHelper>

            {PROJECTS.map((p, i) => (
                <ProjectCard key={i} project={p} index={i} />
            ))}

            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} />
        </group>
    )
}

export function GalleryCorridor3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative cursor-ns-resize">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
                <ScrollControls pages={3} damping={0.2}>
                    <CorridorScene />
                </ScrollControls>
            </Canvas>
        </div>
    )
}
