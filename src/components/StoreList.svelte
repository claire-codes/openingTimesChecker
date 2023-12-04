<script>
    import storeObject from "../../data/test/stores.json";
    import { prettyPrintTime } from "../../code/util";
	import { selectedDay } from '../dataStore';
</script>

<div>You have picked {$selectedDay}</div>

{#each storeObject.stores as store}
    <h2>{store.name}</h2>
    {#each store.openingTimes as days}
		{#if $selectedDay === "All" || days.day.toLowerCase() === $selectedDay.toLowerCase()}
        <div>
            {days.day}: {prettyPrintTime(days.startTime)} - {prettyPrintTime(
                days.endTime
            )}
        </div>
		{/if}
    {/each}
{/each}
