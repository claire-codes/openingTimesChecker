<script>
    import { selectedDay, DAYS } from "../dataStore";
    export let day;
    export let thisDay;
    import { prettyPrintTime } from "../../code/util";
</script>

<!-- // TODO: Remove logic from here, no if, just display -->
<div>
    {#if thisDay}
        {day}: {prettyPrintTime(thisDay.startTime)} - {prettyPrintTime(
            thisDay.endTime
        )}
    {:else if day !== "All"}
        {day}: CLOSED
    {/if}
</div>
