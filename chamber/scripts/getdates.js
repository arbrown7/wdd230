document.addEventListener('DOMContentLoaded', function () {
    // Function to update the current year
    function updateCurrentYear() {
        const currentYear = new Date().getFullYear();
        const yearElement = document.querySelector('#currentYear');
        if (yearElement) {
            yearElement.textContent = currentYear;
        }
    }

    // Function to update the last modified date
    function updateLastModified() {
        const lastModified = document.lastModified;
        const lastModifiedElement = document.querySelector('#lastModified');
        if (lastModifiedElement) {
            lastModifiedElement.textContent = lastModified;
        }
    }


    updateCurrentYear();
    updateLastModified();
});
