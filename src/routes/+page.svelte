<script>
    import KeyPad from "../lib/components/keypad.svelte";
    import Display from "../lib/components/display.svelte"; // Importera displaykomponenten
    export let value;  // Accepts value from the parent component

    const appendToInput = (val) => {
        value += val;
    };

    const calculate = () => {
        try {
            value = eval(value.replace('x', '*').replace(',', '.'));
        } catch {
            value = 'Error';
        }
    };

    const clearInput = () => {
        value = ''; 
    };

</script>

<main>
    <h1>Miniräknare</h1>
    <Display {value} /> <!-- Använd displaykomponenten -->
    <KeyPad {appendToInput} {calculate} {clearInput}/>

    <div class="display">
        {value}  <!-- Displays the passed value -->
    </div>

</main>
