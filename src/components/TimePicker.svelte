<script>
    import { selectedTime, TIMES } from "../svelteStore/dataStore";
</script>

<div>
    <h3>Choose a time</h3>
    <select bind:value={$selectedTime}>
        {#each TIMES as time}
            <option value={time}>{time} </option>
        {/each}
    </select>
</div>
