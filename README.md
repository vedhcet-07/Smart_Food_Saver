# Smart_Food_Saver

🍽️ Share a Meal
Share a Meal is a web-based platform created to reduce food wastage by redistributing surplus food from events like weddings, functions, and corporate gatherings to those in need. The platform facilitates seamless donation of surplus food while using IBM Watson X for predictive analytics to help event organizers better plan future food orders, reducing wastage. The AI model is deployed using Python.

🚀 Features
Donation Section: Donors can list surplus food categorized by main meals, side dishes, desserts, and more.
Receiver Section: Receivers can browse live food listings and request donations based on availability.
Real-time Listings: Food donations go live for up to six hours, ensuring timely redistribution.
Predictive Analytics: IBM Watson X predicts future food wastage and provides insights on how much food to prepare for future events, preventing over-preparation

📖 Table of Contents
Technologies Used
Installation
Usage
IBM Watson Integration
Contributing
License

🛠️ Technologies Used
Frontend: HTML, CSS, JavaScript
AI/Cloud Integration: IBM Watson X, Cloud AI
Model Deployment: Python (Flask or FastAPI recommended)
Hosting: Glitch.com or any cloud platform like AWS, GCP, or IBM Cloud


🛠️ Installation
Prerequisites
Python 3.x
IBM Watson API Credentials

Clone and install flask . run app.py and open in local browser


![image](https://github.com/user-attachments/assets/134edc0f-addc-4029-9349-7ccbd0d502e2)

![image](https://github.com/user-attachments/assets/773951b6-695d-4b7c-abb2-61795ca6dfca)



📋 Usage
Access the platform by navigating to http://localhost:5000 (or wherever your Python app is hosted).
Donors can log in and list food under different categories such as main meals, side dishes, and desserts.
Receivers can view and select food items listed by donors.
The platform automatically removes food listings after they’ve been live for 6 hours.
IBM Watson X provides predictive suggestions on the amount of food to order for future events based on historical data.

🧠 IBM Watson Integration
IBM Watson X is integrated to offer predictive analytics on food wastage:

Food Wastage Prediction: IBM Watson analyzes data from past events to predict how much food will likely be wasted.
Optimal Food Suggestions: Based on event size and type, IBM Watson provides recommendations on the optimal amount of food to prepare, reducing over-preparation.
The model is deployed using Python and integrated with the platform to provide real-time insights and suggestions.


⚙️ Backend - Python
The platform’s AI-driven backend is powered by Python and deployed using frameworks like Flask or FastAPI:

Python handles the deployment of the AI model, form submissions, and the processing of requests for both donors and receivers.
The app can be hosted on platforms like Glitch.com, AWS, Google Cloud, or IBM Cloud, depending on your deployment choice.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.
