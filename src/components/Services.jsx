import Button from "./Button";
import ModelCanvas from "./Model";

const Services = () => {
	return (
		<div className=" mt-60">
			<div className="flex justify-center items-center text-center text-7xl font-anton">
				<h1 className=" text-center">What We Do</h1>
			</div>
			<div className="relative">
				<div className=" absolute left-0 -z-0 h-80">
					{/* <ModelCanvas model="./cubic.gltf"/> */}
				</div>
				<ul className="my-10 grid grid-cols-1 md:grid-cols-2">
					<li className=" text-4xl font-montserrat font-light my-10 px-20  py-3 w-40v border-gray-500 border-2 rounded-3xl relative ">
						<span className=" absolute right-0 h-20 w-96 bg-gradient-to-tr from-primary to-teal-500 blur-3xl"></span>
						<span className=" py-2  ">
							Custom Software Development
						</span>
						<p className=" text-lg px-20 py-5">
							Tailored Solutions for Your Unique Vision: Elevate Your
							Business with Custom Software Development.
						</p>
						<span className=" absolute bottom-0 left-0 h-20 w-96 bg-gradient-to-tr from-primary to-purple-500 blur-3xl opacity-60"></span>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 px-20 py-3 w-40v border-gray-500 border-2 rounded-3xl relative ">
						<span className=" absolute right-0 h-20 w-96 bg-gradient-to-tr from-primary to-teal-500 blur-3xl"></span>
						<span className=" py-2   ">Web Development</span>
						<p className=" text-lg px-20 py-5">
							Digital Presence Perfected: Captivate Your Audience with
							Innovative Web Development.
						</p>
						<span className=" absolute bottom-0 left-0 h-20 w-96 bg-gradient-to-tr from-primary to-purple-500 blur-3xl opacity-60"></span>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10  px-20 py-3 w-40v border-gray-500 border-2 rounded-3xl relative ">
						<span className=" absolute right-0 h-20 w-96 bg-gradient-to-tr from-primary to-teal-500 blur-3xl"></span>
						<span className=" py-2  ">Application Development</span>
						<p className=" text-lg px-20 py-5">
							Empowering User Experiences: Unleash the Potential of Your
							Business with Cutting-Edge Applications.
						</p>
						<span className=" absolute bottom-0 left-0 h-20 w-96 bg-gradient-to-tr from-primary to-purple-500 blur-3xl opacity-60"></span>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 px-20  py-3 w-40v border-gray-500 border-2 rounded-3xl relative ">
						<span className=" absolute right-0 h-20 w-96 bg-gradient-to-tr from-primary to-teal-500 blur-3xl"></span>
						<span className="  py-2   ">
							DevOps Consultation, Adoption, and Migration
						</span>
						<p className=" text-lg px-20 py-5">
							Seamless Workflows, Transformed Operations: Enhance
							Efficiency with Expert DevOps Consultation and Migration.
						</p>
						<span className=" absolute bottom-0 left-0 h-20 w-96 bg-gradient-to-tr from-primary to-purple-500 blur-3xl opacity-60"></span>
					</li>
				</ul>
			</div>

			<div className="flex justify-center items-center">
				<Button text="Discover Services" width="w-60" url="/knowservices"/>
			</div>
		</div>
	);
};

export default Services;
