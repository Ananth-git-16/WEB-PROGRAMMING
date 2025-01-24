document.getElementById('socialMediaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('name').value;
    const postContent = document.getElementById('postContent').value;

    // Here you can add your logic to handle the form data
    // For demonstration, we'll just show a message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `🎉 Post submitted by ${username} is "${postContent}" 🎉`;
    
    // Clear the form
    document.getElementById('socialMediaForm').reset();
});