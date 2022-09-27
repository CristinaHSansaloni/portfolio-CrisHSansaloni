import React from 'react';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
    return <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial color="#D8D3BF" attach="material" distort={0.5} speed={1.5} roughness={1}/>
    </Sphere>
}