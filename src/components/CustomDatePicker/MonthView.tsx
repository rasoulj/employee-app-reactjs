import { useState } from "react";

import chevronLeftIcon from "../../assets/icons/chevron-left.svg"
import chevronRightIcon from "../../assets/icons/chevron-right.svg"
import { MONTHS, getWeekDays } from "../../utils/date";
import DayView from "./DayView";
import MoreButtons from "./MoreButtons";



function MonthView({ value, onChange, className, fromDate }: { value?: Date, onChange: (value?: Date) => void, className?: string, fromDate?: Date }) {
    const curDate = value ?? new Date();

    const [year, setYear] = useState(curDate?.getFullYear());
    const [month, setMonth] = useState(curDate?.getMonth());

    const allDays = getWeekDays(year, month, value, fromDate);

    const addMonth = (n: number) => {
        const m = month + n;
        const y = year;
        if(m >= 12) {
            setYear(y + 1);
            setMonth(0);
        } else if(m < 0) {
            setYear(y - 1);
            setMonth(11);
        } else {
            setYear(y);
            setMonth(m);
        }
    }

    const setMoreDate = (date?: Date) => {
        onChange(date);
        if (!date) return;
        setYear(date.getFullYear());
        setMonth(date.getMonth());
    }


    
    return <>
        <MoreButtons fromDate={fromDate} onChange={setMoreDate} value={value}  />
        <div className={`flex justify-center ${className ?? ""}`}>
            <button className="m-2" onClick={() => addMonth(-1)}>
                <img src={chevronLeftIcon} />
            </button>
            <span className="m-2 w-32 text-center">{MONTHS[month]} {year}</span>
            <button className="m-2" onClick={() => addMonth(1)}>
                <img src={chevronRightIcon} />
            </button>

        </div>

        {/* <div>
            {getDays(year, month)} - {getStartWeekDay(year, month)}
        </div> */}
        <div className="grid grid-cols-7 gap-4 m-4">
            {allDays.map(day => <DayView
                key={day.index}
                day={day}
                onClick={() => onChange(new Date(year, month, day.day))}
            />)}
        </div>

        <div className="w-16 h-16"></div>
    </>
}

export default MonthView;