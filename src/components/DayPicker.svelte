<script>
    import { selectedDay, DAYS } from "../dataStore";
</script>

<div>
    {#each DAYS as day}
        <input
            type="radio"
            id={day}
            value={day}
            bind:group={$selectedDay}
        /><label for={day}>{day}</label>
    {/each}
</div>
