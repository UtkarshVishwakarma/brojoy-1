function submitInfo() {
    const table = document.getElementById("info-table");
    const submittedInfoTable = document.getElementById("submitted-info-table").getElementsByTagName("tbody")[0];
    const categoryValue = document.getElementById("age-category").value;

    // Clear previous submissions
    submittedInfoTable.innerHTML = '';

    // Collect the input data
    for (let i = 0; i < table.rows.length - 1; i++) { // Exclude header row
        const playerName = table.rows[i + 1].cells[1].getElementsByTagName("input")[0].value;
        const bibNo = table.rows[i + 1].cells[2].getElementsByTagName("input")[0].value;
        const schoolName = table.rows[i + 1].cells[3].getElementsByTagName("select")[0].value;

        // Add the row to the submitted info table if playerName is not empty
        if (playerName) {
            const newRow = submittedInfoTable.insertRow();
            newRow.insertCell(0).innerText = i + 1; // Track No
            newRow.insertCell(1).innerText = playerName; // Player Name
            newRow.insertCell(2).innerText = bibNo; // Bib No
            newRow.insertCell(3).innerText = schoolName; // School Name
        }
    }

    // Set the category heading
    document.getElementById("category-heading").innerText = `Category: ${categoryValue}`;

    // Hide the main form and show the submitted information container
    document.getElementById("form-container").style.display = 'none';
    document.getElementById("display-container").style.display = 'block';
}
