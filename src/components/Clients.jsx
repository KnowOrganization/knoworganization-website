import Image from "next/image";
import Button from "./Button";
import safeair from "../assets/clients/safeair.jpeg";

const Clients = () => {
    return (
        <div className=" my-60">
			<div className="flex justify-center items-center text-center text-7xl font-anton">
				<h1 className=" text-center">Our Clients</h1>
			</div>
			<div className="relative">
                <div className=" absolute left-0 -z-0 h-80">

                {/* <ModelCanvas model="./cubic.gltf"/> */}
                </div>
				<ul className="my-20 flex">
					<li className=" text-4xl font-montserrat font-light my-10 px-20 mx-20 py-3 w-full flex flex-col items-center justify-center gap-10">
                        <Image className=" border-8 " src={safeair} width={200} height={200} />
                        <h1 className=" text-center">SafeAir</h1>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 px-20 mx-20 py-3 w-full flex flex-col items-center justify-center gap-10">
                    <Image className=" border-8 " src="/images/clients/1.png" width={200} height={200} />
                        <h1 className=" text-center">Global AgriTech</h1>
					</li>
				</ul>
			</div>

			<div className="flex justify-center items-center">
				<Button text="Client Portfolio" width="w-60" url="/knowabout"/>
			</div>
		</div>
    );
}

export default Clients;