import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Environment, PresentationControls, Preload, useGLTF, useProgress } from "@react-three/drei";
import "./style.css";

export default function Laptop() {
    const { progress } = useProgress();

    const laptop = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
    );

    return (
        <>
            <Suspense fallback={<LoadingScreen progress={progress} />}>
                <Environment preset='warehouse' />
                <PresentationControls enabled global cursor >
                    <primitive object={laptop.scene} scale={[0.8, 0.8, 0.8]} position-y={-1.5} position-x={0.5}>
                    <Html wrapperClass="laptop" position={[-0.25, 1.5, -1.40]} transform distanceFactor={1.16} rotation-x={-0.25}>
  <iframe src="https://terminal13.netlify.app/" />
</Html>
                    </primitive>
                </PresentationControls>
            </Suspense>
        </>
    );
}

function LoadingScreen({ progress }) {
    return (
        <Html center>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Loading {Math.floor(progress)}%</h1>
            </div>
        </Html>
    );
}
