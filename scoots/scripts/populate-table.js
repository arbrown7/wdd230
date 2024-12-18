const linksURL = "https://arbrown7.github.io/wdd230/scoots/data/rental-data.json";

async function getDirectory() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);  // Log the data to check if it's fetched correctly.

        populateTable(data);  // Call function to populate the table
    } catch (error) {
        console.error("Error fetching data:", error);  // Catch any errors and log them
    }
}

function populateTable(data) {
    const tableBody = document.querySelector("#rentalTable tbody");

    data.maxRentalPricing.forEach(item => {
        const row = document.createElement("tr");

        // Create a table row with dynamic data
        row.innerHTML = `
            <td class="vehicle-name">${item.rentalType}</td>
            <td>${item.maxPersons}</td>
            <td>$${item.reservation.halfDay}</td>
            <td>$${item.reservation.fullDay}</td>
            <td>$${item.walkIn.halfDay}</td>
            <td>$${item.walkIn.fullDay}</td>
        `;

        // Add a hidden div with details that can be shown on click
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("vehicle-details");
        detailsDiv.innerHTML = `
            <p><strong>Max Persons:</strong> ${item.maxPersons}</p>
            <p><strong>Reservation (3 hrs):</strong> $${item.reservation.halfDay}</p>
            <p><strong>Reservation (Full Day):</strong> $${item.reservation.fullDay}</p>
            <p><strong>Walk-In (3 hrs):</strong> $${item.walkIn.halfDay}</p>
            <p><strong>Walk-In (Full Day):</strong> $${item.walkIn.fullDay}</p>
        `;

        row.appendChild(detailsDiv);
        tableBody.appendChild(row);
    });

    // Add event listener to vehicle names to toggle details visibility
    document.querySelectorAll('.vehicle-name').forEach(item => {
        item.addEventListener('click', () => {
            const details = item.closest('tr').querySelector('.vehicle-details');
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
}

// Call the function to fetch and display the data
getDirectory();
