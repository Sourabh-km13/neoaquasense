function calculateFootprint() {
    const item = document.getElementById('itemInput').value.trim().toLowerCase();
    const waterFootprintData = {
        apple: '822 L/kg',
        banana: '790 L/kg',
        orange: '560 L/kg',
        grape: '610 L/kg',
        mango: '1,600 L/kg',
        peache: '1,300 L/kg',
        pineapple: '450 L/kg',
        avocado: '1,981 L/kg',
        strawberrie: '276 L/kg',
        watermelon: '50 L/kg',
        cherry: '1,990 L/kg',
        plum: '1,000 L/kg',
        papaya: '350 L/kg',
        blueberrie: "800 L/kg",
        lemon: '1,000 L/kg',
        book:440,
        jeans: 7600,
        tShirt: 2500
    };

    const result = waterFootprintData[item];

    if (result) {
        document.getElementById('result').innerText = `The water footprint of ${item} is ${result} liters.`;
    } else {
        document.getElementById('result').innerText = 'Water footprint data not available for this item.';
    }
}
