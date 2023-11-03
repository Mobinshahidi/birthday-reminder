import React, { useState } from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import { BsTrash3 } from 'react-icons/bs';
const ShowAll = () => {
	const [show, setShow] = useState(false);
	const [search, setSearch] = useState('');
	const [data2, setData] = useState([]);
	// //removing data
	const handleRemoveData = (index) => {
		// Create a copy of the data array
		const newData = [...data2];

		// Remove the item at the specified index
		newData.splice(index, 1);

		// Update the data array
		setData(newData);

		// You may also want to update your local storage if you use it to store data
		localStorage.setItem('birthdayData', JSON.stringify(newData));
	};
	//show all birthdays
	const showAll = data.map((datas, index) => {
		return datas.name.includes(search) || search.length === 0 ? (
			<span className="" key={index}>
				<p
					key={index}
					className="transition ease-in duration-200 m-6 p-3 z-10 mx-2 flex items-center justify-between hover:shadow-c rounded"
				>
					{datas.name} : {datas.month}/{datas.day}
					<BsTrash3 onClick={() => handleRemoveData(index)} className='hover:text-gray-500'  />
				</p>
			</span>
		) : null;
	});
	return (
		<Element
			name="fifth"
			className="h-screen w-screen flex items-center justify-center flex-col overflow-x-clip"
		>
			<span className="text-3xl flex items-center justify-center m-10">
				Show All Birthdays
			</span>
			<div className=" w-2/4 h-2/4 m-3  bg-white backdrop-blur-lg border bg-opacity-80  rounded-xl p-6 shadow-b z-10  overflow-auto">
				<div className="flex flex-row justify-center mt-6 mb-6  ">
					<button
						onClick={() => setShow(!show)}
						className="flex bg-bt text-white m-6 w-44 h-10 p-7 items-center justify-center border-2 border-bt rounded-lg hover:bg-bth hover:border-bth"
					>
						{show ? 'hide all' : 'show all'}
					</button>
					<input
						type="text"
						placeholder="name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="p-3 m-6 border hover:border-bt rounded-lg"
					/>
				</div>
				<div className="flex flex-col justify-center items center ">
					{show && showAll}
				</div>
			</div>
			<span className="blob5"></span>
		</Element>
	);
};

export default ShowAll;
