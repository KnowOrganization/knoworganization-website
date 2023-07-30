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
				<ul className="my-20">
					<li className=" text-4xl font-montserrat font-light my-10 px-20 mx-20 py-3 w-full ">
                        <span className=" px-7 py-2 border  hover:bg-white hover:text-black">

						Custom Software Development
                        </span>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 px-20 mx-20 py-3 ">
                        <span className=" px-7 py-2 border  hover:bg-white hover:text-black">

						Web Development
                        </span>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 ml-20 px-20 py-3  ">
                        <span className=" px-7 py-2 border hover:bg-white hover:text-black">

						Application Development
                        </span>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 px-20 mx-20 py-3 ">
                        <span className=" px-7 py-2 border  hover:bg-white hover:text-black">

						DevOps Consultation, Adoption, and Migration
                        </span>
					</li>
				</ul>
			</div>

			<div className="flex justify-center items-center">
				<Button text="Discover Services" width="w-60" />
			</div>
		</div>
	);
};

export default Services;
