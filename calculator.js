

// Initialize datepicker
const birthdateInput = document.getElementById('birthdate');
DatePicker(birthdateInput, {
    onSelect: function(date) {
        birthdateInput.value = date.toISOString().split('T')[0]; // format to YYYY-MM-DD
    }
});

document.getElementById('calculate-age').addEventListener('click', function() {
    const birthdateValue = birthdateInput.value;

    // Check if birthdate is filled
    if (!birthdateValue) {
        alert("Please select your birthdate.");
        return;
    }

    // Parse the input birthdate
    const birthdate = DateTime.fromISO(birthdateValue);
    const now = DateTime.now();

    // Calculate the difference
    const diff = now.diff(birthdate, ['years', 'months']).toObject();

    // Display the result
    const ageDisplay = document.getElementById('age-display');
    ageDisplay.textContent = `You are ${Math.floor(diff.years)} years and ${Math.floor(diff.months)} months old.`;
});