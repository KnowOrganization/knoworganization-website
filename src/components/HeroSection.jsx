import Button from "./Button";
import ModelCanvas from "./Model";
import Services from "./Services";
import Clients from "./Clients";
import WhyChooseUs from "./WhyChooseUs";
import Contactus from "./Contactus";

const HeroSection = () => {
	return (
		<div>
			<section className=" h-80v flex ">
				<div className=" md:w-2/3  overflow-hidden ">
					<h1 className=" md:text-7xl text-5xl py-5 font-montserrat font-light">
						<span className=" font-anton">Know</span>
						<span className="text-8xl font-bold">.</span> infinite
						possibilities
					</h1>
					<h3 className=" text-2xl py-5 md:mr-10v font-montserrat font-light">
						Welcome to Know Organization, where we specialize in
						delivering cutting-edge IT solutions tailored to your needs.
						<br /> Ready to Transform Your Business? Know Infinite
						Possibilities and Discover Your Potential Today!
					</h3>
					{/* <h3 className=" text-2xl py-5 mr-72 font-montserrat font-light">Ready to Transform Your Business? Know Infinite Possibilities and Discover Your Potential Today!</h3> */}
					<Button
						text="Discover Your Potential"
						width="w-60"
						url="/knowcontact"
					/>
				</div>
				<div className=" h-60 w-60 absolute bg-gradient-to-tr from-purple-500 to-teal-400 blur-3xl opacity-50 top-52 md:hidden"></div>
				<div className=" md:w-50v w-70v right-0 md:top-0 top-1/4 md:h-full h-40v md:relative absolute left-10 md:flex hidden ">
					<div className=" h-60 w-60 absolute bg-gradient-to-tr from-purple-500 to-teal-400 blur-3xl"></div>
					<ModelCanvas model="./strip.gltf" />
					{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.402/build/spline-viewer.js"></script>
						<spline-viewer url="https://prod.spline.design/47eTGqG1FN7hVnOI/scene.splinecode"></spline-viewer> */}
				</div>
			</section>
			{/* <Services />
			<Clients />
			<WhyChooseUs />
			<Contactus /> */}
		</div>
	);
};

export default HeroSection;
