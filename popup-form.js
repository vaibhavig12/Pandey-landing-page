// popup form to appear
// Get the form and the close button
const formPopup = document.getElementById('enquiryFormPopup');
const closeButton = document.getElementById('closeBtn');

// Get all "Enquire Now" buttons
const enquireButtons = document.querySelectorAll('.btn-outline-secondary');

// Function to show the form
function showForm() {
  formPopup.style.display = 'block';
}

// Function to hide the form
function hideForm() {
  formPopup.style.display = 'none';
}

// Add event listeners to each "Enquire Now" button
enquireButtons.forEach(button => {
  button.addEventListener('click', showForm);
});

// Add event listener to the close button
closeButton.addEventListener('click', hideForm);
// popup form to appear

// on submit form data to sent back to google StyleSheetList

// Add event listener to the form submission
function submitForm() {
    // Gather form data
    var formData = {
        "FullName": document.getElementById("FullName").value,
        "Email": document.getElementById("Email").value,
        "MobileNumber": document.getElementById("MobileNumber").value,
        "Message": document.getElementById("message").value
    };

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    var url = 'https://script.google.com/macros/s/AKfycbwn4ImON6egkT2hdPE7moz_DIfUjxlQjksNI3dVyfdj39DDZWcL0HMhaq2qsCUNUOKwIw/exec'; // Replace with your web app URL

    // Configure it: POST-request for the URL
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Create the query string
    var encodedData = Object.keys(formData).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]);
    }).join('&');

    // Send the request over the network
    xhr.send(encodedData);

    // Callback function to handle the response
    xhr.onload = function () {
        if (xhr.status != 200) { // Analyze HTTP response status
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // Show the result
            alert(xhr.responseText); // response is the server
        }
    };

    xhr.onerror = function () {
        alert('Request failed');
    };
}