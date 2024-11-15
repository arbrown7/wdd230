const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {
        // create a section element and store it in a variable named card using createElement(),
        const card = document.createElement("section");
        // create an h2 element and store it in a variable named "fullName",
        const fullName = document.createElement("h2");
        // create an img element and store it in a variable named "portrait",
        const portrait = document.createElement("img");
        // populate the heading element with the prophet's full name using a template string to build the full name,
        fullName.textContent = `${prophet.name}  ${prophet.lastname}`;
        // build the image element by setting the
        // src,
        portrait.setAttribute('src', prophet.imageurl);
        // alt,
        portrait.setAttribute('alt', `Portrait of ${prophet.name}  ${prophet.lastname}`);
        // loading,
        portrait.setAttribute('loading', 'lazy');
        // width, and
        portrait.setAttribute('width', '340');
        // height attributes using setAttribute().
        portrait.setAttribute('height', '440');

        const birthDate = document.createElement("p");
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        const birthPlace = document.createElement("p");
        birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;
        // Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        // Finally, add the section card to the "cards" div that was selected at the beginning of the script file.
        cards.appendChild(card);
    });
    
}

getProphetData();