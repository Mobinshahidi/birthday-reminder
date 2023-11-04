import React from 'react';
import BirthdayElement from './BirthdayElement';
import Upcoming from './Upcoming';
import ThisMonth from './ThisMonth';
import NewBirthday from './NewBirthday';
import ShowAll from './ShowAll';
import Navbar from './Navbar';
const BirthdayReminder = () => {
	return (
		<div className="w-screen text-xl font-bold m-0 p-0 box-border overflow-x-hidden">
			<Navbar/>
			<BirthdayElement />
			<Upcoming />
			<ThisMonth />
			<NewBirthday />
			<ShowAll />
		</div>
	);
};

export default BirthdayReminder;
