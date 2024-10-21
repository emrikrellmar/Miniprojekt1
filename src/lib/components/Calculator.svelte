
    <script>
    // Tanken med calculator-komponenten är att den ska vara hjärnan i 
    // miniräknaren och den som håller koll på vad 
    // användaren knappar in, utför beräkningar när det behövs, 
    // och ser till att rätt information visas på skärmen och att 
    // knapparna fungerar som de ska

    import Display from './Display.svelte';
    import KeyPad from './KeyPad.svelte';
    
    let value = '';
    let input = '';

    const appendToInput = (val) => {
        input += val;
        value = input; 
    };

    // Hjälpfunktion för att kontrollera om en karaktär är en operator
    const isOperator = (c) => ['+', '-', 'x', '/'].includes(c);

    // Hjälpfunktion för att utföra en operation
    const operate = (a, b, op) => {
        switch(op) {
            case '+': return a + b;
            case '-': return a - b;
            case 'x': return a * b;
            case '/': return b !== 0 ? a / b : NaN;
            default: return NaN;
        }
    };

    const calculate = () => {
        try {
            let tokens = input.replace(/,/g, '.').match(/(\d+\.?\d*)|[+\-x/]/g) || [];
            let numbers = [];
            let operators = [];

            tokens.forEach(token => {
                if (isOperator(token)) {
                    while (operators.length && 
                           ((token !== 'x' && token !== '/') || 
                            (operators[operators.length - 1] !== '+' && operators[operators.length - 1] !== '-'))) {
                        let b = numbers.pop();
                        let a = numbers.pop();
                        let op = operators.pop();
                        numbers.push(operate(a, b, op));
                    }
                    operators.push(token);
                } else {
                    numbers.push(parseFloat(token));
                }
            });

            while (operators.length) {
                let b = numbers.pop();
                let a = numbers.pop();
                let op = operators.pop();
                numbers.push(operate(a, b, op));
            }

            value = numbers[0].toString();
            input = value;
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