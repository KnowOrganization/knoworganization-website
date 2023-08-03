"use client";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Model = (props) => {
	const infinityModel = useGLTF(props.model);

	return (
		<mesh>
			<hemisphereLight intensity={1} groundColor="black" />
			<directionalLight position={[10, -10, 0]} intensity={5}  />
			<directionalLight position={[0, 40, -10]} intensity={1} color={'orange'} />
			<ambientLightProbe intensity={0.2}  color={'red'}/>

			<pointLight position={[-30, -50, 40]} intensity={50} />
			<primitive object={infinityModel.scene} scale={0.75} />
		</mesh>
	);
};

const ModelCanvas = (props) => {
	return (
		<Canvas
			frameloop="demand"
			camera={{ position: [30, 3, 20], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={null}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Model model={props.model}/>
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ModelCanvas;
