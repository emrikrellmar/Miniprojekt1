<script>
    // KeyPad-komponenten är miniräknarens knappsats som låter
    // användaren trycka på siffror och symboler för att mata in beräkningar.
    
    export let appendToInput;  // Funktion för att lägga till input
    export let calculate;      // Funktion för att beräkna resultatet
    export let clearInput;     // Funktion för att rensa input
</script>

<section id="keyBoard">
    <!-- Knappar för siffror och operatorer -->
    <button on:click={() => appendToInput('7')}>7</button>
    <button on:click={() => appendToInput('8')}>8</button>
    <button on:click={() => appendToInput('9')}>9</button>
    <button on:click={() => appendToInput('+')}>+</button>

    <button on:click={() => appendToInput('4')}>4</button>
    <button on:click={() => appendToInput('5')}>5</button>
    <button on:click={() => appendToInput('6')}>6</button>
    <button on:click={() => appendToInput('-')}>-</button>

    <button on:click={() => appendToInput('1')}>1</button>
    <button on:click={() => appendToInput('2')}>2</button>
    <button on:click={() => appendToInput('3')}>3</button>
    <button on:click={() => appendToInput('x')}>x</button>

    <button on:click={() => appendToInput(',')}>,</button>
    <button on:click={() => appendToInput('0')}>0</button>
    <button on:click={calculate}>=</button>
    <button on:click={() => appendToInput('/')}>/</button>

    <!-- Knapp för att rensa input -->
    <button on:click={clearInput} class="clear">CLEAR</button>
</section>

<style>
    #keyBoard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
    }

    button {
        font-size: 2rem;
        padding: 10px;
        border: none;
        background-color: #333;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #666;
    }

    .clear {
        grid-column: span 4;  /* Gör CLEAR-knappen bredare */
    }
</style>