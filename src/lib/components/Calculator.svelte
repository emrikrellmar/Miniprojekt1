

<script>
    // Tanken med calculator-komponenten är att den ska vara hjärnan i 
    // miniräknaren som håller koll på vad 
    // användaren knappar in, utför beräkningar när det behövs, 
    // och ser till att rätt information visas på skärmen och att 
    // knapparna fungerar som de ska

    import Display from './Display.svelte';
    import KeyPad from './KeyPad.svelte';
    
    // Lagrar det aktuella värdet som visas i displayen
    let value = '';
    // Lagrar den aktuella inmatningen
    let input = '';

    // Funktion för att lägga till siffror och operatorer till input
    const appendToInput = (val) => {
        input += val;
        value = input; 
    };

    // Funktion för att utföra beräkningen
    const calculate = () => {
        try {
            // Ersätter 'x' med '*' för multiplikation och ',' med '.' för decimaler
            value = eval(input.replace('x', '*').replace(',', '.'));
            input = value.toString();
        } catch {
            // Try catch, om beräkningen misslyckas, visa 'Error'
            value = 'Error';
            input = '';
        }
    };

    // Funktion för att rensa input och display
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