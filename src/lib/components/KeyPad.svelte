<script>
    export let appendToInput;
    export let calculate;
    export let clearInput;
</script>

<section id="keyBoard">
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
        grid-column: span 4;
    }
</style>