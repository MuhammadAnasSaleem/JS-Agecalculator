// Add event listener to the form
inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Call finalDate function when form is submitted
    finalDate();
});

function finalDate() {
    const userinput = document.getElementById("userinput").value;
    const userYear = new Date(userinput).getFullYear();
    const userMonth = new Date(userinput).getMonth() + 1;
    const userDate = new Date(userinput).getDate();
    
    const today = new Date();
    const yearNow = today.getFullYear();
    const monthNow = today.getMonth() + 1;
    const dateNow = today.getDate();

    const age = ageCalculator(yearNow, monthNow, dateNow, userYear, userMonth, userDate);

    // Update the HTML content with the calculated age
    const Age = document.getElementById("Age");
    Age.innerHTML = `<p>Age: ${age.years} Years, ${age.months} Months, ${age.days} Days</p>`;
}

function ageCalculator(yearNow, monthNow, dateNow, userYear, userMonth, userDate) {
    let years = yearNow - userYear;
    let months = monthNow - userMonth;
    let days = dateNow - userDate;

    if (months < 0 || (months === 0 && dateNow < userDate)) {
        years--;
        months += 12;
    }
    
    if (days < 0) {
        const lastDayOfMonth = new Date(yearNow, monthNow - 1, 0).getDate();
        days += lastDayOfMonth;
        months--; // Adjust months if borrowing from previous month
    }

    return { years, months, days };
}
