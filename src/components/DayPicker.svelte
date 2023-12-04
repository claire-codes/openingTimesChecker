<script>
    import { selectedDay, DAYS } from "../dataStore";
</script>

<div>
    <h3>Choose a day</h3>
    {#each DAYS as day}
        <input
            type="radio"
            id={day}
            value={day}
            bind:group={$selectedDay}
        /><label for={day}>{day}</label>
    {/each}
</div>
