<script>
    import KeyPad from './keypad.svelte';
    
    export let value = '';
    
    let input = '';
    let result = '';
 
    $: value = input; 
 
    const appendToInput = (val) => {
        input += val;
    };
 
    const calculate = () => {
        try {
            result = eval(input.replace('x', '*').replace(',', '.'));
            value = result; 
        } catch {
            value = 'Error';
        }
    };
 
    const clearInput = () => {
        input = '';
        result = '';
        value = ''; 
    };
 </script>

<style>
    .display {
        width: 100%;
        height: 80px;
        background-color: #f3f3f3;
        border: 2px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        font-size: 24px;
        color: #333;
        text-align: right;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 20px;
    }

    .calculator-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>

 