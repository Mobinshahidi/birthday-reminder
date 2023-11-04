import React from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
const ThisMonth = () => {
	//variables
	let date = new persianDate();
	let month = date.month();
	//check is anyone born in this month or not
	const thisMonthBirthday = data.map((datas, index) => {
		return datas.month === month ? (
			<p
				key={index}
				className="transition ease-in duration-200 m-6 p-3 z-10 mx-2  hover:shadow-c rounded"
			>
				this month is {datas.name}'s birthday
			</p>
		) : null;
	});
	return (
		<Element
			name="third"
			className="h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden"
		>
			<span className="blob3"></span>
			<span className="text-3xl flex items-center justify-center m-10">
				This Month Birthdays
			</span>
			<div className=" w-2/4 h-2/4 m-3  bg-white backdrop-blur-lg border bg-opacity-80  rounded-xl p-6 shadow-b z-10  overflow-auto">
				<span className="text-1 mb-10">
					{thisMonthBirthday !== "" ? (
						thisMonthBirthday
					) : (
						<p className="flex justify-center m-6">No one born's in this month</p>
					)}
				</span>
			</div>
		</Element>
	);
};

export default ThisMonth;
