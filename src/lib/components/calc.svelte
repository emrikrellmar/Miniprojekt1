<script>
    import KeyPad from './KeyPad.svelte';

    let input = '';
    let result = '';

    const appendToInput = (value) => {
        input += value;
    };

    const calculate = () => {
        try {
            result = eval(input.replace('x', '*').replace(',', '.'));
        } catch (e) {
            result = 'Error';
        }
    };

    const clearInput = () => {
        input = '';
        result = '';
    };
</script>

<main>
    <input type="text" id="lcd" bind:value={input} disabled />
    <section id="keyBoard">
        <KeyPad {appendToInput} {calculate} {clearInput} />
    </section>
</main>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 150%;
        margin: 40px;
    }

    body {
        font-size: 1.6rem;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main input {
        width: 290px;
        font-size: 3.5rem;
        margin-bottom: 10px;
        background-color: black;
        color: green;
        text-align: right;
        padding: 10px 4px;
        font-family: lcd, sans-serif;
        border: 1px solid yellow;
        border-radius: 4px;
    }

    @media (max-width: 767px) {
        main input {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 339px) {
        main input {
            font-size: 2rem;
        }
    }
</style>
