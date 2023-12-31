import Image from "next/image";
import Button from "./Button";
import safeair from "../assets/clients/safeair.jpeg";
import pearls from "../assets/clients/pearls.png";
import global from "../assets/clients/global.png";

const Clients = () => {
    return (
        <div className=" my-60">
			<div className="flex flex-row justify-center items-center text-center text-7xl font-anton">
				<h1 className=" text-center">Our Clients</h1>
			</div>
			<div className="relative">
                <div className=" absolute left-0 -z-0 h-80">

                {/* <ModelCanvas model="./cubic.gltf"/> */}
                </div>
				<ul className="my-20 flex md:flex-row  flex-col">
					<li className=" text-4xl font-montserrat font-light my-10 md:px-20 md:mx-20 py-3 w-full flex flex-col items-center justify-center gap-10">
                        <Image className=" border-8 " src={safeair} width={200} height={200} alt="img" />
                        <h1 className=" text-center">SafeAir</h1>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 md:px-20 md:mx-20 py-3 w-full flex flex-col items-center justify-center gap-10">
                    <Image className=" border-8 " src={global} width={200} height={200} alt="img" />
                        <h1 className=" text-center">Global AgriTec</h1>
					</li>
					<li className=" text-4xl font-montserrat font-light my-10 md:px-20 md:mx-20 py-3 w-full flex flex-col items-center justify-center gap-10">
                    <Image className=" border-8 " src={pearls} width={200} height={200} alt="img" />
                        <h1 className=" text-center">Pearls Dental Care</h1>
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