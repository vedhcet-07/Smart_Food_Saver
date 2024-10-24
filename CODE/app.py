from flask import Flask, jsonify, request, render_template
import requests

app = Flask(__name__, static_folder='static')

# Replace with your IBM Cloud API key
API_KEY = 'API-KEY'
SCORING_URL = 'API-URL'


def get_ibm_token():
    """Fetch the IBM Cloud authentication token."""
    response = requests.post(
        'https://iam.cloud.ibm.com/identity/token',
        data={"apikey": API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'},
        headers={"Content-Type": "application/x-www-form-urlencoded"}
    )
    return response.json()["access_token"]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get-token', methods=['GET'])
def get_token():
    """Return the IBM Cloud token to the front end."""
    try:
        token = get_ibm_token()
        return jsonify({"token": token}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/predict', methods=['POST'])
def predict():
    """Handle predictions from the front end."""
    # Get the input data from the POST request
    data = request.json
    food_type = data['foodType']
    guest_number = data['guestNumber']
    event_type = data['eventType']
    storage_conditions = data['storageConditions']
    seasonality = data['seasonality']
    pricing = data['pricing']

    # Prepare the payload for the IBM Watson API
    payload = {
        "input_data": [{
            "fields": ["Type of Food", "Number of Guests", "Event Type", "Storage Conditions", "Seasonality", "Pricing"],
            "values": [[food_type, guest_number, event_type, storage_conditions, seasonality, pricing]]
        }]
    }

    # Get IBM Cloud auth token
    token = get_ibm_token()

    # Make the request to the IBM Watson API
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    response = requests.post(SCORING_URL, json=payload, headers=headers)
    result = response.json()

    # Return the prediction result
    prediction_value = round(result['predictions'][0]['values'][0][0])  # Adjust based on your model response structure
    return jsonify({"prediction": prediction_value})


if __name__ == '__main__':
    app.run(debug=True)
