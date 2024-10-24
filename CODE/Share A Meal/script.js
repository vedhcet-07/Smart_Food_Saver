// Store form data in session storage
let formData = {
    donor: {},
    receiver: {}
};

// Show/hide different sections
function hideAllSections() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('donor-form').style.display = 'none';
    document.getElementById('donor-checklist').style.display = 'none';
    document.getElementById('receiver-form').style.display = 'none';
    document.getElementById('receiver-checklist').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';
}

function showHome() {
    hideAllSections();
    document.getElementById('home-section').style.display = 'block';
    // Clear stored form data
    formData = {
        donor: {},
        receiver: {}
    };
}

function showContact() {
    hideAllSections();
    
    // Redirect to the new donor form page
    window.location.href = '-contact.html'; // Change the filename to the actual HTML file
}

function showDonorForm() {
    hideAllSections();
    document.getElementById('donor-form').style.display = 'block';
}

function showReceiverForm() {
    hideAllSections();
    document.getElementById('receiver-form').style.display = 'block';
}

// Form validation functions
function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;  // Simple 10-digit validation
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form submission handlers
function submitDonorDetails(event) {
    event.preventDefault();

    const name = document.getElementById('donor-name').value;
    const address = document.getElementById('donor-address').value;
    const phone = document.getElementById('donor-phone').value;
    const email = document.getElementById('donor-email').value;

    // Validate phone and email
    if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Store donor details
    formData.donor = {
        name: name,
        address: address,
        phone: phone,
        email: email
    };

    // Show checklist page
    hideAllSections();
    document.getElementById('donor-checklist').style.display = 'block';
}

function submitReceiverDetails(event) {
    event.preventDefault();

    const name = document.getElementById('receiver-name').value;
    const address = document.getElementById('receiver-address').value;
    const phone = document.getElementById('receiver-phone').value;
    const email = document.getElementById('receiver-email').value;

    // Validate phone and email
    if (!validatePhoneNumber(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Store receiver details
    formData.receiver = {
        name: name,
        address: address,
        phone: phone,
        email: email
    };

    // Show checklist page
    hideAllSections();
    document.getElementById('receiver-checklist').style.display = 'block';
}

function getSelectedFoodItems(formId) {
    const checkboxes = document.querySelectorAll(`#${formId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(cb => cb.id.replace('-req', ''));
}

function submitDonorFoodList(event) {
    event.preventDefault();

    const selectedItems = getSelectedFoodItems('donor-food-form');
    
    // Validate at least one item is selected
    if (selectedItems.length === 0) {
        alert('Please select at least one food item to donate');
        return;
    }

    // Add selected items to stored data
    formData.donor.foodItems = selectedItems;
    
    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.innerHTML = `
        Thank you for your donation, ${formData.donor.name}! 
        We will contact you shortly at ${formData.donor.phone} to arrange pickup.
    `;
    successMessage.style.display = 'block';

    // Reset form and data
    document.getElementById('donor-food-form').reset();
    setTimeout(() => {
        showHome();
    }, 3000);

    // Here you would typically send the formData to a server
    console.log('Donor submission:', formData.donor);
}

function submitReceiverFoodList(event) {
    event.preventDefault();

    const selectedItems = getSelectedFoodItems('receiver-food-form');
    
    // Validate at least one item is selected
    if (selectedItems.length === 0) {
        alert('Please select at least one food item you need');
        return;
    }

    // Add selected items to stored data
    formData.receiver.foodItems = selectedItems;

    // Show success message
    const successMessage = document.getElementById('success-message');
    successMessage.innerHTML = `
        Thank you for your request, ${formData.receiver.name}! 
        We will match you with available donors and contact you at ${formData.receiver.phone} soon.
    `;
    successMessage.style.display = 'block';

    // Reset form and data
    document.getElementById('receiver-food-form').reset();
    setTimeout(() => {
        showHome();
    }, 3000);

    // Here you would typically send the formData to a server
    console.log('Receiver submission:', formData.receiver);
}

// Back button functionality
function goBack() {
    if (document.getElementById('donor-checklist').style.display === 'block') {
        showDonorForm();
    } else if (document.getElementById('receiver-checklist').style.display === 'block') {
        showReceiverForm();
    } else {
        showHome();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    showHome();
});