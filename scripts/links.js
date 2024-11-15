const baseURL = "https://arbrown7.github.io/wdd230/";
const linksURL = "https://arbrown7.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data);
}

function displayLinks(weeks) {
    // Select the container for inserting links
    const container = document.getElementById("activity-links");
    container.innerHTML = ""; // Clear any existing content

    // Create the <ul> element for activities
    const activitiesList = document.createElement("ul");
    activitiesList.id = "activities";

    // Loop through each lesson in the JSON
    weeks.lessons.forEach(lesson => {
        // Create a <li> for the lesson
        const listItem = document.createElement("li");

        // Add the "Week 01:" label
        const weekLabel = document.createElement("strong");
        weekLabel.textContent = `Week ${lesson.lesson}: `;
        listItem.appendChild(weekLabel);

        // Create links for the lesson
        lesson.links.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            anchor.setAttribute("aria-label", "Activity link");
            anchor.target = "_blank"; // Open in a new tab

            listItem.appendChild(anchor);

            // Add a separator if not the last link
            if (index < lesson.links.length - 1) {
                const separator = document.createTextNode(" | ");
                listItem.appendChild(separator);
            }
        });

        // Append the list item to the activities list
        activitiesList.appendChild(listItem);
    });

    // Append the <ul> to the container
    container.appendChild(activitiesList);
}

getLinks();