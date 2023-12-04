<script>
    import { selectedTime, TIMES } from "../dataStore";
</script>

<div>
    <h3>Choose a time</h3>
    {#each TIMES as time}
        <input
            type="radio"
            id={time}
            value={time}
            bind:group={$selectedTime}
        /><label for={time}>{time}</label>
    {/each}
</div>
