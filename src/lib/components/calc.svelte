<script>
    import KeyPad from './keypad.svelte';
    
    let value = '';
    let input = '';

    const appendToInput = (val) => {
        input += val;
        value = input; 
    };

    const calculate = () => {
        try {
            value = eval(input.replace('x', '*').replace(',', '.'));
        } catch {
            value = 'Error';
        }
    };

    const clearInput = () => {
        input = '';
        value = ''; 
    };
</script>

<main>
    <div class="display">
        {value}
    </div>

    <section id="keyBoard">
        <KeyPad {appendToInput} {calculate} {clearInput} />
    </section>
</main>

<style lang="scss">
    .display {
        background-color: #333;
        color: #fff;
        padding: 15px;
        text-align: right;
        font-size: 28px;
        margin-bottom: 20px;
        border-radius: 5px;
        font-family: 'Courier New', monospace;
        width: 100%;
        max-width: 300px;
    }

    #keyBoard {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
    }
</style>
