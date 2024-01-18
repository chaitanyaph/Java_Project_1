
function redirectToPage() {
    var action = document.querySelector('button[name="action"]:focus').value;
    if (action === 'signup') {
        window.location.href = 'signup.html';
    } else if (action === 'login') {
        window.location.href = 'login.html';
    }
    return false; // Prevent the form from actually submitting
}
               