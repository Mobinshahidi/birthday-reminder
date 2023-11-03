import React, { useEffect, useState } from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
import BirthdayElement from './BirthdayElement';
import Upcoming from './Upcoming';
import ThisMonth from './ThisMonth';
import NewBirthday from './NewBirthday';
import ShowAll from './ShowAll';
const BirthdayReminder = () => {
	return (
		<div className="text-xl font-bold m-0 p-0 box-border">
			<BirthdayElement />
			<Upcoming />
			<ThisMonth />
			<NewBirthday />
			<ShowAll />
		</div>
	);
};

export default BirthdayReminder;
