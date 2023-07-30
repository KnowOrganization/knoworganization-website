import Button from "./Button";
import ModelCanvas from "./Model";
import Services from "./Services";
import Clients from "./Clients";

const HeroSection = () => {
	return (
		<div>
			<section className=" h-80v flex items-center">
				<div className=" w-2/3">
					<h1 className=" text-7xl py-5 font-montserrat font-light">
						<span className=" font-anton">Know</span>
						<span className="text-8xl font-bold">.</span> infinite
						possibilities
					</h1>
					<h3 className=" text-2xl py-5 mr-10v font-montserrat font-light">
						Welcome to Know Organization, where we specialize in
						delivering cutting-edge IT solutions tailored to your needs.{" "}
						<br /> Ready to Transform Your Business? Know Infinite
						Possibilities and Discover Your Potential Today!
					</h3>
					{/* <h3 className=" text-2xl py-5 mr-72 font-montserrat font-light">Ready to Transform Your Business? Know Infinite Possibilities and Discover Your Potential Today!</h3> */}
					<Button text="Discover Your Potential" width="w-60" />
				</div>
				<div
					className=" w-50v right-0 top-0 h-full relative   "

				>
					<div className=" h-60 w-60 absolute bg-gradient-to-tr from-purple-500 to-teal-400 blur-3xl"></div>
					<ModelCanvas  model="./strip.gltf"/>
						{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.402/build/spline-viewer.js"></script>
						<spline-viewer url="https://prod.spline.design/47eTGqG1FN7hVnOI/scene.splinecode"></spline-viewer> */}
				</div>
			</section>
			<Services />
			<Clients />
		</div>
	);
};

export default HeroSection;
