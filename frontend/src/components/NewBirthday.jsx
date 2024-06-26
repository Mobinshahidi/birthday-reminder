import React, { useEffect, useState } from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
const NewBirthday = () => {
	const [name, setName] = useState('');
	const [newDay, setNewDay] = useState('');
	const [newMonth, setNewMonth] = useState('');
	const [birthdayData, setBirthdayData] = useState([]);
	//use effect
	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('birthdayData')) || [];
		setBirthdayData(storedData);
	}, []);

	//adding birthday
	const addBirthday = () => {
		if (name && newDay && newMonth) {
			const newBirthday = {
				name: name,
				day: newDay,
				month: newMonth,
			};

			setBirthdayData([...birthdayData, newBirthday]);
			localStorage.setItem(
				'birthdayData',
				JSON.stringify([...birthdayData, newBirthday]),
			);
		}

		setName('');
		setNewDay('');
		setNewMonth('');
	};
	data.push(...birthdayData);

	return (
		<Element
			name="fourth"
			className="h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden"
		>
			<span className="text-3xl flex items-center justify-center m-10">
				Add A New Birthdays
			</span>

			<div className="flex flex-col w-2/4 h-2/4 m-3  backdrop-blur-lg bg-white bg-blur-36 border bg-opacity-80 rounded-xl p-6  shadow-b z-10  overflow-auto md:w-80 lg:w-3/4">
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="p-3 mb-10 border"
				/>
				<input
					type="number"
					min={1}
					max={31}
					placeholder="day"
					value={newDay}
					onChange={(e) => setNewDay(e.target.value)}
					className="p-3 mb-10 border"
				/>
				<input
					type="number"
					min={1}
					max={12}
					placeholder="month"
					value={newMonth}
					onChange={(e) => setNewMonth(e.target.value)}
					className="p-3 mb-10 border"
				/>
				<span className="flex justify-center items-center">
					<button
						onClick={addBirthday}
						className="flex p-4 bg-bt text-white w-44 mt-6 justify-center border-2border-bt rounded-lg hover:bg-bth hover:border-bth"
					>
						Add
					</button>
				</span>
			</div>
			<span className="blob4"></span>
		</Element>
	);
};

export default NewBirthday;
