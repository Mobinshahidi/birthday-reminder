import React, { useEffect, useState } from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
const BirthdayReminder = () => {
	//use states
	const [name, setName] = useState('');
	const [newDay, setNewDay] = useState('');
	const [newMonth, setNewMonth] = useState('');
	const [birthdayData, setBirthdayData] = useState([]);
	const [show, setShow] = useState(false);

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

	//checking today is anyone birthday
	const birthdayElement = data.map((datas, index) => {
		return datas.day === day && datas.month === month ? (
			<p
				key={index}
				className="transition ease-in-out duration-700 m-6 p-3 z-10 mx-2 border-b-2 border-white hover:shadow-bx rounded-t"
			>
				Today is {datas.name} birthday
			</p>
		) : null;
	});
	const isAnyoneBirthdayToday = birthdayElement.some(
		(element) => element !== null,
	);

	//check anyone birthday in one week
	const upComingBirthdays = [];
	for (let daysRemaining = 1; daysRemaining <= 7; daysRemaining++) {
		const upComingBirthday = data.find((datas) => {
			return datas.day === daysRemaining && datas.month === month;
		});
		if (upComingBirthday) {
			upComingBirthdays.push(
				<p key={daysRemaining}>
					{console.log(upComingBirthday)}
					{upComingBirthday.name}'s birthday is in {daysRemaining} day
					{daysRemaining > 1 ? 's' : ''}
				</p>,
			);
		}
	}

	//check is anyone born in this month or not
	const thisMonthBirthday = data.map((datas, index) => {
		return datas.month === month ? (
			<p key={index}>this month is {datas.name}'s birthday</p>
		) : null;
	});

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

	//show all birthdays
	const showAll = data.map((datas, index) => {
		return (
			<p key={index}>
				{datas.name} : {datas.month}/{datas.day}
			</p>
		);
	});
	return (
		<div className="text-xl font-bold m-0 p-0 bg-pr text-white  ">
			<Element
				name="first"
				className="h-screen w-screen flex flex-col items-center justify-center"
			>
				<span className="blob"></span>
				<span className="text-3xl flex items-center justify-center m-20">
					{year}/{month}/{day}
				</span>
				<div className=" w-1/4 h-2/4 m-3 bg-opacity-25 bg-white bg-blur-18 border border-opacity-25 rounded-xl p-6 shadow-lg z-10  overflow-auto">
					<span className="text-2xl flex items-center justify-center mb-6">
						Today Birthdays
					</span>
					<span className="text-1 mb-10">
						{birthdayElement}
						{isAnyoneBirthdayToday ? null : (
							<p className="flex items-center justify-center">
								today nobody's birthday
							</p>
						)}
					</span>
				</div>
			</Element>
			<Element
				name="second"
				className="h-screen w-screen flex flex-col items-center justify-center"
			>
				<div className=" w-1/4 h-2/4 m-3 bg-opacity-25 bg-white bg-blur-18 border border-opacity-25 rounded-xl p-6 shadow-lg z-10  overflow-auto">
					{upComingBirthdays.length > 0 ? (
						upComingBirthdays
					) : (
						<p>No upcoming birthdays</p>
					)}
					<span className="blob"></span>
				</div>
			</Element>
			<Element
				name="third"
				className="h-screen w-screen flex flex-col items-center justify-center"
			>
				<span className="blob"></span>
				<div className=" w-1/4 h-2/4 m-3 bg-opacity-25 bg-white bg-blur-18 border border-opacity-25 rounded-xl p-6 shadow-lg z-10  overflow-auto">
					{thisMonthBirthday}
				</div>
			</Element>
			<Element
				name="fourth"
				className="h-screen w-screen flex items-center justify-center "
			>
				<div>
					<h1>Add a new Birthday</h1>
					<input
						type="text"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="number"
						min={1}
						max={31}
						placeholder="day"
						value={newDay}
						onChange={(e) => setNewDay(e.target.value)}
					/>
					<input
						type="number"
						min={1}
						max={12}
						placeholder="month"
						value={newMonth}
						onChange={(e) => setNewMonth(e.target.value)}
					/>
					<button onClick={addBirthday}>Add</button>
				</div>
				<span className="blob"></span>
			</Element>
			<Element
				name="fifth"
				className="h-screen w-screen flex items-center justify-center flex-col"
			>
				<h1>Show all birthdays</h1>
				<button onClick={() => setShow(!show)}>
					{show ? 'hide all' : 'show all'}
				</button>
				<span className="text-justify">{show && showAll}</span>
				<span className="blob"></span>
			</Element>
		</div>
	);
};

export default BirthdayReminder;
