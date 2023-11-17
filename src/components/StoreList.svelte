<script>
    import storeObject from "../../data/test/stores.json";
    import { prettyPrintTime } from "../../code/util";
</script>

{#each storeObject.stores as store}
    <h2>{store.name}</h2>
    {#each store.openingTimes as days}
        <div>
            {days.day}: {prettyPrintTime(days.startTime)} - {prettyPrintTime(
                days.endTime
            )}
        </div>
    {/each}
{/each}
