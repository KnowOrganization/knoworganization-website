"use client";

import Link from "next/link";

const Button = (props) => {
	return (
		<div>
			<Link href={props.url}>
				<button
					className={`bg-white text-primary px-3 py-3 my-5 ${props.width} font-anton text-xl font-bold hover:bg-primary hover:text-white transition `}
				>
					{props.text}
				</button>
			</Link>
		</div>
	);
};

export default Button;
