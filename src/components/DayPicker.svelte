<script>
    import { selectedDay, selectedDays, DAYS_OF_THE_WEEK } from "../dataStore";
</script>

<div>
    <h3>Choose a day</h3>
    <input type="radio" id="All" value="All" bind:group={$selectedDay} /><label
        for="All">All</label
    >
    <input
        type="radio"
        id="choose"
        value="choose"
        bind:group={$selectedDay}
    /><label for="choose">Choose a day</label>
    {#each DAYS_OF_THE_WEEK as day}
        <input
            type="checkbox"
            id={day}
            value={day}
            disabled={$selectedDay === "All"}
            bind:group={$selectedDays}
        /><label for={day}>{day}</label>
    {/each}
</div>
