"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Line, Sparkles, MeshDistortMaterial, Text } from "@react-three/drei"
import * as THREE from "three"

function EnergyPulse({ start, end, onComplete }: { start: THREE.Vector3, end: THREE.Vector3, onComplete: () => void }) {
    const [progress, setProgress] = useState(0)

    useFrame(() => {
        setProgress(p => {
            const next = p + 0.02
            if (next >= 1) onComplete()
            return next
        })
    })

    const currentPos = useMemo(() => new THREE.Vector3().lerpVectors(start, end, progress), [progress, start, end])

    return (
        <mesh position={currentPos}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color="black" emissive="black" emissiveIntensity={5} />
        </mesh>
    )
}

function SignalScene({ isTyping, isSubmitted }: { isTyping: boolean, isSubmitted: boolean }) {
    const hubRef = useRef<THREE.Group>(null!)
    const clientRef = useRef<THREE.Group>(null!)
    const { mouse } = useThree()
    const [pulses, setPulses] = useState<number[]>([])

    // Pulse generation logic
    useEffect(() => {
        if (isTyping) {
            const id = Date.now()
            setPulses(p => [...p, id])
        }
    }, [isTyping])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Interactive bend
        hubRef.current.position.x = -3 + mouse.x
        clientRef.current.position.x = 3 + mouse.x
    })

    const nodeA = new THREE.Vector3(-3, 0, 0)
    const nodeB = new THREE.Vector3(3, 0, 0)

    return (
        <group>
            {/* OmniScale Node */}
            <group ref={hubRef} position={[-3, 0, 0]}>
                <mesh>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="black" wireframe transparent opacity={0.4} />
                </mesh>
                <mesh scale={0.4}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="black">OMNISCALE</Text>
            </group>

            {/* Client Node */}
            <group ref={clientRef} position={[3, 0, 0]}>
                <mesh>
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshStandardMaterial color="black" wireframe transparent opacity={0.2} />
                </mesh>
                <mesh scale={0.3}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <Text position={[0, -1.5, 0]} fontSize={0.2} color="black">PARTNER</Text>
            </group>

            {/* The Circuit Line */}
            <Line
                points={[[nodeA.x, nodeA.y, nodeA.z], [nodeB.x, nodeB.y, nodeB.z]]}
                color="black"
                lineWidth={isSubmitted ? 10 : 1}
                transparent
                opacity={isSubmitted ? 0.8 : 0.1}
            />

            {/* Energy Pulses */}
            {pulses.map(id => (
                <EnergyPulse
                    key={id}
                    start={nodeB}
                    end={nodeA}
                    onComplete={() => setPulses(p => p.filter(pid => pid !== id))}
                />
            ))}

            <Sparkles count={50} scale={10} size={2} color="black" opacity={0.1} />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={2} />
        </group>
    )
}

export function ConnectionSignal3D({ isTyping = false, isSubmitted = false }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="w-full h-full bg-transparent" />

    return (
        <div className="w-full h-full relative">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
                <SignalScene isTyping={isTyping} isSubmitted={isSubmitted} />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}
