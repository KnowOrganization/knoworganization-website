import Button from "./Button";

const Contactus = () => {
	return (
		<div className=" my-60 flex justify-around relative h-30v">
			<span className=" absolute  left-0 h-40v w-30v bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-30 -z-10"></span>
			<div className="flex justify-center items-center text-center text-7xl font-anton">
				<h1 className=" text-center">Contact Us</h1>
			</div>

			<div className="flex justify-center items-center">
				<Button text="Discover Your Potential" width="w-60" url="/knowabout" />
			</div>
			<span className=" absolute  right-0 h-30v w-40v bg-gradient-to-tr from-primary to-purple-500 blur-3xl opacity-30 -z-10"></span>
		</div>
	);
};

export default Contactus;
