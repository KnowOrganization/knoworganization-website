"use client"
import { useState } from "react";


const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            console.log("open menu")
        }
        else {  
            console.log("close menu")
        }

    }	
    return (
		<div >
			<button onClick={openMenu} className="h-10 w-10 flex justify-center items-center">
				<div className="space-y-2">
					<span className="block w-8 h-0.5 bg-white"></span>
					<span className="block w-5 h-0.5 bg-white"></span>
				</div>			
            </button>
		</div>
	);
};

export default Hamburger;
