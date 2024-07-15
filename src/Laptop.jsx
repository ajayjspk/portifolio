import * as THREE from 'three';
import React from 'react';
import { Html, Environment, PresentationControls, useGLTF } from "@react-three/drei";

export default function Laptop() {
    const laptop = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
    );

    return (
        // <>
        //     <Environment preset='warehouse' />
        //     <PresentationControls enabled global polar={[-0.5, 0.2]} azimuth={[-0.4, 0.2]} >

        //         <primitive object={laptop.scene} scale={[1.7, 1.7, 1.5]} position-y={-1.3}>
        //             <Html wrapperClass='laptop' position={[0, 1.55, -1.4]} transform distanceFactor={1.17} rotation-x={-0.25}>
        //                 <iframe src='https://google.com' />
        //             </Html>
        //         </primitive>

        //     </PresentationControls>
        // </>
        <>
            <Environment preset='warehouse' />
            <PresentationControls enabled global polar={[-0.5, 0.2]} azimuth={[-0.4, 0.2]} >

                <primitive object={laptop.scene} scale={[1.7, 1.7, 1.5]} position-y={-1.3}>
                    <Html wrapperClass='laptop' position={[0, 1.55, -1.4]} transform distanceFactor={1.17} rotation-x={-0.25}>
                        {/* Replace with dummy content or another URL for testing */}
                        <iframe src='https://example.com' title="Dummy Content" />
                    </Html>
                </primitive>

            </PresentationControls>
        </>
    );
}
