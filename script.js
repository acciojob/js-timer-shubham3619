// write js code here if required
function updateTimer() {
    // Get current date and time
    let now = new Date();

    // Format the date
    let formattedDate = formatDate(now);

    // Update the HTML content
    document.getElementById('timer').textContent = formattedDate;

    // Update the timer every second
    setTimeout(updateTimer, 1000);
}

function formatDate(date) {
    // Format the date and time as per the requirement
    let day = formatDigit(date.getDate());
    let month = formatDigit(date.getMonth() + 1); // Months are zero-indexed
    let year = date.getFullYear();
    let hours = formatDigit(date.getHours());
    let minutes = formatDigit(date.getMinutes());
    let seconds = formatDigit(date.getSeconds());

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

function formatDigit(digit) {
    // Add leading zero if digit is less than 10
    return digit < 10 ? '0' + digit : digit;
}

// Start the timer
updateTimer();

