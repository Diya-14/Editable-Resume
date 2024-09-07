// Function to generate the resume dynamically from form input
function generateResume() {
    var _a;
    // Retrieve input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var location = document.getElementById('location').value;
    var contact = document.getElementById('contact').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var awards = document.getElementById('awards').value;
    var activities = document.getElementById('activities').value;
    // Populate the resume with the form data
    document.getElementById('resume-name').innerText = name;
    document.getElementById('resume-email').innerText = email;
    document.getElementById('resume-location').innerText = location;
    document.getElementById('resume-contact').innerText = contact;
    document.getElementById('resume-objective').innerText = objective;
    document.getElementById('resume-education').innerText = education;
    document.getElementById('resume-experience').innerText = experience;
    document.getElementById('resume-skills').innerText = skills;
    document.getElementById('resume-awards').innerText = awards;
    document.getElementById('resume-activities').innerText = activities;
    // Show the resume output section
    (_a = document.getElementById('resume-output')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    // Make the resume editable
    setupInlineEditing();
}
// Function to enable inline editing and auto-save the changes
function setupInlineEditing() {
    var editableFields = [
        'resume-objective',
        'resume-education',
        'resume-experience',
        'resume-skills',
        'resume-awards',
        'resume-activities'
    ];
    editableFields.forEach(function (fieldId) {
        var element = document.getElementById(fieldId);
        // Listen for the 'blur' event to save the changes automatically
        element.addEventListener('blur', function () {
            var field = fieldId.replace('resume-', '');
            document.getElementById(field).value = element.innerText;
        });
    });
}
