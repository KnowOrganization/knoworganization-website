const HeroSection2 = () => {
	return (
		<div>
			<section className=" h-screen w-screen flex justify-center items-center  absolute top-0 left-0">
				<div className="flex items-end">
					<h1 className=" font-anton text-9xl">KNOW</h1>

					<a href="">
						<div className=" animate-pulse bg-white rounded-full p-3 h-16 w-16 flex justify-center items- text-3xl text-black">
							<span className=" blur-2xl animate-pulse bg-white rounded-full h-16 w-16 flex justify-center items- text-3xl text-black"></span>
							{/* <h1 id="progress">0</h1> */}
						</div>
					</a>
				</div>
			</section>
		</div>
	);
};

export default HeroSection2;
