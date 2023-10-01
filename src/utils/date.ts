import moment from "moment";

export interface WeekDay {
    label?: string;
    index: number;
    day: number;
    disabled?: boolean;
    selected?: boolean;
    isTitle?: boolean;
    isToday?: boolean;
}

export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const WEEK_DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
]

function getStartWeekDay(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

const getDays = (year: number, month: number) => {
    return new Date(year, month+1, 0).getDate();
};

function translate(start: number, days: number, i: number) {
    if(i < start) return undefined;
    if(i >= start + days) return undefined;
    return i - start + 1;
}

function isToday(date: Date) {
    const dd = new Date();
    return date.getFullYear() === dd.getFullYear() &&
        date.getMonth() === dd.getMonth() &&
        date.getDate() === dd.getDate();
}

export function lessThan(date1: Date, date2?: Date) {
    if(!date2) return false;
    return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) < new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
}

export function isSameDay(date1: Date, date2?: Date) {
    if (!date2) return false;
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}

export const getWeekDays = (year: number, month: number, selected?: Date, fromDate?: Date) => {
    const start = getStartWeekDay(year, month);
    const days = getDays(year, month);
    const weeks: WeekDay[] = [];
    for (let i = -7; i < 42; i++) {
        if (i < 0) {
            weeks.push({
                day: 0,
                index: i,
                label: WEEK_DAYS[i+7],
                isTitle: true,
            })
        } else {
            const tri = translate(start, days, i);
            weeks.push({
                day: tri ?? 0,
                isToday: !!tri && isToday(new Date(year, month, tri)),
                selected: !!tri && isSameDay(new Date(year, month, tri), selected),
                disabled: !!tri && lessThan(new Date(year, month, tri), fromDate),
                index: i,
                label: tri ? tri.toString() : "",
                isTitle: false,
            }) ;
        }
    }
    return weeks;
}

export function formatDate(date?: Date, defValue: string = "No date") {
    if (!date) return defValue;
    return moment(date).format("D MMM YYYY");
}

export function formatDateMain(date?: Date, defValue: string = "No date") {
    if (!date) return defValue;
    return moment(date).format("D MMM, YYYY");
}


export function nextDay(n: number) {
    const m = new Date();
    m.setDate(m.getDate() + n);
    return m;
}

export function nextDayName(n: number) {
    const m = new Date();
    m.setDate(m.getDate() + n);
    return moment(m).format("dddd");
}