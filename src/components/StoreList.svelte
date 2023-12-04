<script>
    import storeObject from "../../data/test/stores.json";
    import { prettyPrintTime } from "../../code/util";
	import { selectedDay } from '../dataStore';
	import { selectedTime } from '../dataStore';
	import { timeChecker } from '../../code/checker';
</script>

<div>You have picked day: {$selectedDay}</div>
<div>You have picked time: {$selectedTime}</div>

{#each storeObject.stores as store}
    <h2>{store.name}</h2>
    {#each store.openingTimes as days}
		{#if $selectedDay === "All" || days.day.toLowerCase() === $selectedDay.toLowerCase()}
		{#if $selectedTime === "All" || timeChecker([$selectedTime,0,0],days.startTime,days.endTime)}
        <div>
            {days.day}: {prettyPrintTime(days.startTime)} - {prettyPrintTime(
                days.endTime
            )}
        </div>
		{/if}
		{/if}
    {/each}
{/each}
