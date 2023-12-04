<script>
    import { isCartOpen } from "../cartStore";
</script>

<!--use "$" to read the store value-->
<button
    on:click={() => {
        console.log("Hello");
        isCartOpen.set(!$isCartOpen);
    }}>Cart {$isCartOpen}</button
>
