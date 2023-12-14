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
export const TIMES = ["All", "8", "9", "10", "11", "12", "13", "18"];

// Store object of stores here (or import JSON in)
