<script>
    import { selectedDay, DAYS } from "../dataStore";
    export let day;
    export let thisDay;
    import { prettyPrintTime, isArrayOfArrays } from "../../code/util";
</script>

<!-- // TODO: Remove logic from here, no if, just display -->
<div>
    {#if thisDay}
        {#if isArrayOfArrays(thisDay.startTime)}
            {day}: {#each thisDay.startTime as start, index}{prettyPrintTime(start)} - {prettyPrintTime(
                thisDay.endTime[index]
            )}, {/each}
        {:else}
            {day}: {prettyPrintTime(thisDay.startTime)} - {prettyPrintTime(
                thisDay.endTime
            )}
        {/if}
    {:else if day !== "All"}
        {day}: CLOSED
    {/if}
</div>
