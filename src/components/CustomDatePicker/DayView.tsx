import { WeekDay } from '../../utils/date';

function DayView({ day, onClick }: { day: WeekDay, onClick: () => void }) {
    const cn0 = " flex justify-center w-7 h-7 text-center text-base font-normal ";
    let cn = "";
    if (day.selected) {
        cn += !day.disabled ?
            "bg-sky-500 rounded-full text-white text-center cursor-pointer" :
            "bg-neutral-400 rounded-full text-white text-center";
    } else if (day.isToday) {
        cn += !day.disabled ?
            "rounded-full border border-sky-500 text-center text-sky-500 text-base font-normal cursor-pointer" :
            "rounded-full border border-neutral-400 text-center text-neutral-400 text-base font-normal";
    } else if (day.disabled) {
        cn += "text-neutral-400";
    } else {
        cn += day.disabled || day.day === 0 ? "" : "cursor-pointer";
    }
    return (
        <div onClick={day.disabled || day.day === 0 ? undefined : onClick} className={cn0 + cn}>{day.label}</div>
    )
}

export default DayView;