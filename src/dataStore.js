import { atom } from "nanostores";

export const selectedDay = atom("All");
export const selectedDays = atom([]);
export const DAYS = [
    "All",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
export const DAYS_OF_THE_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export const selectedTime = atom("All");
export const TIMES = [
    "All",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
];
