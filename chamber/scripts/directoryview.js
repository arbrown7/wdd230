const linksURL = "https://arbrown7.github.io/wdd230/chamber/data/members.json";

async function getDirectory() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayDirectory(data);
}

function displayDirectory(members) {
    const directory = document.getElementById("directory");
    const toggleButton = document.getElementById("toggleView");
    let isGridView = true;

    renderMembers(members); // Initial rendering in grid view

    toggleButton.addEventListener("click", () => {
        isGridView = !isGridView;
        toggleButton.textContent = isGridView ? "Switch to List View" : "Switch to Grid View";
        renderMembers(members);
    });

    function renderMembers(members) {
        directory.innerHTML = ""; // Clear previous content
        const containerClass = isGridView ? "grid" : "list";
        directory.className = containerClass;

        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.className = "member";

            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.description}</p>
            `;

            directory.appendChild(memberDiv);
        });
    }
}

// Initialize the member directory
getDirectory();
