document.addEventListener('DOMContentLoaded', function () {
    // Function to update the last visited message
    function updateLastVisited() {
        const visitMessageElement = document.getElementById("visit-message");

        // Get the current time
        const currentVisit = Date.now();

        // Get the last visit timestamp from localStorage
        const lastVisit = localStorage.getItem("lastVisit");

        // Function to calculate the difference in days
        const calculateDaysDifference = (last, current) => {
            const millisecondsInADay = 1000 * 60 * 60 * 24;
            return Math.floor((current - last) / millisecondsInADay);
        };

        // Determine the message to display
        let message;
        if (!lastVisit) {
            // No previous visit recorded
            message = "Welcome! Let us know if you have any questions.";
            console.log("first visit");
        } else {
            // Calculate the days difference
            const daysDifference = calculateDaysDifference(Number(lastVisit), currentVisit);

            if (daysDifference < 1) {
                message = "Back so soon! Awesome!";
            } else if (daysDifference === 1) {
                message = `You last visited 1 day ago.`;
            } else {
                message = `You last visited ${daysDifference} days ago.`;
            }
        }

        // Display the message
        visitMessageElement.textContent = message;

        // Update the last visit time in localStorage
        localStorage.setItem("lastVisit", currentVisit);
    }

    updateLastVisited();
});