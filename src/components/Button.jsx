'use client'
const Button = (props) => {
    return (
        <div>
            <button className={ `bg-white text-primary px-3 py-3 my-5 ${props.width} font-anton text-xl font-bold` }>
						{props.text}
			</button>
        </div>
    );
}

export default Button;