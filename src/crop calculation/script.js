function calculateWaterRequirement() {
    const fieldArea = parseFloat(document.getElementById('field-area').value); // Area of the field in hectares
    const crop = document.getElementById("crop").value;
    const soil = document.getElementById("soil").value;
    const climate = document.getElementById("climate").value;

    let baseWaterRequirement;

    // Base water requirement for crops (in mm per day per hectare)
    switch (crop) {
        case "wheat":
            baseWaterRequirement = 5; // mm/day
            break;
        case "rice":
            baseWaterRequirement = 10; // mm/day
            break;
        case "maize":
            baseWaterRequirement = 7; // mm/day
            break;
        case "cotton":
            baseWaterRequirement = 8; // mm/day
            break;
        default:
            baseWaterRequirement = 0;
    }

    // Adjust based on soil type
    let soilFactor;
    switch (soil) {
        case "sandy":
            soilFactor = 1.2;
            break;
        case "loamy":
            soilFactor = 1.0;
            break;
        case "clay":
            soilFactor = 0.8;
            break;
        case "silt":
            soilFactor = 0.9;
            break;
        default:
            soilFactor = 1;
    }

    // Adjust based on climate condition
    let climateFactor;
    switch (climate) {
        case "dry":
            climateFactor = 1.5;
            break;
        case "humid":
            climateFactor = 0.8;
            break;
        case "temperate":
            climateFactor = 1.0;
            break;
        case "wet":
            climateFactor = 0.7;
            break;
        default:
            climateFactor = 1;
    }

    // Calculate the daily water requirement per hectare
    const dailyWaterRequirementPerHectare = baseWaterRequirement * soilFactor * climateFactor;

    // Calculate the total water requirement for the field
    const totalWaterRequirement = dailyWaterRequirementPerHectare * fieldArea;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `The estimated total water requirement for ${fieldArea} hectares of ${crop} is <strong>${totalWaterRequirement.toFixed(2)} mm/day</strong>.`;
}
