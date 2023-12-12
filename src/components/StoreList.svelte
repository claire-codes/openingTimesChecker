<script>
    import storeObject from "../data/stores.json";
    import { prettyPrintTime } from "../../code/util";
    import {
        selectedDay,
        selectedDays,
        DAYS,
        DAYS_OF_THE_WEEK,
        selectedTime,
    } from "../dataStore";
    import { timeChecker } from "../../code/checker";
    import DayDisplay from "./DayDisplay.svelte";
    console.log(storeObject.stores.length);

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

    function showTime(selectedTime, thisDay) {
        if (selectedTime === "All") {
            return true;
        } else if (!thisDay) {
            // want to refactor this when data is better
            return false;
        } else if (
            timeChecker([selectedTime, 0], thisDay.startTime, thisDay.endTime)
        ) {
            return true;
        }
        return false;
    }
</script>

<div>You have picked day: {$selectedDay}</div>
<div>You have picked day: {$selectedDays}</div>
<div>You have picked time: {$selectedTime}</div>

{#each storeObject.stores as store}
    <h2>{store.name}</h2>
    <!-- {#each store.openingTimes as days} -->
    {#each DAYS_OF_THE_WEEK as day}
        {@const thisDay = store.openingTimes.find((x) => x.day === day)}
        {#if showDisplayDay($selectedDay, $selectedDays, day)}
            {#if showTime($selectedTime, thisDay)}
                <div>
                    <DayDisplay {day} {thisDay} />
                </div>
            {/if}
        {/if}
    {/each}
{/each}
