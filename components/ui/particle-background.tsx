"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const COUNT = 85 // Minimalist density per user request

function BoxRain() {
    const meshRef = useRef<THREE.InstancedMesh>(null!)
    const dummy = useMemo(() => new THREE.Object3D(), [])

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < COUNT; i++) {
            const x = (Math.random() - 0.5) * 40
            const y = (Math.random() - 0.5) * 40
            const z = (Math.random() - 0.5) * 20

            // Balanced Drift speed (0.003 base)
            const speed = 0.003 + Math.random() * 0.004

            // Random initial rotation state
            const rx = Math.random() * Math.PI
            const ry = Math.random() * Math.PI
            const rz = Math.random() * Math.PI

            // Independent random rotation speeds for 3 axes
            // Increased speed using 0.011 factor per user request
            const rotSpeedX = (Math.random() - 0.5) * 0.011
            const rotSpeedY = (Math.random() - 0.5) * 0.011
            const rotSpeedZ = (Math.random() - 0.5) * 0.011

            temp.push({ x, y, z, rx, ry, rz, speed, rotSpeedX, rotSpeedY, rotSpeedZ })
        }
        return temp
    }, [])

    useFrame(() => {
        if (!meshRef.current) return

        particles.forEach((p, i) => {
            // Normalized angled fall trajectory
            p.y -= p.speed
            p.x -= p.speed * 0.8 // Steeper angle

            // Respawn logic
            if (p.y < -20) {
                p.y = 20
                p.x = (Math.random() - 0.5) * 40 + 10
            }

            // Update independent rotation state
            p.rx += p.rotSpeedX
            p.ry += p.rotSpeedY
            p.rz += p.rotSpeedZ

            dummy.position.set(p.x, p.y, p.z)
            dummy.rotation.set(p.rx, p.ry, p.rz) // Apply specific rotation state
            dummy.updateMatrix()
            meshRef.current.setMatrixAt(i, dummy.matrix)
        })
        meshRef.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
            <boxGeometry args={[0.22, 0.22, 0.22]} />
            <meshLambertMaterial
                color="#000000"
                transparent
                opacity={0.12}
                flatShading={true}
            />
        </instancedMesh>
    )
}

export function ParticleBackground() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <BoxRain />
            </Canvas>
        </div>
    )
}
