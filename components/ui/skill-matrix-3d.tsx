"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Line, Text, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

const SKILLS = [
    { name: "AI / ML", pos: [4, 3, -1], color: "black" },
    { name: "Cloud Architecture", pos: [-4, -2, 2], color: "black" },
    { name: "Full-Stack Eng", pos: [2, -4, -3], color: "black" },
    { name: "CyberSecurity", pos: [-3, 4, -2], color: "black" },
    { name: "Venture Studio", pos: [5, -1, 3], color: "black" },
]

function SkillNode({ name, position, color, onSelect }: {
    name: string,
    position: [number, number, number],
    color: string,
    onSelect: () => void
}) {
    const ref = useRef<THREE.Group>(null!)
    const [hovered, setHovered] = useState(false)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.position.y += Math.sin(t + position[0]) * 0.002
    })

    return (
        <group
            ref={ref}
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={onSelect}
        >
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color={hovered ? "#000" : "#fff"}
                    emissive={hovered ? "black" : "white"}
                    emissiveIntensity={hovered ? 2 : 0.2}
                    transparent
                    opacity={0.8}
                />
            </mesh>
            <mesh scale={1.1}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial wireframe color="black" transparent opacity={0.2} />
            </mesh>

            <Text
                position={[0, 0.8, 0]}
                fontSize={0.25}
                color="black"
                anchorX="center"
                anchorY="middle"
                font="/fonts/Geist-Bold.ttf"
            >
                {name}
            </Text>

            {/* Neural Connection to Core */}
            <Line
                points={[[0, 0, 0], [-position[0], -position[1], -position[2]]]}
                color="black"
                lineWidth={hovered ? 2 : 0.5}
                transparent
                opacity={hovered ? 0.4 : 0.1}
            />
        </group>
    )
}

function MatrixEngine() {
    const groupRef = useRef<THREE.Group>(null!)
    const coreRef = useRef<THREE.Mesh>(null!)
    const { camera, mouse } = useThree()
    const [targetZoom, setTargetZoom] = useState<THREE.Vector3 | null>(null)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Idle motion
        coreRef.current.rotation.y = t * 0.1
        coreRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05)

        // Mouse Parallax
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.3, 0.05)
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.3, 0.05)

        // Cinematic Zoom logic
        if (targetZoom) {
            camera.position.lerp(targetZoom.clone().add(new THREE.Vector3(0, 0, 3)), 0.05)
        } else {
            camera.position.lerp(new THREE.Vector3(0, 0, 12), 0.05)
        }
    })

    return (
        <group ref={groupRef}>
            {/* The Company Engine Core */}
            <mesh ref={coreRef} onClick={() => setTargetZoom(null)}>
                <octahedronGeometry args={[1.8, 0]} />
                <MeshDistortMaterial color="black" speed={2} distort={0.2} transparent opacity={0.5} />
            </mesh>
            <mesh scale={1.2}>
                <octahedronGeometry args={[1.8, 0]} />
                <meshStandardMaterial wireframe color="black" transparent opacity={0.1} />
            </mesh>

            {/* Skill Matrix Nodes */}
            {SKILLS.map((skill, i) => (
                <SkillNode
                    key={i}
                    {...skill}
                    position={skill.pos as [number, number, number]}
                    onSelect={() => setTargetZoom(new THREE.Vector3(...skill.pos))}
                />
            ))}

            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={2} />
        </group>
    )
}

export function SkillMatrix3D() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative cursor-crosshair">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
                <MatrixEngine />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}
