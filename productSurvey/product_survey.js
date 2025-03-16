// Get reference to the button outside the function
const submitButton = document.getElementById('submitBtn');

// Function to handle feedback submission
function submitFeedback() {
    // Retrieve input values inside the function
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Validate that fields are not empty
    if (!username || !age || !email || !job || !designation || !productType || !feedback) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Show alert message
    alert('Thank you for your valuable feedback!');

    // Display user information
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;

    // Make the user info section visible
    document.getElementById('userInfo').style.display = 'block';
}

// Attach event listener to button click
submitButton.addEventListener('click', submitFeedback);

// Allow pressing 'Enter' to submit the form
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});