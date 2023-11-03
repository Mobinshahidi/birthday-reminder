import React, { useEffect, useState } from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
const ShowAll = () => {
    const [show, setShow] = useState(false);
	const [search, setSearch] = useState('');
    	//variables
	let date = new persianDate();
	let day = date.date();
	let month = date.month();
	let year = date.year();
    
//show all birthdays
const showAll = data.map((datas, index) => {
    return datas.name.includes(search) || search.length === 0 ? (
        <p
            key={index}
            className="transition ease-in duration-200 m-6 p-3 z-10 mx-2  hover:shadow-bx rounded"
        >
            {datas.name} : {datas.month}/{datas.day}
        </p>
    ) : null;
});
    return (
        <Element
				name="fifth"
				className="h-screen w-screen flex items-center justify-center flex-col"
			>
				<span className="text-3xl flex items-center justify-center m-10">
					Show All Birthdays
				</span>
				<div className=" w-2/4 h-2/4 m-3 bg-opacity-25 bg-white bg-blur-15 border border-opacity-25 rounded-xl p-6 shadow-lg z-10  overflow-auto">
					<div className="flex flex-row justify-center mt-6 mb-6  ">
						<button
							onClick={() => setShow(!show)}
							className="flex m-6 w-44 h-10 p-6 items-center justify-center border-2 border-gray-950 rounded"
						>
							{show ? 'hide all' : 'show all'}
						</button>
						<input
							type="text"
							placeholder="name"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="p-3 m-6 border"
						/>
					</div>
					<div className="flex flex-col justify-center items center ">
						{show && showAll}
					</div>
				</div>
				<span className="blob"></span>
			</Element>
    );
};

export default ShowAll;