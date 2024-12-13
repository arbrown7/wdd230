const linksURL = "https://arbrown7.github.io/wdd230/scoots/data/rental-data.json";

async function getDirectory() {
    const response = await fetch(linksURL);
    const data = await response.json();
    populateTable(data);
}

function populateTable(data) {
    const tableBody = document.querySelector("#rentalTable tbody");

    data.maxRentalPricing.forEach(item => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${item.rentalType}</td>
        <td>${item.maxPersons}</td>
        <td>$${item.reservation.halfDay}</td>
        <td>$${item.reservation.fullDay}</td>
        <td>$${item.walkIn.halfDay}</td>
        <td>$${item.walkIn.fullDay}</td>
      `;

      tableBody.appendChild(row);
    });
  }