document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('panCardForm');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Clear all previous error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.style.visibility = 'hidden');

        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const fatherName = document.getElementById('fatherName').value.trim();
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const mobile = document.getElementById('mobile').value.trim();
        const email = document.getElementById('email').value.trim();
        const aadhaar = document.getElementById('aadhaar').value.trim();
        const address = document.getElementById('address').value.trim();
        const identityProof = document.getElementById('identityProof').files.length;
        const declaration = document.getElementById('declaration').checked;

        let isValid = true;

        // Validate Full Name
        if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            showError('fullName', 'Please enter a valid Full Name (letters and spaces only).');
            isValid = false;
        }

        // Validate Father's Name
        if (!/^[a-zA-Z\s]+$/.test(fatherName)) {
            showError('fatherName', 'Please enter a valid Father’s Name (letters and spaces only).');
            isValid = false;
        }

        // Validate Date of Birth and Age
        if (!dob || !isValidAge(dob)) {
            showError('dob', 'Applicant must be at least 18 years old.');
            isValid = false;
        }

        // Validate Gender Selection
        if (!gender) {
            showError('male', 'Please select your gender.');
            isValid = false;
        }

        // Validate Mobile Number
        if (!/^\d{10}$/.test(mobile)) {
            showError('mobile', 'Please enter a valid 10-digit mobile number.');
            isValid = false;
        }

        // Validate Email Address
        if (!/\S+@\S+\.\S+/.test(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate Aadhaar Number
        if (!/^\d{12}$/.test(aadhaar)) {
            showError('aadhaar', 'Please enter a valid 12-digit Aadhaar number.');
            isValid = false;
        }

        // Validate Residential Address
        if (address.length < 10) {
            showError('address', 'Please enter a valid address (at least 10 characters).');
            isValid = false;
        }

        // Validate Identity Proof Upload
        if (identityProof === 0) {
            showError('identityProof', 'Please upload a valid identity proof document.');
            isValid = false;
        }

        // Validate Declaration Checkbox
        if (!declaration) {
            showError('declaration', 'You must agree to the declaration.');
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert('Form submitted successfully!');
            // form.submit(); // Uncomment to allow form submission to server
        }
    });

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
    
    // Function to show error messages
    function showError(inputId, message) {
        const inputElement = document.getElementById(inputId);
        const errorElement = inputElement.nextElementSibling;
        errorElement.textContent = message;
        errorElement.style.visibility = 'visible';
    }

    // Function to validate age
    function isValidAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    }
});
