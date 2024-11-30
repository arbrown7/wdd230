document.addEventListener("DOMContentLoaded", () => {
    const spotlightContainer = document.querySelector(".spotlight-container");

    if (!spotlightContainer) {
        console.error("Error: Element with class 'spotlight-container' not found in the DOM.");
        return;
    }

    // Fetch JSON data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            // Filter members with "Gold" or "Silver" membership levels
            const spotlightMembers = data.filter(member =>
                ["Gold", "Silver"].includes(member.membershipLevel)
            );

            // Shuffle and select up to 3 random members
            const selectedMembers = spotlightMembers
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);

            // Append HTML for each selected member to the spotlight-container
            selectedMembers.forEach(member => {
                // Create the member's spotlight HTML
                const spotlightHTML = `
                    <div class="spotlight">
                        <h3><a href="#">${member.name}</a></h3>
                        <div class="spotlight">
                            <p>${member.description}</p>
                        </div>
                    </div>
                `;

                // Create a temporary container and insert the HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = spotlightHTML;

                // Append the generated HTML to the spotlight-container
                spotlightContainer.appendChild(tempDiv.firstElementChild);
            });
        })
        .catch(error => console.error("Error fetching member data:", error));
});
