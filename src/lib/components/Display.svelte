<script>
    // Display-komponenten är miniräknarens skärm som visar 
    // siffrorna och resultaten så att användaren kan se vad som händer.
    export let value = '';
</script>

<div class="display">
    {value}
</div>

<style>
    .display {
        width: 100%;
        height: 80px;
        background-color: #333;
        color: #fff;
        border: 2px solid #ccc;
        border-radius: 8px;
        padding: 10px;
        font-size: 28px;
        text-align: right;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 20px;
        font-family: 'Courier New', monospace;
    }
</style>