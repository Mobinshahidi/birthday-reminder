import React from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
const BirthdayReminder = () => {
	let date = new persianDate();
	let day = date.date();
	let month = date.month();
    let year = date.year();
	const birthdayElement = data.map((datas, index) => {
		return datas.day === day && datas.month === month ? (
			<p key={index}>Today is {datas.name} birthday <span>{datas.month}/{datas.day}</span></p>
		) : null;
	});
	const isAnyoneBirthdayToday = birthdayElement.some(
		(element) => element !== null,
	);
	const upComingBirthdays = [];
	for (let daysRemaining = 1; daysRemaining <= 7; daysRemaining++) {
		const upComingBirthday = data.find((datas) => {
			return datas.day === daysRemaining && datas.month === month;
		});

		if (upComingBirthday) {
			upComingBirthdays.push(
				<p key={daysRemaining}>
					{upComingBirthday.name}`s birthday is in {daysRemaining} day
					{daysRemaining > 1 ? 's' : ''}
				</p>,
			);
		}
	}
	return (
		<div className='text-xl font-bold' >
            <span>{year}/{month}/{day}</span>
			<Element name="first" className='h-screen w-screen ' >
				{birthdayElement}
				{isAnyoneBirthdayToday ? null : <p>today nobody`s birthday</p>}
			</Element>
			<Element name="second" className='h-screen w-screen'>
				{upComingBirthdays.length > 0 ? (
					upComingBirthdays
				) : (
					<p>No upcoming birthdays</p>
				)}
			</Element>
		</div>
	);
};

export default BirthdayReminder;
