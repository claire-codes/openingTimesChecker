<script>
    import { selectedDay, DAYS } from "../dataStore";
    export let day;
    export let thisDay;
    import { prettyPrintTime, isArrayOfArrays } from "../../code/util";
</script>

<!-- // TODO: Remove logic from here, no if, just display -->
{#if thisDay}
    {#if isArrayOfArrays(thisDay.startTime)}
        <div class="day">{day}:&nbsp;</div>
        <div class="times">
            {#each thisDay.startTime as start, index}
                {#if index > 0},
                {/if}{prettyPrintTime(start)} - {prettyPrintTime(
                    thisDay.endTime[index]
                )}
            {/each}
        </div>
    {:else}
        <div class="day">{day}:&nbsp;</div>
        <div class="times">
            {prettyPrintTime(thisDay.startTime)} - {prettyPrintTime(
                thisDay.endTime
            )}
        </div>
    {/if}
{:else if day !== "All"}
    <div class="day">{day}:&nbsp;</div>
    <div class="times">CLOSED</div>
{/if}
