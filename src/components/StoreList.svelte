<script>
    import storeObject from "../data/stores.json";
    import { prettyPrintTime, isArrayOfArrays } from "../../code/util";
    import {
        selectedDay,
        selectedDays,
        selectedTime,
    } from "../nanostores/dataStore";
    import { timeChecker } from "../../code/checker";
    import DayDisplay from "./DayDisplay.svelte";
    import { one, two, DAYS_OF_THE_WEEK, sum } from "../svelteStore/dataStore";

    // Work out how to edit the stores data with filters

    // Data formatting stuff, probably better somewhere else
    // let formattedStores = storeObject.stores.each((store) => {
    //     let tmpOpeningTimes = DAYS_OF_THE_WEEK.each((day) => {
    //         if (store.openingTimes.find((value) => value.day === day)) {
    //             return {...store.openingTimes, message: "Open"}
    //         } else {
    //             return {message: "Closed"};
    //         }
    //     })
    //     return {
    //         "name": store.name,
    //         "openingTimes": tmpOpeningTimes
    //     }
    // })
    // console.log(formattedStores)
    // End of data formatting

    function showDisplayDay(selectedDay, selectedDays, day) {
        if (selectedDay === "All") {
            return true;
        } else if (selectedDays.includes(day)) {
            return true;
        }
        return false;
    }

    function thisIsStupid(selectedTime, thisDay) {
        if (
            isArrayOfArrays(thisDay.startTime) &&
            isArrayOfArrays(thisDay.endTime)
        ) {
            let isOpen = false;
            for (let j = 0; j < thisDay.startTime.length; ++j) {
                isOpen = timeChecker(
                    [selectedTime, 0],
                    thisDay.startTime[j],
                    thisDay.endTime[j]
                );
                if (isOpen) {
                    break;
                }
            }
            return isOpen;
        } else {
            return timeChecker(
                [selectedTime, 0],
                thisDay.startTime,
                thisDay.endTime
            );
        }
    }

    function showTime(selectedTime, thisDay) {
        if (selectedTime === "All") {
            return true;
        } else if (!thisDay) {
            // want to refactor this when data is better
            return false;
        } else if (thisIsStupid(selectedTime, thisDay)) {
            return true;
        }
        return false;
    }
</script>

<div>You have picked day: {$selectedDay}</div>
<div>You have picked day: {$selectedDays}</div>
<div>You have picked time: {$selectedTime}</div>

<input type="number" bind:value={$one} />
<input type="number" bind:value={$two} />
<div>{$sum}</div>

<div class="store-grid">
    {#each storeObject.stores as store}
        <div class="store-container">
            <h2>{store.name}</h2>
            <!-- {#each store.openingTimes as days} -->
            <div class="day-container">
                {#each DAYS_OF_THE_WEEK as day}
                    {@const thisDay = store.openingTimes.find(
                        (x) => x.day === day
                    )}
                    {#if showDisplayDay($selectedDay, $selectedDays, day)}
                        {#if showTime($selectedTime, thisDay)}
                            <DayDisplay {day} {thisDay} />
                        {/if}
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .day-container {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
    }
    .store-container {
        border: 1px solid black;
        padding: 12px;
        display: grid;
        grid-template-rows: 1fr auto;
        gap: 12px;
    }
    .store-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
        gap: 2rem;
    }
</style>
