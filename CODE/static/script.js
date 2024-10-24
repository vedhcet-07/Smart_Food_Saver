
document.getElementById('foodPredictionForm').addEventListener('submit', async (event) => {
    event.preventDefault();  // Prevent default form submission

    // Get form data
    const foodType = document.getElementById('foodType').value; // Gets selected food type
    const guestNumber = document.getElementById('guestNumber').value; // Assuming you have an input for guest number
    const eventType = document.getElementById('eventType').value; // Gets selected event type
    const storageConditions = document.getElementById('storageConditions').value; // Gets selected storage conditions
    const seasonality = document.getElementById('seasons').value; // Changed from 'seasonality' to 'seasons' for consistency
    const pricing = document.getElementById('pricing').value; // Gets selected pricing
    
    // Build the payload
    const payload = {
        foodType: foodType,
        guestNumber: guestNumber,
        eventType: eventType,
        storageConditions: storageConditions,
        seasonality: seasonality,
        pricing: pricing
    };

    try {
        // Make the prediction request
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        // Display the prediction result
        const resultElement = document.getElementById('predictionResult');
        resultElement.textContent = `Predicted Quantity of Food: ${data.prediction}`;

    } catch (error) {
        console.error('Error:', error);
    }
});
