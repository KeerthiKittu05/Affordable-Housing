document.getElementById('contact-form').addEventListener('submit', function(event) {  
    event.preventDefault();  
    alert('Thank you for your message, we will get back to you soon!');  
});  

function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

