function sendMail(contactForm) {
    emailjs.send("service_mo4dj7a","sergiy", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thanks for messaging me whith offering project, I will contact you soon.");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    // return false;  // To block from loading a new page
}