<script>
    import Calculator from "../lib/components/Calculator.svelte";
</script>

<main>
    <h1>Miniräknare</h1>
    <Calculator />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    h1 {
        margin-bottom: 20px;
    }
</style>