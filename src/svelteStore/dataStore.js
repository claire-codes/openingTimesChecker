import { writable, derived } from "svelte/store";
import allLibraries from "../data/libraries.json";

export const libraryObject = writable(allLibraries);

export const two = writable(2);

export const one = writable(1);

export const sum = derived([one, two], ([$one, $two]) => $one + $two);

export const DAYS_OF_THE_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

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

export const selectedTime = writable("All");
export const selectedDay = writable("All");
export const selectedDays = writable([]);
export const storesWithDays = derived(selectedDay, ($selectedDay) => {
    return $selectedDay === "All" ? "all is selected" : "Other is selected"
})
