"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, PerspectiveCamera, OrbitControls, Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

export function HyperCore3D({ theme = "dark" }: { theme?: "light" | "dark" }) {
    const [mounted, setMounted] = React.useState(false)
    const color = theme === "dark" ? "white" : "black"

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-full h-full relative bg-transparent" />
    }

    return (
        <div className="w-full h-full relative">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
                <GeometricHub color={color} />
                {/* Extremely slow autonomous orbit for a 'calm' atmosphere */}
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
            </Canvas>
        </div>
    )
}

function GeometricHub({ color }: { color: string }) {
    const meshRef = useRef<THREE.Group>(null!)
    const voxelRef = useRef<THREE.Group>(null!)
    const groupRef = useRef<THREE.Group>(null!)
    // Interaction tracking
    const activeFactor = useRef(0)
    const lastMouse = useRef(new THREE.Vector2(0, 0))

    // Performance: Cache material references to avoid per-frame search/type-check
    const materialRefs = useRef<THREE.MeshStandardMaterial[]>([])

    const { mouse } = useThree()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Activity detection: Glow up when mouse is moving
        const mouseSpeed = lastMouse.current.distanceTo(mouse)
        const targetActive = mouseSpeed > 0.001 ? 1 : 0
        activeFactor.current = THREE.MathUtils.lerp(activeFactor.current, targetActive, 0.02)
        lastMouse.current.copy(mouse)

        // Slow, deliberate rotation accelerated slightly when active
        const rotSpeed = 0.5 + (activeFactor.current * 1.5)
        meshRef.current.rotation.y = t * 0.1 * rotSpeed
        meshRef.current.rotation.x = t * 0.05 * rotSpeed
        voxelRef.current.rotation.y = -t * 0.08 * rotSpeed
        voxelRef.current.rotation.z = t * 0.03 * rotSpeed

        // Refined hover parallax (Interactive Depth)
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.3, 0.1)
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.3, 0.1)

        // Optimized Glow Modulation (Using cached material refs)
        materialRefs.current.forEach((mat, i) => {
            const baseOpacity = [0.1, 0.2, 0.3][i] || 0.1
            const baseEmissive = [0.1, 0.2, 0.4][i] || 0.1
            mat.opacity = THREE.MathUtils.lerp(baseOpacity, baseOpacity * 2.5, activeFactor.current)
            mat.emissiveIntensity = THREE.MathUtils.lerp(baseEmissive, baseEmissive * 8, activeFactor.current)
        })
    })

    // Initialization: Populate material cache
    const materials = useMemo(() => {
        return [
            new THREE.MeshStandardMaterial({ wireframe: true, color, transparent: true, opacity: 0.1, emissive: color, emissiveIntensity: 0.1 }),
            new THREE.MeshStandardMaterial({ wireframe: true, color, transparent: true, opacity: 0.2, emissive: color, emissiveIntensity: 0.2 }),
            new THREE.MeshStandardMaterial({ wireframe: true, color, transparent: true, opacity: 0.3, emissive: color, emissiveIntensity: 0.4 })
        ]
    }, [color])

    React.useEffect(() => {
        materialRefs.current = materials
    }, [materials])

    // Procedural voxel positions
    const voxels = useMemo(() => {
        const temp = []
        for (let i = 0; i < 40; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 5,
                    (Math.random() - 0.5) * 5,
                ] as [number, number, number],
                size: Math.random() * 0.08 + 0.04,
                speed: Math.random() * 0.3 + 0.2,
            })
        }
        return temp
    }, [])

    return (
        <group ref={groupRef}>
            {/* Central Hub Frames: Radiant Glow Manifestation */}
            <group ref={meshRef}>
                <mesh material={materials[0]}>
                    <boxGeometry args={[2, 2, 2]} />
                </mesh>
                <mesh rotation={[Math.PI / 4, 0, Math.PI / 4]} material={materials[1]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                </mesh>
                <mesh rotation={[-Math.PI / 4, Math.PI / 2, 0]} material={materials[2]}>
                    <boxGeometry args={[1, 1, 1]} />
                </mesh>
            </group>

            {/* Floating Data Voxels */}
            <group ref={voxelRef}>
                {voxels.map((v, i) => (
                    <Float key={i} speed={v.speed} rotationIntensity={1} floatIntensity={1}>
                        <mesh position={v.position}>
                            <boxGeometry args={[v.size, v.size, v.size]} />
                            <meshStandardMaterial
                                color={color}
                                emissive={color}
                                emissiveIntensity={0.1}
                            />
                        </mesh>
                    </Float>
                ))}
            </group>

            <AtmosphericParticles count={400} color={color} />

            <ambientLight intensity={color === "white" ? 0.3 : 0.6} />
            <pointLight position={[10, 10, 10]} intensity={color === "white" ? 3 : 1} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={color === "white" ? 3 : 1} />
        </group>
    )
}

function AtmosphericParticles({ count = 400, color = "black" }) {
    const pointsRef = useRef<THREE.Points>(null!)
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 20
            p[i * 3 + 1] = (Math.random() - 0.5) * 20
            p[i * 3 + 2] = (Math.random() - 0.5) * 20
        }
        return p
    }, [count])

    useFrame((state) => {
        pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    })

    return (
        <Points ref={pointsRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color={color}
                size={0.04}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.2}
            />
        </Points>
    )
}
