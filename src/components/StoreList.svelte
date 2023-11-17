<script>
	import storeObject from "../../data/test/stores.json"
</script>


{#each storeObject.stores as store}
<h2>{store.name}</h2>
{#each store.openingTimes as days}
<div>{days.day}: {days.startTime} - {days.endTime}</div>

{/each}
{/each}