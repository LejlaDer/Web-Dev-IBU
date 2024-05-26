// Function to handle user login
function loginUser() {
    var email = document.getElementsByName("Email")[0].value.trim();
    var phone = document.getElementsByName("Phone")[0].value.trim();

    var user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.phone === phone) {
        // Save user session
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        document.getElementById("loginMessage").style.display = "block";
    }
}
