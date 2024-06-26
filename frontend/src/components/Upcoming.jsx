import React from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
const Upcoming = () => {
	//variables
	let date = new persianDate();
	let day = date.date();
	let month = date.month();
	//check anyone birthday in one week
	const upComingBirthdays = [];
	for (let remain = 1; remain <= 7; remain++) {
		const upComingBirthday = data.find((datas) => {
			return datas.month == month && datas.day == day + remain;
		});
		if (upComingBirthday) {
			upComingBirthdays.push(
				<p
					key={remain}
					className="transition ease-in duration-200 m-6 p-3 z-10 mx-2  hover:shadow-c rounded"
				>
					{upComingBirthday.name}'s birthday is in {remain} day
					{remain > 1 ? 's' : ''}
				</p>,
			);
		}
	}
	return (
		<Element
			name="second"
			className="h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden "
		>
			<span className="text-3xl flex items-center justify-center m-10">
				Upcoming Birthdays
			</span>
			<div className=" w-2/4 h-2/4 m-3  bg-white backdrop-blur-lg border bg-opacity-80  rounded-xl p-6 shadow-b z-10  overflow-auto md:w-80 lg:w-3/4">
				<span className="text-1 mb-10">
					{upComingBirthdays.length > 0 ? (
						upComingBirthdays
					) : (
						<p className="flex justify-center m-6">No upcoming birthdays</p>
					)}
				</span>
			</div>
			<span className="blob2"></span>
		</Element>
	);
};

export default Upcoming;
