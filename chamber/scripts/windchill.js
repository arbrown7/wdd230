function calculateWindChill(temp, speed) {
    // Check if the temperature and wind speed meet the requirements
    if (temp <= 50 && speed > 3.0) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        return windChill.toFixed(1); // Round to 1 decimal place
    } else {
        return "N/A"; // Not applicable
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve temperature and wind speed from the HTML
    const temp = parseFloat(document.getElementById("temperature").textContent);
    const speed = parseFloat(document.getElementById("windspeed").textContent);

    // Calculate and display the wind chill
    const windChillValue = calculateWindChill(temp, speed);
    document.getElementById("windchill").textContent = windChillValue;
});
