"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo/T-Back_W-Letter_transperent.png";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import HeroSection2 from '@/components/HeroSection2'

const Hearder = () => {
	const [loading, setLoading] = useState(false);
	const [loadingState, setLoadingState] = useState(0);
	let i = 0;

	useEffect(() => {
		setLoading(true);
		progresCount();
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	const progresCount = () => {
		setTimeout(async () => {
			i++;
			document.getElementById("progress").innerHTML = i;
			console.log(i);
			if (i < 100) {
				progresCount();
			} else if ((i = 100)) {
				setLoadingState(1);
			}
		}, 10);
	};

	return (
		<div>
			{loading && loadingState === 0 ? (
				<div className=" h-screen w-screen flex fixed justify-center items-center z-10 ">
					<h1 className=" font-anton md:text-9xl text-5xl">KNOW</h1>
					<div className=" z-10 bg-white rounded-full md:h-36 md:w-36 h-14 w-14 flex justify-center items-center text-3xl text-black">
						<h1 id="progress" className=" text-xl">0</h1>
					</div>
				</div>
			) : loading && loadingState === 1 ? (
				<motion.div className=" h-screen w-screen flex fixed justify-center items-center z-10 ">
					<motion.h1
						animate={{ opacity: 0, scale: 10 }}
						transition={{ duration: 1 }}
						className=" font-anton md:text-9xl text-5xl"
					>
						KNOW
					</motion.h1>
					<motion.div
						className=" bg-white rounded-full md:h-36 md:w-36 h-14 w-14 flex justify-center items-center text-3xl text-black"
						animate={{ opacity: 0, scale: 10 }}
						transition={{ duration: 1 }}
					></motion.div>
				</motion.div>
			) : (
				<div>
					<div className=" flex justify-between items-center flex-row z-10 ">
						<Image className=" md:mx-10 mx-3 my-5" src={logo} height={70} />
						<div className=" md:mx-10 mx-3 my-5">
							<Hamburger />
						</div>
					</div>
					<div className="flex flex-col items-center justify-between md:px-28 px-10">

					{/* <HeroSection /> */}
					</div>
				</div>
			 )}
		</div>
	);
};

export default Hearder;
