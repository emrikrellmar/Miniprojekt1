<script>
    import Display from './Display.svelte';
    import KeyPad from './KeyPad.svelte';
    
    let value = '';
    let input = '';

    const appendToInput = (val) => {
        input += val;
        value = input; 
    };

    const calculate = () => {
        try {
            value = eval(input.replace('x', '*').replace(',', '.'));
            input = value.toString();
        } catch {
            value = 'Error';
            input = '';
        }
    };

    const clearInput = () => {
        input = '';
        value = ''; 
    };
</script>

<div class="calculator-container">
    <Display {value} />
    <KeyPad {appendToInput} {calculate} {clearInput} />
</div>

<style>
    .calculator-container {
        max-width: 400px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>