import React, { useEffect, useState } from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
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

	//variables
	let date = new persianDate();
	let day = date.date();
	let month = date.month();
	let year = date.year();
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
			className="h-screen w-screen flex flex-col items-center justify-center "
		>
			<span className="text-3xl flex items-center justify-center m-10">
				Add A New Birthdays
			</span>

			<div className="flex flex-col w-2/4 h-2/4 m-3 bg-opacity-25 bg-white bg-blur-36 border border-opacity-25 rounded-xl p-6 shadow-lg z-10  overflow-auto">
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
						className="flex w-44 mt-6 justify-center border-2 border-gray-950 rounded"
					>
						Add
					</button>
				</span>
			</div>
			<span className="blob"></span>
		</Element>
	);
};

export default NewBirthday;
