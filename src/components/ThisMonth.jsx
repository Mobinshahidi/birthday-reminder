import React, { useEffect, useState } from 'react';
import { data } from './data';
import { Element } from 'react-scroll';
import persianDate from 'persian-date';
const ThisMonth = () => {
    	//variables
	let date = new persianDate();
	let day = date.date();
	let month = date.month();
	let year = date.year();

	//check is anyone born in this month or not
	const thisMonthBirthday = data.map((datas, index) => {
		return datas.month === month ? (
			<p
				key={index}
				className="transition ease-in duration-200 m-6 p-3 z-10 mx-2  hover:shadow-bx rounded"
			>
				this month is {datas.name}'s birthday
			</p>
		) : null;
	});
    return (
        <Element
        name="third"
        className="h-screen w-screen flex flex-col items-center justify-center"
    >
        <span className="blob"></span>
        <span className="text-3xl flex items-center justify-center m-10">
            This Month Birthdays
        </span>
        <div className=" w-2/4 h-2/4 m-3 bg-opacity-25 bg-white bg-blur-15 border border-opacity-25 rounded-xl p-6 shadow-lg z-10  overflow-auto">
            {thisMonthBirthday}
        </div>
    </Element>
    );
};

export default ThisMonth;