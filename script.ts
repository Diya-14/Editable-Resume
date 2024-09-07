// Function to generate the resume dynamically from form input
function generateResume(): void {
    // Retrieve input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const awards = (document.getElementById('awards') as HTMLTextAreaElement).value;
    const activities = (document.getElementById('activities') as HTMLTextAreaElement).value;

    // Populate the resume with the form data
    (document.getElementById('resume-name') as HTMLElement).innerText = name;
    (document.getElementById('resume-email') as HTMLElement).innerText = email;
    (document.getElementById('resume-location') as HTMLElement).innerText = location;
    (document.getElementById('resume-contact') as HTMLElement).innerText = contact;
    (document.getElementById('resume-objective') as HTMLElement).innerText = objective;
    (document.getElementById('resume-education') as HTMLElement).innerText = education;
    (document.getElementById('resume-experience') as HTMLElement).innerText = experience;
    (document.getElementById('resume-skills') as HTMLElement).innerText = skills;
    (document.getElementById('resume-awards') as HTMLElement).innerText = awards;
    (document.getElementById('resume-activities') as HTMLElement).innerText = activities;

    // Show the resume output section
    document.getElementById('resume-output')?.classList.remove('hidden');

    // Make the resume editable
    setupInlineEditing();
}

// Function to enable inline editing and auto-save the changes
function setupInlineEditing(): void {
    const editableFields = [
        'resume-objective',
        'resume-education',
        'resume-experience',
        'resume-skills',
        'resume-awards',
        'resume-activities'
    ];

    editableFields.forEach(fieldId => {
        const element = document.getElementById(fieldId) as HTMLElement;
        
        // Listen for the 'blur' event to save the changes automatically
        element.addEventListener('blur', () => {
            const field = fieldId.replace('resume-', '');
            (document.getElementById(field) as HTMLTextAreaElement).value = element.innerText;
        });
    });
}
