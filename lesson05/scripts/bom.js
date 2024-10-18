const input = document.querySelector('#favchap'); // Reference to the input
const button = document.querySelector('button');  // Reference to the button
const list = document.querySelector('#list');     // Reference to the unordered list

button.addEventListener('click', () => {
    if (input.value !== '') { // Check if the input field is not blank
        const li = document.createElement('li'); // Create a new li element
        const deleteButton = document.createElement('button'); // Create a delete button

        li.textContent = input.value; // Set the li text content to the input value
        deleteButton.textContent = '❌'; // Set delete button text to '❌'

        li.append(deleteButton); // Append the delete button to the li
        list.append(li); // Append the li to the unordered list

        // Add an event listener to delete the li when the delete button is clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Remove the li from the list
            input.focus(); // Refocus the input field
        });

        input.focus(); // Refocus the input field after adding the chapter
        input.value = ''; // Clear the input field
    } else {
        input.focus(); // If input is blank, refocus the input field
    }
});
