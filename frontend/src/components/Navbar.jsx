import React, { useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
	return (
		<div className="fixed z-10 flex flex-col p-8 top-1/2 right-8 transform -translate-y-1/2 overflow-x-hidden md:right-0 md:pr-2 lg:pr-2">
			<Link
				to="first"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={0}
				duration={900}
				className="px-3 md:p-0 lg:p-0 "
			>
				<input
					type="radio"
					value="section1"
					name="item"
					className="cursor-pointer"
				/>
			</Link>
			<Link
				to="second"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={0}
				duration={900}
				className="px-3 md:p-0 lg:p-0"
			>
				<input
					type="radio"
					value="section2"
					name="item"
					className="cursor-pointer"
					id="section2"
				/>
			</Link>
			<Link
				to="third"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={0}
				duration={900}
				className="px-3 md:p-0 lg:p-0"
			>
				<input
					type="radio"
					value="section3"
					name="item"
					className="cursor-pointer"
					id="section3"
				/>
			</Link>
			<Link
				to="fourth"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={0}
				duration={900}
				className="px-3 md:p-0 lg:p-0"
			>
				<input
					type="radio"
					value="section4"
					name="item"
					className="cursor-pointer"
					id="section4"
				/>
			</Link>
			<Link
				to="fifth"
				activeClass="active"
				spy={true}
				smooth={true}
				offset={0}
				duration={900}
				className="px-3 md:p-0 lg:p-0"
			>
				<input
					type="radio"
					value="section5"
					name="item"
					className="cursor-pointer"
					id="section5"
				/>
			</Link>
		</div>
	);
};

export default Navbar;
