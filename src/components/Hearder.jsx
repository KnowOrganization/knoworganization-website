"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/logo/T-Back_W-Letter_transperent.png";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import HeroSection2 from "@/components/HeroSection2";

const Hearder = () => {
	return (
		<div>
			<div>
				<div className=" flex justify-between items-center flex-row z-10 ">
					<Image
						className=" md:mx-10 mx-3 my-5"
						src={logo}
						height={70}
						alt="img"
					/>
					<div className=" md:mx-10 mx-3 my-5">
						<Hamburger />
					</div>
				</div>
				<div className="flex flex-col items-center justify-between md:px-28 px-10"></div>
			</div>
		</div>
	);
};

export default Hearder;
