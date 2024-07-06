// Function to calculate age based on the date input by the user
function calculateAge() {
  // Get the date input value and convert it to a Date object
  const dateInput = document.getElementById("date").value;

  // Prompt the user to enter their date of birth if the input is empty
  if (!dateInput) {
    document.getElementById("result").textContent =
      "Please Enter your date of birth.";
    return;
  }

  const birthDate = new Date(dateInput);
  const today = new Date();

  // Validate the date input: check if it's a valid date and not in the future
  if (birthDate > today) {
    document.getElementById("result").textContent =
      "Please Enter a valid date of birth.";
    return;
  }

  // Calculate the age in years, months, and days
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust for negative days and months
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get days in the previous month
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Display the calculated age in the result paragraph
  document.getElementById(
    "result"
  ).textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
}

// Add an event listener to the "Calculate" button to call the calculateAge function when clicked
document.getElementById("calculateBtn").addEventListener("click", calculateAge);
