import React from 'react';
import { data } from './data';


const BirthdayReminder = () => {

    const today = new Date();

    return (
        <div>
            {data.map((datas,index) => {
               return (datas.day === today.getDate() && datas.month === today.getMonth()+1) ? (
                    <p key={index}>Today is {datas.name} birthday </p>
                ):null
            }) } 
        </div>
    );
};

export default BirthdayReminder;