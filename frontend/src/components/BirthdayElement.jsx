import React from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
const BirthdayElement = () => {
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
				className="transition ease-in duration-200 m-6 p-3 z-10 mx-2  hover:shadow-c rounded"
			>
				Today is {datas.name} birthday
			</p>
		) : null;
	});
	const isAnyoneBirthdayToday = birthdayElement.some(
		(element) => element !== null,
	);

	return (
		<Element
			name="first"
			className="h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden "
		>
			<span className="blob1"></span>
			<span className="text-3xl flex items-center justify-center m-10 ">
				Today Birthdays
			</span>
			<div className=" w-2/4 h-2/4 m-3  bg-white backdrop-blur-lg border bg-opacity-80  rounded-xl p-6 shadow-b z-10  overflow-auto md:w-80 lg:w-3/4  ">
				<span className="text-2xl flex items-center justify-center mb-6">
					{year}/{month}/{day}
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
	);
};

export default BirthdayElement;
